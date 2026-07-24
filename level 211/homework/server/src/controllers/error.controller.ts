// Types
import type { NextFunction, Request, Response } from "express";
import type AppError from "../utils/appError.js";

// Function to sent developer errors
const sendErrorDev = (err: AppError, res: Response): void => {
    const status: string = err.status || "error";
    const statusCode: number = err.statusCode || 500;
    
    res.status(statusCode).json({
        status,
        message: err.message,
        stack: err.stack,
        err
    });
};

// Function to sent production errors
const sendErrorProd = (err: AppError, res: Response) => {
    const status: string = err.status || "error";
    const statusCode: number = err.statusCode || 500;

    if (err.isOperational) {
        return res.status(statusCode).json({
            status,
            message: err.message
        });
    }

    console.log(err);
    
    res.status(500).json({
        status: "error",
        message: "Something went wrong!"
    });
};

// Global error controller
const globalErrorHandler = (err: AppError, req: Request, res: Response, next: NextFunction): void => {
    if (process.env.NODE_MODE === "dev") {
        sendErrorDev(err, res);
    } else {
        sendErrorProd(err, res);
    };
};

export default globalErrorHandler;