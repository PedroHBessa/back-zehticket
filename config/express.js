const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const consign = require('consign')
var cors = require('cors');
const session = require('express-session')

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  app.use(cors());

  // MIDDLEWARES
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json())
  app.use(express.static('uploads'))
  app.use(express.static('public'));
  app.use(session({
    secret: 'iuashd98sahdsa',
    resave: false,
    saveUninitialized: true
  }));

  // ENDPOINTS
  consign({cwd: 'api'})
  .then('data')
  .then('controllers')
  .then('routes')
  .into(app)


  return app;
};