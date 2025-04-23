const {Router} = require('express');
const PedidoController = require('../controllers/PedidoController');

const router = new Router();
const pedidoController = new PedidoController();

router.get('/pedidos', (req, res) => pedidoController.buscaTodos(req, res));

module.exports = router;

