const User = require("../models/user.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");

const signToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES
    });
}

const sendToken = (user, statusCode, res) => {
    const token = signToken(user);

    res.cookie("authToken", token, {
        maxAge: process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "dev" ? false : true,
        sameSite: process.env.NODE_ENV === "dev" ? "lax" : "strict"
    })

    user.password = undefined;

    res.status(statusCode).json({
        status: "success",
        message: "User logged in successfully!",
        data: {
            user
        }
    })
}

const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
        return next(new AppError("Credentials incorrect!", 400));
    }

    sendToken(user, 200, res);
})

const register = catchAsync(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    res.status(201).json({
        status: "success",
        message: "User registered successfully!",
    });
})

module.exports = { login, register };