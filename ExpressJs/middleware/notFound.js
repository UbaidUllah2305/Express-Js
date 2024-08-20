const notFound = (req,res,next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
};

export default notFound;
