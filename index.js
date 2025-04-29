const express = require("express");
const routes = require('./app/routes');
var cors = require('cors')

app.use(cors());

const app = express();

routes(app);


app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "application/x-www-form-urlencoded",
    "Origin, X-Requested-Width, Content-Type, Accept, Authorization");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  app.delete('/pedidos/:pedidoId/:carroId')

  // Pass to next layer of middleware
  next();


}); 





module.exports = app;