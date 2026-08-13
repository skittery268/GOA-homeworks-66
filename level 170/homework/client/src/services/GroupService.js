import api from "../api/axios";

export const fetchCreateGroup = (data) => {
    return api.post("/groups", data);
}

export const fetchUpdateGroup = (id, data) => {
    return api.patch(`/groups/${id}`, data);
}

export const fetchDeleteGroup = (id) => {
    return api.delete(`/groups/${id}`);
}

export const fetchJoinGroup = (id) => {
    return api.post(`/groups/join/${id}`);
}

export const fetchLeaveGroup = (id) => {
    return api.post(`/groups/leave/${id}`);
}

export const fetchUserGroups = (search = "") => {
    return api.get("/groups/my-groups", { params: search ? { search } : {} });
}

export const fetchAllGroups = (search = "") => {
    return api.get("/groups", { params: search ? { search } : {} });
}

export const fetchGroup = (id) => {
    return api.get(`/groups/${id}`);
}
