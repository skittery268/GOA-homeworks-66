// Injecting env vairables from .env file to process.env object
import "dotenv/config";

// Modules
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Controllers
import globalErrorHandler from "./controllers/error.controller.js";

// Configs
import connectDB from "./configs/mongo.config.js";

// Routers
import authRouter from "./routers/auth.router.js";
import postRouter from "./routers/post.controller.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "*",
    credentials: true
}));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", postRouter);

app.use(globalErrorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}!`)

    connectDB();
})