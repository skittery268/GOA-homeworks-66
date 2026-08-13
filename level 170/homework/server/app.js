// Modules
require("dotenv").config();

// Servers
const express = require("express");
const cors = require("cors");
const http = require("http");
const cookieParser = require("cookie-parser");

// Configs
const connectDB = require("./configs/mongo.config");
const { initSocket } = require("./sockets/socket");

// Routers
const authRouter = require("./routers/auth.router");
const groupRouter = require("./routers/group.router");
const messageRouter = require("./routers/message.router");

// Controllers
const globalErrorHandler = require("./controllers/error.controller");

// Utils
const AppError = require("./utils/appError");

const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

const app = express();
const server = http.createServer(app);
const io = initSocket(server);

// Helper Middlewares
app.use(cors({
    origin: CLIENT_URL,
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.use((req, res, next) => {
    req.io = io;
    next();
})

// Routers
app.use("/api/auth", authRouter);
app.use("/api/groups", groupRouter);
app.use("/api/messages", messageRouter);

app.use((req, res, next) => {
    next(new AppError(`Route ${req.originalUrl} not found!`, 404));
})

// Global Error Handler
app.use(globalErrorHandler);

const start = async () => {
    await connectDB();

    server.listen(PORT, () => {
        console.log(`Server started on port ${PORT}!`);
    })
}

start();
