const User = require("../models/user.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const signUp = catchAsync(async (req, res, next) => {
    const { fullname, email, password } = req.body;

    if (!fullname) {
        return next(new AppError("full name is required", 400))
    }

    if (!email) {
        return next(new AppError("email is required", 400))
    }

    if (!password) {
        return next(new AppError("password is required", 400))
    }

    const newUser = await User.create({ fullname, email, password });

    res.status(201).json(newUser);
})

module.exports = { signUp };