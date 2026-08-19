import axios from "axios";

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL
});

api.interceptors.response.use(
    (response) => response,

    (error) => {
        if (axios.isAxiosError(error)) {
            const message = error.response?.data?.message || "Something went wrong!";

            return Promise.reject(new Error(message));
        };

        return Promise.reject(new Error(error));
    }
);

export default api;