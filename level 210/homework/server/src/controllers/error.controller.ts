// Utils
import type AppError from "../utils/appError.js";

// Types
import type { Response, Request, NextFunction } from "express";

// Send developer errors
const sendErrorDev = (err: AppError, res: Response): void => {
    const statusCode = err.statusCode || 500;
    const status = err.status || "error";

    res.status(statusCode).json({
        message: err.message,
        status,
        stack: err.stack,
        err
    });
};

// Send production errors
const sendErrorProd = (err: AppError, res: Response): void => {
    const statusCode = err.statusCode || 500;
    const status = err.status || "error";
    
    if (err.isOperational) {
        res.status(statusCode).json({
            message: err.message,
            status
        });
    };

    console.log(err);

    res.status(500).json({
        message: "Something wrong!",
        status
    });
};

// Global Error Controller
const globalErrorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_MODE === "dev") {
        sendErrorDev(err, res);
    } else {
        sendErrorProd(err, res);
    }
};

export default globalErrorHandler;