import { api } from "../api/axios"

export const fetchLogin = async (data) => {
    return await api.post("/auth/login", data);
}

export const fetchRegister = async (data) => {
    return await api.post("/auth/signup", data);
}

export const fetchGetMe = async () => {
    return await api.get("/auth/me");
}

export const fetchLogout = async () => {
    return await api.get("/auth/logout");
}