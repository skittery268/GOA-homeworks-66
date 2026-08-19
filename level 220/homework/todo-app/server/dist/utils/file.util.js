// Modules
import fs from "fs";
// -----------------------------IMPORTS-----------------------------
// Function to read tasks.json
export const readFile = (FILE_PATH) => {
    return JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
};
// Function to write new tasks array in tasks.json
export const writeFile = (FILE_PATH, tasks) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(tasks));
};
//# sourceMappingURL=file.util.js.map