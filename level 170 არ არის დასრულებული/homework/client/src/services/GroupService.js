import api from "../api/axios";

export const fetchCreateGroup = (data) => {
    return api.post("/groups", data);
}

export const fetchDeleteGroup = (id) => {
    return api.delete(`/groups/${id}`);
}

export const fetchJoinGroup = (id) => {
    return api.post(`/groups/join/${id}`);
}

export const fetchUserGroups = () => {
    return api.get("/groups/my-groups");
}

export const fetchAllGroups = () => {
    return api.get("/groups");
}
