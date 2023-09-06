const app = require('./app');
const config = require('./config/config');

let server;

server = app.listen(config.port, () => {
  // TODO: add logger
  console.log(`Server listening to PORT ${config.port}`);
});

const exitHandler = () => {
  if (server) {
    server.close((err) => {
      // TODO: add logger
      console.log('Server closed');
      process.exit(err ? 1 : 0);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  // TODO: add logger
  console.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  // TODO: add logger
  console.log('SIGTERM received');
  if (server) server.close();
});
