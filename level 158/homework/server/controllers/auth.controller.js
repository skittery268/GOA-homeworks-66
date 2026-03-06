// User model to CRUD documents
const User = require("../models/user.model");

// Utils
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

// Account creation
const signup = catchAsync(async (req, res, next) => {
    const { fullname, email, password } = req.body;

    const user = await User.create({ fullname, email, password });

    res.status(201).json(user);
});

const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return next(new AppError("email or password incorrect!", 401));
    }

    const isCorrect = await user.comparePassword(password);

    if (!isCorrect) {
        return next(new AppError("email or password incorrect!", 401));
    }

    user.password = undefined;

    res.status(200).json({
        message: "Login Succesfull!",
        status: "Success",
        data: {
            user
        }
    })
})

module.exports = { signup, login };


