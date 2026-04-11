import { createContext, useEffect, useState } from "react";
import { fetchDeleteMessage, fetchMessagesByGroup, fetchSendMessage } from "../services/MessageService";
import { socket } from "../config/socket";

// eslint-disable-next-line react-refresh/only-export-components
export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const [activeGroupId, setActiveGroupId] = useState(null);

    useEffect(() => {
        const handleIncomingMessage = (incomingMessage) => {
            if (!incomingMessage?.group) return;

            const incomingGroupId = incomingMessage.group.toString();

            if (incomingGroupId !== activeGroupId) return;

            setMessages((prev) => {
                if (prev.some((message) => message._id === incomingMessage._id)) {
                    return prev;
                }

                return [...prev, incomingMessage];
            });
        };

        const handleDeletedMessage = ({ messageId, groupId }) => {
            if (!messageId || !groupId) return;
            if (groupId.toString() !== activeGroupId) return;

            setMessages((prev) => prev.filter((message) => message._id !== messageId));
        };

        socket.on("newMessage", handleIncomingMessage);
        socket.on("messageDeleted", handleDeletedMessage);

        return () => {
            socket.off("newMessage", handleIncomingMessage);
            socket.off("messageDeleted", handleDeletedMessage);
        }
    }, [activeGroupId]);

    const getGroupMessages = async (groupId) => {
        try {
            const res = await fetchMessagesByGroup(groupId);

            setMessages(res.data.data.messages);
        } catch (err) {
            console.log(err);
        }
    }

    const sendMessage = async (groupId, formData) => {
        try {
            await fetchSendMessage(groupId, formData);
        } catch (err) {
            console.log(err);
        }
    }

    const deleteMessage = async (messageId) => {
        try {
            const res = await fetchDeleteMessage(messageId);
            alert(res.data.message);
        } catch (err) {
            console.log(err);
        }
    }

    const enterGroupChat = (groupId) => {
        if (!groupId) return;

        const normalizedGroupId = groupId.toString();

        if (activeGroupId && activeGroupId !== normalizedGroupId) {
            socket.emit("leaveGroup", activeGroupId);
        }

        socket.emit("joinGroup", normalizedGroupId);
        setActiveGroupId(normalizedGroupId);
    }

    const leaveGroupChat = (groupId) => {
        if (!groupId) return;

        const normalizedGroupId = groupId.toString();

        socket.emit("leaveGroup", normalizedGroupId);

        if (activeGroupId === normalizedGroupId) {
            setActiveGroupId(null);
            setMessages([]);
        }
    }
    
    return (
        <MessageContext.Provider value={{ messages, getGroupMessages, sendMessage, deleteMessage, enterGroupChat, leaveGroupChat }}>
            {children}
        </MessageContext.Provider>
    )
}