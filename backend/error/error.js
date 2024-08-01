// ErrorHandler class
class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Middleware to handle errors
export const errorMiddleware = (err, req, res, next) => {
    // Default message and status code
    err.message = err.message || "Internal Server Error!";
    err.statusCode = err.statusCode || 500;

    return res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
};

// Export ErrorHandler class for usage in other parts of the app
export default ErrorHandler;
