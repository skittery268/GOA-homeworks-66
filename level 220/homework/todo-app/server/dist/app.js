// Injecting env variables from .env file in process.env object
import "dotenv/config";
// Modules
import express from "express";
import cors from "cors";
// Global Error Controller
import { globalErrorHandler } from "./controllers/error.controller.js";
// Routers
import tasksRouter from "./routers/tasks.router.js";
// -----------------------------IMPORTS-----------------------------
const app = express();
// Allow requests from the Expo client
app.use(cors());
// Body parser for JSON requests
app.use(express.json());
// Routers
app.use("/api/v1/tasks", tasksRouter);
// Global error handler
app.use(globalErrorHandler);
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}!`);
});
//# sourceMappingURL=app.js.map