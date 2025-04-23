const {Router} = require('express');
const CarroControler = require('../controllers/CarroController');

const router = new Router();
const carroController = new CarroControler();

router.get('/carros/', (req, res) => carroController.buscaTodos(req, res));
router.get('/carros/:id', (req, res) => carroController.buscaPorId(req, res));
router.post('/carros', (req, res) => carroController.criaNovo(req, res))
router.put('/carros/:id', (req, res) => carroController.atualiza(req, res));

module.exports = router;