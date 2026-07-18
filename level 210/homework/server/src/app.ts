// Injected env variables from .env file in process.env object
import "dotenv/config";

// Modules
import express from "express";

// Configs
import connectDB from "./configs/mongo.config.js";

// Global Error Handler
import globalErrorHandler from "./controllers/error.controller.js";

// Routers
import productRouter from "./routers/product.router.js";

const app = express();

app.use(express.json());

// Routers
app.use("/api/products", productRouter);

// Global Error Handler
app.use(globalErrorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}!`);

    connectDB();
})