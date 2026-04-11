const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");

const protect = catchAsync(async (req, res, next) => {
    const { authToken } = req.cookies;

    if (!authToken) {
        return next(new AppError("We cant identify you", 400));
    }

    const payload = jwt.verify(authToken, process.env.JWT_SECRET);

    if (!payload) {
        return next(new AppError("Your token dont valid or expires", 401));
    }

    req.userId = payload.id;

    next();
})

module.exports = protect;