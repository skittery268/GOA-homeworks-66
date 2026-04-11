require("dotenv").config();
const express = require("express");
const connectDB = require("./config/mongo.config");
const cookieParser = require("cookie-parser");
const globalErrorHandler = require("./controllers/error.controller");
const authRouter = require("./routers/auth.router");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const messageRouter = require("./routers/message.router");
const chatRouter = require("./routers/chat.router");
const userRouter = require("./routers/user.router");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true
    }
});

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieParser({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use((req, res, next) => {
    req.io = io;
    next();
})

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/chats", chatRouter);
app.use("/api/user", userRouter);

app.use(globalErrorHandler);

io.on("connection", (socket) => {
    console.log(`User with id ${socket.id} successfylly connected!`);

    socket.on("joinChat", (chatId) => {
        socket.join(chatId);
    })

    socket.on("leaveChat", (chatId) => {
        socket.leave(chatId);
    })

    socket.on("disconnect", (reason) => {
        console.log(`User disconnected because ${reason}`);
    })
})

server.listen(process.env.PORT, () => {
    console.log("Server Started!");

    connectDB();
})