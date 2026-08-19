// Types
import type { NextFunction, Request, Response } from "express";
import type { Task } from "../types/task.types.js";

// Modules
import path from "path";
import { fileURLToPath } from "url";

// Utils
import { readFile, writeFile } from "../utils/file.util.js";
import { catchAsync } from "../utils/catchAsync.util.js";
import { AppError } from "../utils/appError.util.js";

// -----------------------------IMPORTS-----------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_PATH = path.join(__dirname, "../data/tasks.json");

// Controller function to get all user tasks
export const getAllTasks = catchAsync((req: Request, res: Response, next: NextFunction) => {
    const tasks: Task[] = readFile(FILE_PATH);

    res.status(200).json({
        status: "success",
        message: "Tasks returned successfully!",
        data: {
            tasks
        }
    });
});

// Controller function to get user task by id
export const getTaskById = catchAsync((req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!id) {
        return next(new AppError("Id is required!", 400));
    };

    const taskId: number = parseInt(id);

    if (Number.isNaN(taskId)) {
        return next(new AppError("Id must be a number!", 400));
    }

    const tasks: Task[] = readFile(FILE_PATH);
    const task: Task | undefined = tasks.find(t => t.id === taskId);

    if (!task) {
        return next(new AppError("Task not found!", 404));
    };

    res.status(200).json({
        status: "success",
        message: "Task returned successfully!",
        data: {
            task
        }
    });
});

// Controller function to create new task
export const createTask = catchAsync((req: Request, res: Response, next: NextFunction) => {
    const { task } = req.body;

    console.log(task);

    const newTask: Task = { id: Date.now(), task };

    const tasks: Task[] = readFile(FILE_PATH);

    tasks.push(newTask);
    writeFile(FILE_PATH, tasks);

    res.status(201).json({
        status: "success",
        message: "Task created successfully!",
        data: {
            tasks
        }
    });
});

// Controller function to delete task by id
export const deleteTask = catchAsync((req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!id) {
        return next(new AppError("Id is required!", 400));
    }

    const tasks: Task[] = readFile(FILE_PATH);
    
    const taskId = parseInt(id);

    if (Number.isNaN(taskId)) {
        return next(new AppError("Id must be a number!", 400));
    };

    writeFile(FILE_PATH, tasks.filter(t => t.id !== taskId));

    res.status(200).json({
        status: "success",
        message: "Task deleted successfully!"
    });
});

// Controller to edit task content
export const editTask = catchAsync((req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { task } = req.body;

    if (!id) {
        return next(new AppError("Id is required!", 400));
    }

    const tasks: Task[] = readFile(FILE_PATH);
    
    const taskId = parseInt(id);

    if (Number.isNaN(taskId)) {
        return next(new AppError("Id must be a number!", 400));
    };

    const choosedTask = tasks.find(t => t.id === taskId);

    if (!choosedTask) {
        return next(new AppError("Task not found!", 404));
    };

    if (task) choosedTask.task = task;

    writeFile(FILE_PATH, tasks);

    res.status(200).json({
        status: "success",
        message: "Task updated successfully!",
        data: {
            task: choosedTask
        }
    });
});
