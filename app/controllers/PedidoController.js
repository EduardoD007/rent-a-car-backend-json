const CarroServices = require('../services/CarroServices.js');
const PedidoServices = require('../services/PedidoServices.js');
const conversorString = require('../utils/conversorString.js');
const conversorData = require('../utils/conversorData.js');
const Controller = require('./Controller.js');

const pedidoServices = new PedidoServices();

class PedidoController extends Controller {
  constructor() {
    super(pedidoServices)
  }

  async criaNovo(req, res) {
    const registro = req.body;
    conversorString(registro);
    conversorData(registro)

    try {
      const novoRegistro = await pedidoServices.criaRegistro(registro, registro.carro_id);
      return res.status(200).json(novoRegistro);
    } catch (error) {
      return res.status(500).json({message: `${error.message} - Erro ao criar novo registro`})
    }
  }
};

module.exports = PedidoController;