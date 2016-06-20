'use strict';

const app = require('express')();
const config = require('./config').react.frontend;

app.get('/static/:file', (req, res) => {
  res.sendFile(`${__dirname}/dist/${req.params.file}`);
});

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(config.port);
