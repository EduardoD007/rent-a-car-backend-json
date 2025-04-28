const express = require("express");
const routes = require('./app/routes');
const cors = require('cors')

const app = express();

//app.use(cors());

routes(app);

module.exports = app;