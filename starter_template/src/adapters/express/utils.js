export const successResponse = (
  res,
  data = {},
  message = 'Success',
  statusCode = 200
) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export default successResponse;

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.log(statusCode);
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};
