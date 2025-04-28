const {Router} = require('express');
const PedidoController = require('../controllers/PedidoController');

const router = new Router();
const pedidoController = new PedidoController();

router.get('/pedidos', (req, res) => pedidoController.buscaTodos(req, res));
router.delete('/pedidos/:pedidoId/:carroId', (req, res) => pedidoController.exclui(req, res))
module.exports = router;

