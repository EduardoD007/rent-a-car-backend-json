const util = require('../utils/conversorString.js');
const CarroServices = require('./CarroServices.js');
const Services = require('./Services.js');
import path from "path"

const filePathPedidos = path.join(process.cwd(),'./temp/app/database/models', 'pedidos.json')

const carroServices = new CarroServices();

class PedidoServices extends Services {
  constructor() {
    super(filePathPedidos);
  }

  async criaRegistro(registro, carroId) {

    await super.criaRegistro(registro);
    await carroServices.atualizaRegistro({ status: 'Alugado' }, { id: carroId });
  }

  async excluiRegistro(params) {
    await super.excluiRegistro(params.pedidoId);
    await carroServices.atualizaRegistro({ status: 'Disponível' }, { id: params.carroId })
  }
}

module.exports = PedidoServices;