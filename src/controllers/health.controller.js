const httpStatus = require('http-status');
const catchAsync = require('../utils/catch-async');
const healthService = require('../services/health.service');

const health = catchAsync(async (req, res) => {
  const health = await healthService.checkHealth();
  res.status(httpStatus.OK).send(health);
});

module.exports = { health };
