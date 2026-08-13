const User = require("../models/user.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");

const signToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES || "7d"
    });
}

const cookieOptions = () => ({
    maxAge: (Number(process.env.COOKIE_EXPIRES) || 7) * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV !== "dev",
    sameSite: process.env.NODE_ENV === "dev" ? "lax" : "strict"
})

const sendToken = (user, statusCode, message, res) => {
    const token = signToken(user);

    res.cookie("authToken", token, cookieOptions());

    user.password = undefined;

    res.status(statusCode).json({
        status: "success",
        message,
        data: {
            user
        }
    })
}

const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new AppError("Email and password are required!", 400));
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() }).select("+password");

    if (!user) {
        return next(new AppError("Credentials incorrect!", 400));
    }

    const isValid = await user.comparePassword(password);

    if (!isValid) {
        return next(new AppError("Credentials incorrect!", 400));
    }

    sendToken(user, 200, "User logged in successfully!", res);
})

const register = catchAsync(async (req, res, next) => {
    const { name, email, password } = req.body;

    await User.create({ name, email, password });

    res.status(201).json({
        status: "success",
        message: "User registered successfully!",
    });
})

const logout = catchAsync(async (req, res, next) => {
    res.clearCookie("authToken", { ...cookieOptions(), maxAge: undefined });

    res.status(200).json({
        status: "success",
        message: "User logged out successfully!"
    });
})

const getMe = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.userId);

    if (!user) {
        return next(new AppError("User not found!", 404));
    }

    res.status(200).json({
        status: "success",
        data: {
            user
        }
    })
})

const updateMe = catchAsync(async (req, res, next) => {
    const { name, email } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
        return next(new AppError("User not found!", 404));
    }

    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;

    await user.save();

    res.status(200).json({
        status: "success",
        message: "Profile updated successfully!",
        data: {
            user
        }
    });
})

const changePassword = catchAsync(async (req, res, next) => {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
        return next(new AppError("Current and new passwords are required!", 400));
    }

    const user = await User.findById(req.userId).select("+password");

    if (!user) {
        return next(new AppError("User not found!", 404));
    }

    const isValid = await user.comparePassword(currentPassword);

    if (!isValid) {
        return next(new AppError("Current password is incorrect!", 400));
    }

    user.password = newPassword;
    await user.save();

    // Old cookies keep working otherwise, so hand out a fresh token.
    sendToken(user, 200, "Password changed successfully!", res);
})

module.exports = { login, register, logout, getMe, updateMe, changePassword };
