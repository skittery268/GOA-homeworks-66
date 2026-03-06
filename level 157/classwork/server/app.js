const express = require("express");
const connectDB = require("./config/mongo.config");
const authRouter = require("./routers/auth.router");

const app = express();

app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || "error";

    res.status(statusCode).json({
        status,
        message: err.message
    })
})

app.listen(3000, () => {
    console.log("Server Started!");
    connectDB();
})