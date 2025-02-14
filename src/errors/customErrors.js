const productNotFoundError = (message = "Product Not found") => {
    const error = new Error(message);
    error.status = 404;
    return error;
  };

  const cartNotFoundError = (message = "Cart Not found") => {
    const error = new Error(message);
    error.status = 404;
    return error;
  };
  
  const badRequestError = (message = "Bad request") => {
    const error = new Error(message);
    error.status = 400;
    return error;
  };
  
  const unauthorizedError = (message = "Unauthorized") => {
    const error = new Error(message);
    error.status = 401;
    return error;
  };
  
  const forbiddenError = (message = "Forbidden") => {
    const error = new Error(message);
    error.status = 403;
    return error;
  };
  
  export default {
    productNotFoundError,
    cartNotFoundError,
    badRequestError,
    unauthorizedError,
    forbiddenError
  };