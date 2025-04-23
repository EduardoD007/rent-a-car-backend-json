const express = require('express');
const clientes = require('./clienteRoutes.js');
const carros = require('./carrosRoutes.js');
const pedidos = require('./pedidosRoutes.js')


module.exports = app => {
  app.use(
    express.json(),
    clientes,
    carros,
    pedidos
  );
}
