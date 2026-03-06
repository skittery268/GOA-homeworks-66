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

    await newUser.sendVerificationCode()

    res.status(201).json(newUser);
})

const signIn = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email) {
        return next(new AppError("Email is required!", 400))
    }

    if (!password) {
        return next(new AppError("Password is required!", 400))
    }

    const user = await User.findOne({ email });

    if (!user) {
        return next(new AppError("User not found", 404));
    }

    const isCorrect = await user.comparePassword(password);

    if (!isCorrect) {
        return next(new AppError("Password is incorrect!", 400));
    }

    res.status(200).json({ ...user._doc, password: undefined });
})

const verification = catchAsync(async (req, res, next) => {
    const { code, email } = req.body;

    const user = await User.findOne({ email });

    if (user.verificationCode !== code) {
        return next(new AppError("Your code are incorrect!", 400));
    }

    user.isVerified = true;
    user.verificationCode = undefined;

    await user.save();

    res.status(200).json({ message: "Your verified successfull!" });
})

module.exports = { signUp, signIn, verification };