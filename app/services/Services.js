const { Transaction } = require('sequelize');
const dataSource = require('../database/models');

class Services {
  constructor(model) {
    this.model = model
  }

  async buscaTodosOsRegistros(where) {
    return dataSource[this.model].findAll({where:{...where}});
  }

  async buscaPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async criaRegistro(registro, transacao) {
    return dataSource[this.model].create(
      registro,
      {
        transaction : transacao
      }
    );
  }

  async atualizaRegistro(registroAtualizar, where, transacao) {
    const listaRegistroAtualizados = await dataSource[this.model].update(
        registroAtualizar,
        {
          where : {...where},
          transaction : transacao
        }
      );
    if(listaRegistroAtualizados[0] === 0) {
      return false;
    }else return true;
  }

  async excluiRegistro(where, transacao) {
    console.log(where)
    return  dataSource[this.model].destroy(
      {
        where : {...where},
        transaction : transacao
      });
  }
}

module.exports = Services;