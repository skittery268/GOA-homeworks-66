require("dotenv").config();

// Modules
const express = require("express");

// Configs
const connectDB = require("./configs/mongo.config");

// Controllers
const globalErrorHandler = require("./controllers/error.controller");
const productRouter = require("./routers/product.router");

const app = express();

app.use(express.json());

app.use("/api/products", productRouter);

app.use(globalErrorHandler);

const startServer = async () => {
    try {
        await connectDB();

        const server = app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}!`);
        });

        server.on("error", (err) => {
            console.log("Something went wrong when we starting server!", err);

            process.exit(1);
        });
    } catch (err) {
        console.log("Failed to start server!", err);

        process.exit(1);
    };
};

startServer();