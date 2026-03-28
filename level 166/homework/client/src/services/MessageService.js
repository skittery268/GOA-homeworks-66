import { api } from "../api/axios";

export const fetchUsers = async () => {
    return await api.get("/messages/users");
}

export const fetchSendMessage = async (data) => {
    return await api.post("/messages", data);
}

export const fetchMessages = async (receiverId) => {
    return await api.get(`/messages/${receiverId}`);
}