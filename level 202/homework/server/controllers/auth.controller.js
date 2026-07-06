const User = require("../models/user.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");

const createAndSendToken = (res, user) => {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });

    res.cookie("authToken", token, {
        maxAge: process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_MODE === "dev" ? false : true,
        sameSite: process.env.NODE_MODE === "dev" ? "Lax" : "None"
    });

    user.password = undefined;

    res.status(200).json({
        status: "success",
        message: "Login successfully!",
        data: {
            user
        }
    });
};

const register = catchAsync(async (req, res, next) => {
    const { fullname, email, password } = req.body;

    const user = await User.create({ fullname, email, password });

    res.status(201).json({
        status: "success",
        message: "User registered successfully!"
    });
});

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

    createAndSendToken(res, user);
});

const getMe = (req, res) => {
    const { user } = req;

    res.status(200).json({
        status: "success",
        message: "Auto login successfully!",
        data: {
            user
        }
    });
};

const logout = (req, res) => {
    res.clearCookie("authToken", {
        httpOnly: true,
        secure: process.env.NODE_MODE === "dev" ? false : true,
        sameSite: process.env.NODE_MODE === "dev" ? "Lax" : "None"
    });

    res.status(200).json({
        status: "success",
        message: "Logout successfully!"
    });
};

const googleCallback = (req, res) => {
    const { user } = req;

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });

    res.cookie("authToken", token, {
        maxAge: process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_MODE === "dev" ? false : true,
        sameSite: process.env.NODE_MODE === "dev" ? "Lax" : "None"
    });

    user.password = undefined;

    res.redirect(process.env.CLIENT_URL);
}

module.exports = { register, login, getMe, logout, googleCallback };