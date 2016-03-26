'use strict';

// instantiate express app
const app = require('express')();
const config = require('./config')();

app.get('/health', (req, res) => {
  res.json({
    healthy: true,
    version: config.version
  })
});

app.get('/', (req, res) => {
  res.json({
    status: 'just barely working!'
  })
});

app.listen(config.appPort, () => {
  console.info('----\n==> 🌎  API is running on port %s', config.apiPort);
  console.info(`==> 💻  Send requests to http://${config.apiHost}:${config.appPort}`);
})
