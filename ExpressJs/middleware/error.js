// Error Handler Middleware
const errorHandler = (err, req, res, next) => {
    console.log("Error occurred:", err.message); // Log the error for debugging
    if(err.status) {
        return res.status(err.status).json({ msg: err.message });
    } else {
        return res.status(500).json({ msg: err.message });
    }
};

export default errorHandler;