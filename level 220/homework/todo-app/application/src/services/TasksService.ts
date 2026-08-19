import api from "../api/Axios";
import { Task } from "../types/TaskType";

export const getTasksService = async () => {
    return await api.get("/tasks");
};

export const getTaskByIdService = async (id: number) => {
    return await api.get(`/tasks/${id}`);
};

export const createTaskService = async (data: string) => {
    return await api.post("/tasks", { task: data });
};

export const deleteTaskService = async (id: number) => {
    return await api.delete(`/tasks/${id}`);
};

export const editTaskService = async (id: number, data: string) => {
    return await api.patch(`/tasks/${id}`, { task: data });
};
