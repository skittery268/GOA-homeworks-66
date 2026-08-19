// Modules
import fs from "fs";

// Types
import type { Task } from "../types/task.types.js";

// -----------------------------IMPORTS-----------------------------

// Function to read tasks.json
export const readFile = (FILE_PATH: string): Task[] => {
    return JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
};

// Function to write new tasks array in tasks.json
export const writeFile = (FILE_PATH: string, tasks: Task[]): void => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(tasks));
};
