// Types
import type { NextFunction, Request, Response } from "express";

// Utils
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

// Models
import User from "../models/user.model.js";

// Modules
import jwt from "jsonwebtoken";

// Middleware to protect routes for authenticated users only
const protect = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { authToken } = req.cookies;

    if (!authToken) {
        return next(new AppError("Token is required!", 401));
    };

    let payload: { id: string };

    try {
        payload = jwt.verify(authToken, process.env.JWT_SECRET as string) as { id: string };
    } catch {
        return next(new AppError("Invalid or expired token!", 401));
    };

    const user = await User.findById(payload.id);

    if (!user) {
        return next(new AppError("User no longer exists!", 401));
    };

    req.user = user;

    next();
});

export default protect;
