import axios from "axios";
import axiosRetry from "axios-retry";

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    withCredentials: true,
    timeout: 10000
});

axiosRetry(api, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

export default api;