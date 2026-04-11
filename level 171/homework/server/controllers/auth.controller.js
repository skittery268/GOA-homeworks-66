const User = require("../models/user.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");

const sendToken = (user, res) => {
    const authToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });

    res.cookie("authToken", authToken, {
        maxAge: process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
        secure: false,
        httpOnly: true,
        sameSite: "Lax"
    })

    user.password = undefined;

    res.status(200).json({
        status: "success",
        message: "User login successfully",
        data: {
            user
        }
    })
}

const register = catchAsync(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    res.status(201).json({
        status: "success",
        message: "User registered successfylly"
    })
})

const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new AppError("Credentials incorrect!", 400));
    }

    const isValid = await user.comparePassword(password);

    if (!isValid) {
        return next(new AppError("Credentials incorrect!", 400));
    }

    sendToken(user, res);
})

const getMe = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.userId);

    res.status(200).json({
        status: "success",
        data: {
            user
        }
    })
})

const logout = catchAsync(async (req, res, next) => {
    res.clearCookie("authToken");

    res.status(200).json({
        status: "success",
        message: "User logged out successfylly"
    })
})

module.exports = { register, login, getMe, logout };