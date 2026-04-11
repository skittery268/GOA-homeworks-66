const User = require("../models/user.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        status: "success",
        message: "Users returned successfully",
        data: {
            users
        }
    })
})

const getUserById = catchAsync(async (req, res, next) => {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
        return next(new AppError("User cant be found!", 404));
    }

    user.password = undefined;

    res.status(200).json({
        status: "success",
        data: {
            user
        }
    })
})

module.exports = { getAllUsers, getUserById };