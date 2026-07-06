import { api } from "../api/Axios"

export const fetchRegister = async (data) => {
    return await api.post("/auth/register", data);
};

export const fetchLogin = async (data) => {
    return await api.post("/auth/login", data);
};

export const fetchMe = async () => {
    return await api.get("/auth/me");
};

export const fetchLogout = async () => {
    return await api.post("/auth/logout");
};

export const redirectGoogleLogin = () => {
    window.location.href = `http://localhost:3000/api/v1/auth/google`;
};
