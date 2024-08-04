

export const errorHandle = (err, req, res, next ) => {
    const status = err.status || 500;
    const response = status === 500 ? "Internal Server Error" : err.message;

    res.status(status).json({error: {
        response,
        status
    }})
};