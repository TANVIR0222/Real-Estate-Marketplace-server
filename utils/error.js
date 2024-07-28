// jokhon personal vabe err handle krte hbe tokhon atar dorkar 
export const errorHandler = (statusCode, message) =>{
    // javascript error
    const error = new Error()
    error.statusCode = statusCode;
    error.message = message;
    return error;
    
}