import { createContext, useCallback, useEffect, useRef, useState } from "react";
import {
    fetchDeleteMessage,
    fetchEditMessage,
    fetchMessagesByGroup,
    fetchSendMessage
} from "../services/MessageService";
import { socket } from "../config/socket";
import { getErrorMessage } from "../utils/getErrorMessage";
import { useAuth } from "../hooks/useAuth";
import { useToast } from "../hooks/useToast";

// eslint-disable-next-line react-refresh/only-export-components
export const MessageContext = createContext();

const TYPING_PING_INTERVAL = 2000;

export const MessageProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const [activeGroupId, setActiveGroupId] = useState(null);
    const [typingUsers, setTypingUsers] = useState([]);
    const [onlineMembers, setOnlineMembers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sending, setSending] = useState(false);

    const { user } = useAuth();
    const toast = useToast();

    // Socket events arrive outside of React's render cycle, so the currently
    // open group is kept in a ref as well to filter them reliably.
    const activeGroupIdRef = useRef(null);
    const lastTypingPingRef = useRef(0);

    const isActive = (groupId) => groupId?.toString() === activeGroupIdRef.current;

    useEffect(() => {
        const handleIncomingMessage = (incomingMessage) => {
            if (!isActive(incomingMessage?.group)) return;

            setMessages((prev) => (
                prev.some((message) => message._id === incomingMessage._id)
                    ? prev
                    : [...prev, incomingMessage]
            ));
        };

        const handleEditedMessage = (editedMessage) => {
            if (!isActive(editedMessage?.group)) return;

            setMessages((prev) => prev.map((message) => (
                message._id === editedMessage._id ? editedMessage : message
            )));
        };

        const handleDeletedMessage = ({ messageId, groupId }) => {
            if (!messageId || !isActive(groupId)) return;

            setMessages((prev) => prev.filter((message) => message._id !== messageId));
        };

        const handleTyping = ({ groupId, users }) => {
            if (!isActive(groupId)) return;

            setTypingUsers((users || []).filter((typingUser) => typingUser.id !== user?._id));
        };

        const handleGroupUsers = ({ groupId, users }) => {
            if (!isActive(groupId)) return;

            setOnlineMembers(users || []);
        };

        const handleSocketError = ({ message }) => toast.error(message);

        socket.on("newMessage", handleIncomingMessage);
        socket.on("messageEdited", handleEditedMessage);
        socket.on("messageDeleted", handleDeletedMessage);
        socket.on("typing", handleTyping);
        socket.on("groupUsers", handleGroupUsers);
        socket.on("socketError", handleSocketError);

        return () => {
            socket.off("newMessage", handleIncomingMessage);
            socket.off("messageEdited", handleEditedMessage);
            socket.off("messageDeleted", handleDeletedMessage);
            socket.off("typing", handleTyping);
            socket.off("groupUsers", handleGroupUsers);
            socket.off("socketError", handleSocketError);
        }
    }, [user, toast]);

    const enterGroupChat = useCallback((groupId) => {
        if (!groupId) return;

        const normalizedGroupId = groupId.toString();
        const previousGroupId = activeGroupIdRef.current;

        if (previousGroupId && previousGroupId !== normalizedGroupId) {
            socket.emit("leaveGroup", previousGroupId);
        }

        activeGroupIdRef.current = normalizedGroupId;
        setActiveGroupId(normalizedGroupId);
        setTypingUsers([]);
        setOnlineMembers([]);

        socket.emit("joinGroup", normalizedGroupId);
    }, []);

    // Reconnecting has to put us back into the room we are looking at.
    useEffect(() => {
        const handleConnect = () => {
            if (activeGroupIdRef.current) socket.emit("joinGroup", activeGroupIdRef.current);
        }

        socket.on("connect", handleConnect);

        return () => socket.off("connect", handleConnect);
    }, []);

    const leaveGroupChat = useCallback((groupId) => {
        const normalizedGroupId = groupId?.toString() || activeGroupIdRef.current;

        if (!normalizedGroupId) return;

        socket.emit("typing:stop", normalizedGroupId);
        socket.emit("leaveGroup", normalizedGroupId);

        if (activeGroupIdRef.current === normalizedGroupId) {
            activeGroupIdRef.current = null;
            setActiveGroupId(null);
            setMessages([]);
            setTypingUsers([]);
            setOnlineMembers([]);
        }
    }, []);

    const getGroupMessages = useCallback(async (groupId) => {
        setLoading(true);

        try {
            const res = await fetchMessagesByGroup(groupId);

            if (!isActive(groupId)) return;

            setMessages(res.data.data.messages);
        } catch (err) {
            toast.error(getErrorMessage(err, "Could not load the messages!"));
        } finally {
            setLoading(false);
        }
    }, [toast]);

    const sendMessage = async (groupId, formData) => {
        setSending(true);

        try {
            await fetchSendMessage(groupId, formData);
            socket.emit("typing:stop", groupId.toString());
            lastTypingPingRef.current = 0;

            return true;
        } catch (err) {
            toast.error(getErrorMessage(err, "Could not send the message!"));

            return false;
        } finally {
            setSending(false);
        }
    }

    const editMessage = async (messageId, content) => {
        try {
            await fetchEditMessage(messageId, { content });

            return true;
        } catch (err) {
            toast.error(getErrorMessage(err, "Could not edit the message!"));

            return false;
        }
    }

    const deleteMessage = async (messageId) => {
        try {
            await fetchDeleteMessage(messageId);

            return true;
        } catch (err) {
            toast.error(getErrorMessage(err, "Could not delete the message!"));

            return false;
        }
    }

    // Throttled, one ping every couple of seconds is enough to keep the
    // "is typing" state alive on the server.
    const notifyTyping = (groupId) => {
        if (!groupId) return;

        const now = Date.now();

        if (now - lastTypingPingRef.current < TYPING_PING_INTERVAL) return;

        lastTypingPingRef.current = now;
        socket.emit("typing:start", groupId.toString());
    }

    const stopTyping = (groupId) => {
        if (!groupId) return;

        lastTypingPingRef.current = 0;
        socket.emit("typing:stop", groupId.toString());
    }

    return (
        <MessageContext.Provider value={{
            messages,
            activeGroupId,
            typingUsers,
            onlineMembers,
            loading,
            sending,
            getGroupMessages,
            sendMessage,
            editMessage,
            deleteMessage,
            enterGroupChat,
            leaveGroupChat,
            notifyTyping,
            stopTyping
        }}>
            {children}
        </MessageContext.Provider>
    )
}
