

const express = require('express');
const config = require('./config/config');;
const nlog = require('./lib').log;

const app = express();

module.exports = require('./config/express')(app, config);

app.listen(config.port, () => {
  nlog.drawArtword(nlog.artword.nhello + '-node-express-site');	
  console.log('Express server listening on port ' + config.port);
});

