const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const User = require('../models/user.model');

const protect = async (req, res, next) => {
    const token = req.cookies.jwt;

    if(!token) {
        return next(new AppError("We cant identify you", 404));
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(payload.id);

    if(!user) {
        return next(new AppError("Token expired or invalid!", 400));
    }

    req.userId = user._id;

    next();
};

module.exports = protect;