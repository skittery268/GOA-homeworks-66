class AppError extends Error {
    constructor(message, statusCode) {
        // Call the parent Error constructor
        super(message);
        
        // Set HTTP status code
        this.statusCode = statusCode;
        
        // Determine error status based on status code
        // 4xx errors are client errors (fail), 5xx are server errors (error)
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        
        // Mark as operational error (expected, can be handled)
        this.isOperational = true;
    }
}

module.exports = AppError;
