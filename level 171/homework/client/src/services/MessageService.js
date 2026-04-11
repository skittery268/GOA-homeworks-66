import { api } from "../api/axios"

export const fetchSendMessage = (data, receiverId) => {
    return api.post(`/message/${receiverId}`, data);
}

export const fetchDeleteMessage = (messageId) => {
    return api.delete(`/message/${messageId}`);
}

export const fetchMessages = (chatId) => {
    return api.get(`/message/${chatId}`);
}
