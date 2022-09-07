const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const consign = require('consign')
var cors = require('cors');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  app.use(cors());

  // MIDDLEWARES
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(express.static('public'));

  // ENDPOINTS
  consign({cwd: 'api'})
  .then('data')
  .then('controllers')
  .then('routes')
  .into(app)


  return app;
};