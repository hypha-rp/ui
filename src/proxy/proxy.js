const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const dotenv = require('dotenv');
const winston = require('winston');
const app = express();

dotenv.config();
const proxyPort = process.env.PROXY_PORT || 3000;
const apiUrl = process.env.API_URL || 'http://hypha-api:8081';
const logLevel = process.env.LOG_LEVEL || 'INFO';

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

app.use(morgan(logLevel, {
  stream: {
    write: (message) => logger.info(message.trim())
  }
}));

app.use(express.json());

app.use((req, res, next) => {
  logger.info(`REQUEST ${req.method} ${req.url}`);
  next();
});

// Forward requests to the API
app.use('/api', async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `${apiUrl}${req.url}`,
      data: req.body,
      params: req.query,
      headers: req.headers
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    logger.error(`Error forwarding request: ${error.message}`);
    res.status(error.response ? error.response.status : 500).json({
      message: 'Error forwarding request',
      error: error.message
    });
  }
});

app.listen(proxyPort, () => {
  logger.info(`Proxy server running on port ${proxyPort}`);
});