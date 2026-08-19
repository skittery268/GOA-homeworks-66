// Modules
import express from "express";

// Controllers
import { createTask, deleteTask, editTask, getAllTasks, getTaskById } from "../controllers/tasks.controller.js";

// -----------------------------IMPORTS-----------------------------

const tasksRouter = express.Router();

// Route to get all tasks
tasksRouter.get("/", getAllTasks);
// Route to get task by id
tasksRouter.get("/:id", getTaskById);
// Route to create new task
tasksRouter.post("/", createTask);
// Route to delete task by id
tasksRouter.delete("/:id", deleteTask);
// Route to edit task by id
tasksRouter.patch("/:id", editTask);

export default tasksRouter;