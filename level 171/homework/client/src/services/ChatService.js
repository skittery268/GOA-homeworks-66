import { api } from "../api/axios"

export const fetchUserChats = () => {
    return api.get("/chats");
}