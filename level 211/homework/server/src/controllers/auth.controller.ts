// Types
import type { NextFunction, Request, Response } from "express";
import type { HydratedDocument } from "mongoose";
import type { IUser, IUserMethods } from "../models/user.model.js";

// Utils
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

// Models
import User from "../models/user.model.js";

// Modules
import jwt from "jsonwebtoken";

type UserDocument = HydratedDocument<IUser, IUserMethods>;

// Function to sign token using JWT
const signToken = (id: string): string => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, {
        expiresIn: process.env.JWT_EXPIRES as NonNullable<jwt.SignOptions["expiresIn"]>
    });
};

// Function to create and sent auth token to client
const createAndSendToken = (res: Response, user: UserDocument): void => {
    const token = signToken(user._id.toString());

    const cookieExpires = parseInt(process.env.COOKIE_EXPIRES as string);

    if (typeof cookieExpires !== "number") {
        console.log("Cookie expires must be a number!");
        return;
    }

    res.cookie("authToken", token, {
        maxAge: cookieExpires * 60 * 60 * 24 * 1000,
        httpOnly: true,
        secure: process.env.NODE_MODE === "prod",
        sameSite: "none"
    });

    res.status(200).json({
        status: "success",
        message: "Logged in successfully!",
        data: {
            user: { ...user.toObject(), password: undefined }
        }
    });
};

// Controller to create new user
const register = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { fullName, email, password } = req.body;

    await User.create({ fullName, email, password });

    res.status(201).json({
        status: "success",
        message: "User registered successfully!"
    });
});

// Controller to login user
const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new AppError("Email and password are required!", 400));
    };

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new AppError("Credentials incorrect!", 400));
    };

    const isValid: boolean = await user.comparePassword(password);

    if (!isValid) {
        return next(new AppError("Credentials incorrect!", 400));
    };

    createAndSendToken(res, user);
});

export { register, login };
