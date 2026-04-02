// Servers
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

// Configs
const connectDB = require("./configs/mongo.config");

// Routres
const authRouter = require("./routers/auth.router");

// Controllers
const globalErrorHandler = require("./controllers/error.controller");

// Modules
require("dotenv").config();
const cookieParser = require("cookie-parser");
const groupRouter = require("./routers/group.router");
const messageRouter = require("./routers/message.router");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

// Helper Middlewares
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(cookieParser({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());

// Routers
app.use("/api/auth", authRouter);
app.use("/api/groups", groupRouter);
app.use("/api/messages", messageRouter);

// Global Error Handler
app.use(globalErrorHandler);

io.on("connection", (socket) => {
    console.log(`User with id ${socket.id} connected!`);

    socket.on("message", async (msg) => {
        io.emit("message", msg);
    })

    socket.on("disconnect", (reason) => {
        console.log(`User with id ${socket.id} disconnected becouse of ${reason}`);
    })
})

server.listen(3000, () => {
    console.log("Server Started!");

    connectDB();
})