import { api } from "../api/axios"

export const fetchUsers = () => {
    return api.get("/user");
}

export const fetchUser = (userId) => {
    return api.get(`/user/${userId}`);
}
