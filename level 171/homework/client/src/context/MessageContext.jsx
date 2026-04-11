import { createContext, useEffect, useState } from "react";
import { fetchMessages, fetchSendMessage } from "../services/MessageService";
import { socket } from "../configs/socket";

// eslint-disable-next-line react-refresh/only-export-components
export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const handleNewMessage = (message) => {
            console.log(message);
            setMessages(prev => [ ...prev, message ]);
        }

        const handleDeleteMessage = (messageId) => {
            setMessages(prev => prev.filter(msg => msg._id != messageId));
        }

        socket.on("newMessage", handleNewMessage);
        socket.on("deleteMessage", handleDeleteMessage);

        return () => {
            socket.off("newMessage");
            socket.off("deleteMessage");
        }
    }, [])

    const sendMessage = async (formData, receiverId) => {
        try {
            const res = await fetchSendMessage(formData, receiverId);

            return res.data.data.chatId;
        } catch (err) {
            console.log(err);
        }
    }

    const getMessages = async (chatId) => {
        try {
            const res = await fetchMessages(chatId);

            setMessages(res.data.data.messages);
        } catch (err) {
            console.log(err);
        }
    }

    const joinChat = async (chatId) => {
        await getMessages(chatId);
        socket.emit("joinChat", chatId);
    }

    const leaveChat = (chatId) => {
        setMessages([]);
        socket.emit("leaveChat", chatId);
    }

    return (
        <MessageContext.Provider value={{ messages, sendMessage, joinChat, leaveChat }}>
            {children}
        </MessageContext.Provider>
    )
}