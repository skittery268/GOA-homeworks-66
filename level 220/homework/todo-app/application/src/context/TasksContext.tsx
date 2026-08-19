import { createContext, useContext, useEffect, useState } from "react";
import { Task } from "../types/TaskType";
import { createTaskService, deleteTaskService, editTaskService, getTaskByIdService, getTasksService } from "../services/TasksService";

interface TaskContextType {
    tasks: Task[];
    task: Task | null;
    loading: boolean;
    error: string | null;

    getTasks: () => Promise<void>; 
    getTaskById: (id: number) => Promise<void>; 
    createTask: (data: string) => Promise<void>; 
    deleteTask: (id: number) => Promise<void>; 
    editTask: (id: number, data: string) => Promise<void>; 
};

const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [task, setTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getTasks = async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await getTasksService();

            setTasks(res.data.data.tasks);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Something went wrong!");
            }
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        getTasks();
    }, []);

    const getTaskById = async (id: number) => {
        try {
            setLoading(true);
            setError(null);

            const res = await getTaskByIdService(id);

            setTask(res.data.data.task);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Something went wrong!");
            };
        } finally {
            setLoading(false);
        };
    };

    const createTask = async (data: string) => {
        try {
            setLoading(true);
            setError(null);

            const res = await createTaskService(data);

            setTasks(res.data.data.tasks);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Something went wrong!");
            };
        } finally {
            setLoading(false);
        }
    };

    const deleteTask = async (id: number) => {
        try {
            setLoading(true);
            setError(null);

            await deleteTaskService(id);
            
            setTasks(prev => prev.filter(t => t.id !== id));
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Something went wrong!");
            };
        } finally {
            setLoading(false);
        }
    };

    const editTask = async (id: number, data: string) => {
        try { 
            setLoading(true);
            setError(null);

            const res = await editTaskService(id, data);

            setTasks(prev => prev.map(t => t.id === id ? res.data.data.task : t));
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Something went wrong!");
            };
        } finally {
            setLoading(false);
        }
    }

    return (
        <TaskContext.Provider value={{ tasks, task, loading, error, getTasks, getTaskById, createTask, deleteTask, editTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => { 
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("useTaskContext must be used inside TaskProvider");
    };

    return context;
};