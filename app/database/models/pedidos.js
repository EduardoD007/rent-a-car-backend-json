'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {

    static associate(models) {
      Pedido.belongsTo(models.Cliente, {
        foreignKey: 'cliente_id'
      })
      Pedido.belongsTo(models.Carro, {
        foreignKey: 'carro_id'
      })
    }
  }
  Pedido.init({
    data_inicial: DataTypes.DATE,
    data_final: DataTypes.DATE,
    valor: DataTypes.NUMBER,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pedido',
    tableName: 'pedidos'
  });
  return Pedido;
};