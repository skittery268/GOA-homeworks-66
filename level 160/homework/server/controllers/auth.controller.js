// User model to CRUD documents
const User = require("../models/user.model");

// Utils
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const jwt = require("jsonwebtoken");

// Account creation
const signup = catchAsync(async (req, res, next) => {
    const { fullname, email, password } = req.body;

    const user = await User.create({ fullname, email, password });

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

    const isPassValid = await user.comparePassword(password);

    if(!isPassValid) {
        return next(new AppError("Credentials is incorrect!", 401));
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

    user.password = undefined;

    res.status(200).json({ user, token });
});

module.exports = { signup, login };


