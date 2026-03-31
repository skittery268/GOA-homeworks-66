const sendErrorDev = (err, res) => {
    res.status(err.statusCode || 500).json({
        status: err.status || "error",
        message: err.message,
        stack: err.stack,
        err
    })
}

const sendErrorProd = (err, res) => {
    res.status(err.statusCode || 500).json({
        status: err.status || "error",
        message: err.message
    })
}

const globalErrorHandler = (err, req, res, next) => {    
    if (process.env.NODE_ENV === "dev") {
        sendErrorDev(err, res);
    } else {
        sendErrorProd(err, res);
    }
}

module.exports = globalErrorHandler;