const config = require('../config/config');

const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;

  const response = {
    code: statusCode,
    message,
    ...(config.env === 'development' && { stack: err.stack }),
  };

  if (config.env === 'development') {
    // TODO: add logger error
    console.error(err);
  }

  res.status(statusCode).send(response);
};

module.exports = errorHandler;
