'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {

    static associate(models) {
      Cliente.hasMany(models.Pedido, {
        foreignKey : 'cliente_id'
      })
    }
  }

  Cliente.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING, 
    endereco: DataTypes.STRING,
    bairro: DataTypes.STRING,
    numero: DataTypes.STRING,
    complemento: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'clientes'
  });
  return Cliente;
};