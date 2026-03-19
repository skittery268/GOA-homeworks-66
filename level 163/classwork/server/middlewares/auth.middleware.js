const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const User = require("../models/user.model");

const protect = async (req, res, next) => {
    try{
        const authorization = req.headers.authorization;
        const token = authorization.split(" ")[1];

        if (!token) {
            return next(new AppError("We cant identify you", 400));
        }

        const payload = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(payload.id);

        if (!user) {
            return next(new AppError("User not found!", 404));
        }

        req.userId = user._id;

        next();
    } catch {
        next(new AppError("Unauthorized", 401));
    }
}

module.exports = protect;