



// create express error hendaler
const errorHandler = ( error, req, res, next ) => {
    
    const errorStatus = error.status || 500;
    const errorMessage = error.message || 'unknown errors';
    return res.status(errorStatus).json({
        message : errorMessage,
        status : errorStatus,
        stack : error.stack
    });

}



// export default
export default errorHandler;