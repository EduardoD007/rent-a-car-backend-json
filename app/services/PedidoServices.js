const dataSource = require('../database/models');
const util = require('../utils/conversorString.js');

const CarroServices = require('./CarroServices.js');
const Services = require('./Services.js');

const carroServices = new CarroServices();

class PedidoServices extends Services {
  constructor(nomeDoModel){
    super('Pedido');
  }

  async criaRegistro(registro, carroId) {
    
      return dataSource.sequelize.transaction(async (transacao) => {
        await super.criaRegistro(registro, transacao);
        await carroServices.atualizaRegistro({status : 'Alugado'}, {id : carroId}, transacao);
      });
    }

  async excluiRegistro(params) {
    return dataSource.sequelize.transaction( async (transacao)=> {
      await super.excluiRegistro({id: params.pedidoId}, transacao);
      await carroServices.atualizaRegistro({status : 'Disponível'}, {id : params.carroId}, transacao)
    });
  }
}

module.exports = PedidoServices;