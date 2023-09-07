const config = require('../config/config');
const logger = require('../config/logger');

const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;
  res.locals.errorMessage = message;

  const response = {
    code: statusCode,
    message,
    ...(config.env === 'development' && { stack: err.stack }),
  };

  if (config.env === 'development') {
    logger.error(err);
  }

  res.status(statusCode).send(response);
};

module.exports = errorHandler;
