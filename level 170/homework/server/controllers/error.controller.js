const AppError = require("../utils/appError");

const handleCastError = (err) => {
    return new AppError(`Invalid ${err.path}: ${err.value}!`, 400);
}

const handleDuplicateKeyError = (err) => {
    const field = Object.keys(err.keyValue || {})[0] || "value";

    return new AppError(`This ${field} is already taken!`, 400);
}

const handleValidationError = (err) => {
    const message = Object.values(err.errors).map((error) => error.message).join(" ");

    return new AppError(message, 400);
}

const handleJWTError = () => new AppError("Invalid token, please log in again!", 401);

const handleJWTExpiredError = () => new AppError("Your session has expired, please log in again!", 401);

const normalizeError = (err) => {
    if (err.isOperational) return err;

    if (err.name === "CastError") return handleCastError(err);
    if (err.code === 11000) return handleDuplicateKeyError(err);
    if (err.name === "ValidationError") return handleValidationError(err);
    if (err.name === "JsonWebTokenError") return handleJWTError();
    if (err.name === "TokenExpiredError") return handleJWTExpiredError();

    return err;
}

const sendErrorDev = (err, res) => {
    res.status(err.statusCode || 500).json({
        status: err.status || "error",
        message: err.message,
        stack: err.stack,
        err
    })
}

const sendErrorProd = (err, res) => {
    if (err.isOperational) {
        return res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        })
    }

    // Unknown errors must not leak internals to the client.
    console.error(err);

    res.status(500).json({
        status: "error",
        message: "Something went wrong!"
    })
}

// eslint-disable-next-line no-unused-vars
const globalErrorHandler = (err, req, res, next) => {
    const error = normalizeError(err);

    if (process.env.NODE_ENV === "dev") {
        sendErrorDev(error, res);
    } else {
        sendErrorProd(error, res);
    }
}

module.exports = globalErrorHandler;
