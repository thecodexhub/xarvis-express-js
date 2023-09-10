# Xarvis Express JS

Node and Express Starter Template - JavaScript.

![node express workflow](https://github.com/thecodexhub/xarvis-express-js/actions/workflows/ci.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

* Linting rules with ESlint and Prettier
   * Pre-commit hooks using husky for staged-lint
   * Editor configuration with .editorconfig
   * Lint staged parser in .lintstagedrc.json
* ENV validations with Joi and dotenv
   * cross-env and pm2 as load balancer
   * ecosystem config file for production
* Secure http requests using helmet
* Sanitize request data with xss filters
* gzip compression for response body size
* Enable cors, pre-flight across-the-board
* 404 for unknown API request
* Convert unknown errors to known object, error handling
* process.exit on unhandled exception/rejection
* Custom logging with Winston and Morgan
* Add a health check route
* Rate limiter for repeater failed requests
* Add unit tests with jest and supertest
