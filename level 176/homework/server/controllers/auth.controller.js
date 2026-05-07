const jwt = require("jsonwebtoken");

// User model to CRUD documents
const User = require("../models/user.model");

// Utils
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

const signToken = user => {
    // 1) Payload - actuall data which we want to secure with encryption
    // 2) Secret Key - which we use for encryption/decryption
    // 3) Options - For example: Algorithm, Token valid time ...

    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

const sendToken = (user, res) => {
    const token = signToken(user);

    res.cookie("jwt", token, {
        maxAge: process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
        secure: false, //if false it can be sented from http without security, if true only from https with SSL
        httpOnly: true, //if false it can be sented from any type of transporter protocol, but if true only from http protocol
        sameSite: "Lax" //if None domain any, if Lax security good but limited, if Strict only same domain transfers cookies
    });

    user.password = undefined;

    res.json(user);
};

// Account creation
const signup = catchAsync(async (req, res, next) => {
    const { fullname, email, password } = req.body;

    const user = await User.create({ fullname, email, password });

    res.status(201).json({
        status: 'success',
        message: 'User registered succesfully!'
    });
});

// Login function
const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({email}).select("+password");

    if(!user) {
        return next(new AppError("Credentials is incorrect!", 401));
    }

    const isPassValid = await user.comparePassword(password);

    if(!isPassValid) {
        return next(new AppError("Credentials is incorrect!", 401));
    }


    sendToken(user, res);
});

// get me
const getMe = catchAsync(async (req, res) => {
    const user = await User.findById(req.userId);

    user.password = undefined;

    res.json(user);
});

const logout = catchAsync(async (req, res) => {
    res.clearCookie('jwt',  {
        secure: false, //if false it can be sented from http without security, if true only from https with SSL
        httpOnly: true, //if false it can be sented from any type of transporter protocol, but if true only from http protocol
        sameSite: "Lax" //if None domain any, if Lax security good but limited, if Strict only same domain transfers cookies
    });

    res.json({
        status: "success",
        message: "User logedout!"
    });
});


module.exports = { signup, login, getMe, logout };


