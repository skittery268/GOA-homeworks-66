const AppError = require("../utils/appError");

const protect = async (req, res, next) => {
    try {
        const { authToken } = req.cookies;

        if (!authToken) {
            return next(new AppError("Unauthorized!", 401));
        }

        const payload = jwt.verify(authToken, process.env.JWT_SECRET);

        if (!payload) {
            return next(new AppError("Unauthorized!", 401));
        }

        req.userId = payload.id;

        next();
    } catch (err) {
        return next(new AppError("Unauthorized!", 401));
    }
}

module.exports = protect;