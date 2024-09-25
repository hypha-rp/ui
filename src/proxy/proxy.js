const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const dotenv = require('dotenv');
const winston = require('winston');

dotenv.config();

const app = express();
const proxyPort = process.env.PROXY_PORT || 3000;
const apiUrl = process.env.API_URL || 'http://hypha-api:8081';
const logLevel = process.env.LOG_LEVEL || 'debug';

// Configure winston logger
const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console()
  ]
});

// Configure morgan to use the logging level
app.use(morgan(logLevel, {
  stream: {
    write: (message) => logger.info(message.trim())
  }
}));

app.use(express.json());

app.use('/api', async (req, res) => {
  const method = req.method.toLowerCase();
  const url = `${apiUrl}${req.path}`;

  logger.info(`Proxying request to: ${url} with method: ${method}`);

  try {
    const response = await axios({
      method,
      url,
      data: req.body,
    });
    logger.info(`Response from backend: ${response.status} - ${response.statusText}`);
    res.json(response.data);
  } catch (error) {
    logger.error(`Error proxying request: ${error.message}`);
    res.status(500).send(error.message);
  }
});

app.listen(proxyPort, () => {
  logger.info(`Server running on port ${proxyPort}`);
});