import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { fetchMessages, fetchSendMessage, fetchUsers } from "../services/MessageService";
import { useAuth } from "../hooks/useAuth";

// eslint-disable-next-line react-refresh/only-export-components
export const MessagesContext = createContext();

export const MessagesProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const { user } = useAuth();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const res = await fetchUsers();

                setUsers(res.data.data.users);
            } catch (err) {
                console.log(err)
            }
        }

        getAllUsers();
    }, [user]);

    const getMessages = async (receiverId) => {
        try {
            const res = await fetchMessages(receiverId);

            setMessages(res.data.data.messages);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }

    const sendMessage = async (data) => {
        try {
            const res = await fetchSendMessage(data);

            toast.success(res.data.message);
            setMessages(prev => [ ...prev, res.data.data.newMessage ]);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }

    return (
        <MessagesContext.Provider value={{ users, messages, getMessages, sendMessage }}>
            {children}
        </MessagesContext.Provider>
    )
}