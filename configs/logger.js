var winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'skeleton.log' })
  ]
});

module.exports = logger;