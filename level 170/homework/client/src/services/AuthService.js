import api from "../api/axios"

export const fetchLogin = (data) => {
    return api.post("/auth/login", data);
}

export const fetchRegister = (data) => {
    return api.post("/auth/register", data);
}

export const fetchLogout = () => {
    return api.post("/auth/logout");
}

export const fetchMe = () => {
    return api.get("/auth/me");
}

export const fetchUpdateMe = (data) => {
    return api.patch("/auth/me", data);
}

export const fetchChangePassword = (data) => {
    return api.patch("/auth/password", data);
}
