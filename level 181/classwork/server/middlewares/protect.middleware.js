// Modules
const jwt = require("jsonwebtoken");

// Utils
const AppError = require("../utils/AppError");

// Models
const User = require("../models/user.model");

// Middleware to verify user token
const protect = async (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) {
        return next(new AppError("We cant identify you!", 400));
    }

    const payload = await jwt.verify(token, process.env.JWT_SECRET);

    if (!payload) {
        return next(new AppError("We cant identify you!", 400));
    }

    const user = await User.findById(payload.id);

    if (!user) {
        return next(new AppError("User not found!", 404));
    }

    req.user = user;

    next();
}

module.exports = protect;