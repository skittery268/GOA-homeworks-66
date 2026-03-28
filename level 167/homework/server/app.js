const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./configs/mongo.config");
const Message = require("./models/message.model");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

app.use(cors());

io.on("connection", (socket) => {
    console.log(`User with id ${socket.id} connected!`);

    socket.on("message", async (msg) => {
        await Message.create({ content: msg });

        io.emit("message", { content: msg });
    })

    socket.on("disconnect", (reason) => {
        console.log(`User with id ${socket.id} disconnected becouse of ${reason}`);
    })
})

app.get("/messages", async (req, res) => {
    const messages = await Message.find();

    res.status(200).json(messages);
})

server.listen(3000, () => {
    console.log("Server Started!");

    connectDB();
})