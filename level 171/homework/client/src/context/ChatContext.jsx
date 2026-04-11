import { createContext, useState } from "react";
import { fetchUserChats } from "../services/ChatService";

// eslint-disable-next-line react-refresh/only-export-components
export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [userChats, setUserChats] = useState([]);

    const getUserChats = async () => {
        try {
            const res = await fetchUserChats();

            setUserChats(res.data.data.chats);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <ChatContext.Provider value={{ userChats, getUserChats }}>
            {children}
        </ChatContext.Provider>
    )
}