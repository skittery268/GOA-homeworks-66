const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

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

    socket.on("message", (msg) => {
        io.emit("message", msg);
    })

    socket.on("disconnect", (reason) => {
        console.log(`User with id ${socket.id} disconnected with reason ${reason}`);
    })
})

app.use("/test", (req, res) => {
    res.send("Server is running!");
})

server.listen(3000, () => {
    console.log("Server Started!");
})
