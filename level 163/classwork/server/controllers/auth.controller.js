// User model to CRUD documents
const User = require("../models/user.model");

// Utils
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const jwt = require("jsonwebtoken");

const signToken = user => {
    return token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_ACCESS_EXPIRES_IN });
};

const sendToken = (user, res) => {
    const accessToken = signToken(user);
    const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN })

    res.cookie("refreshToken", refreshToken, {
        maxAge: process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
        secure: false,
        httpOnly: true,
        sameSite: "Lax"
    })

    user.password = undefined;

    res.status(200).json({ user: user._doc, accessToken });
};

// Account creation
const signup = catchAsync(async (req, res, next) => {
    const { fullname, email, password } = req.body;

    const user = await User.create({ fullname, email, password });

    await user.sendVerificationLink();

    res.status(201).json({
        message: "User registered succesfully!",
        status: "succes"
    });
});

// Login function
const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});

    if(!user) {
        return next(new AppError("Credentials is incorrect!", 401));
    }

    if (!user.isVerified) {
        return next(new AppError("Verify your email", 400));
    }

    const isPassValid = await user.comparePassword(password);

    if(!isPassValid) {
        return next(new AppError("Credentials is incorrect!", 401));
    }

    sendToken(user, res);
});

const verifyEmail = catchAsync(async (req, res, next) => {
    const { token } = req.query;

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(payload.userId);

    if (!user) {
        return next(new AppError("User not found!", 404));
    }

    user.isVerified = true;
    await user.save();

    res.status(200).send("<h1>User Verified Successfull!</h1>");
})

const updateAccessToken = catchAsync(async (req, res, next) => {
    const { refreshToken } = req.cookies;

    const payload = jwt.verify(refreshToken, process.env.JWT_SECRET);

    const user = await User.findById(payload.id);

    if (!user) {
        return next(new AppError("User not found!", 404));
    }

    const newAccessToken = signToken(user);

    res.status(200).json({ accessToken: newAccessToken });
})

const getMe = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.userId);

    if (!user) {
        return next(new AppError("User not found!", 404));
    }

    user.password = undefined;

    res.status(200).json({ user });
});

module.exports = { signup, login, verifyEmail, updateAccessToken, getMe };
