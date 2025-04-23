const { Router } = require('express');
const ClienteController = require('../controllers/ClienteController.js');
const PedidoController = require('../controllers/PedidoController.js');

const router = new Router();
const clienteController = new ClienteController();
const pedidoController = new PedidoController();

router.get('/clientes', (req, res) => clienteController.buscaTodos(req,res));
router.get('/clientes/:id', (req, res) => clienteController.buscaPorId(req,res));
router.post('/clientes', (req,res) => clienteController.criaNovo(req,res));
router.delete('/clientes/:id', (req,res) => clienteController.exclui(req,res));

//router.post('/clientes/:cliente_id/pedidos', (req, res) => pedidoController.criaNovo(req, res));
router.post('/clientes/:cliente_id/pedidos/:carroId', (req, res) => pedidoController.criaNovo(req, res));
router.delete('/clientes/:cliente_id/pedidos/:pedidoId/:carroId', (req, res) => pedidoController.exclui(req, res));



module.exports = router;

