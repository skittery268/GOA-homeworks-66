const sendErrorDev = (err, res) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || "error";

    res.status(statusCode).json({
        status,
        message: err.message,
        stack: err.stack,
        err
    });
};

const sendErrorProd = (err, res) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || "error";

    if (err.isOperational) {
        return res.status(statusCode).json({
            status,
            message: err.message
        });
    };

    console.log("Something went wrong!");

    res.status(500).json({
        status: "error",
        message: "Something went wrong!"
    });
};

const globalErrorHandler = (err, req, res, next) => {
    if (process.env.NODE_MODE === "dev") {
        sendErrorDev(err, res);
    } else {
        sendErrorProd(err, res);
    };
};

module.exports = globalErrorHandler;