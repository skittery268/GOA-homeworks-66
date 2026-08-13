import api from "../api/axios";

export const fetchSendMessage = (groupId, data) => {
    return api.post(`/messages/${groupId}`, data);
}

export const fetchEditMessage = (messageId, data) => {
    return api.patch(`/messages/${messageId}`, data);
}

export const fetchDeleteMessage = (messageId) => {
    return api.delete(`/messages/${messageId}`);
}

export const fetchMessagesByGroup = (groupId) => {
    return api.get(`/messages/group/${groupId}`);
}
