const User = require("../models/user.model");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");

const protect = catchAsync(async (req, res, next) => {
    const { authToken } = req.cookies;

    if (!authToken) {
        return next(new AppError("You are not logged in!", 401));
    }

    const payload = jwt.verify(authToken, process.env.JWT_SECRET);

    const user = await User.findById(payload.id);

    if (!user) {
        return next(new AppError("The user belonging to this token does not exist!", 401));
    }

    req.userId = user._id;

    next();
})

module.exports = protect;