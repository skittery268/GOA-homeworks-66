// Types
import type { NextFunction, Request, Response } from "express";
import type { AppError } from "../utils/appError.util.js";

// -----------------------------IMPORTS-----------------------------

// Function to sent errors for developer
const sendErrorDev = (err: AppError, res: Response): void => {
    const statusCode = err.statusCode || 500;
    const status = err.status || "error";

    res.status(statusCode).json({
        status,
        message: err.message,
        stack: err.stack,
        err
    });
};

// Function to sent errors for any users
const sendErrorProd = (err: AppError, res: Response) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || "error";

    if (err.isOperational) {
        return res.status(statusCode).json({
            status,
            message: err.message
        });
    };

    console.log(err);

    res.status(500).json({
        status: "error",
        message: "Something went wrong!"
    });
};

// Controller function to handle global errors
export const globalErrorHandler = (err: AppError, req: Request, res: Response, next: NextFunction): void => {
    if (process.env.NODE_MODE === "dev") {
        sendErrorDev(err, res);
    } else {
        sendErrorProd(err, res);
    };
};