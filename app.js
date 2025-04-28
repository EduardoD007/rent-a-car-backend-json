const express = require("express");
const routes = require('./app/routes');
const cors = require('cors')

const app = express();

//app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin : https://rent-a-car-frontend-v2.onrender.com")
  res.header(
    "Access-Control-Allow-Headers",
    "content-type"
  )
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "POST, PUT, PATCH, GET, DELETE"
    )
    return res.status(200).json({})
  }
  next()
})

routes(app);

module.exports = app;