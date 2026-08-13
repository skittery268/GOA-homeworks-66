import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";

const api = axios.create({
    baseURL: `${SERVER_URL}/api`,
    withCredentials: true,
})

export default api;
