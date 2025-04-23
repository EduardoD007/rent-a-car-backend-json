'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carro extends Model {

    static associate(models) {
      Carro.hasMany(models.Pedido, {
        foreignKey: 'carro_id'
      })
    }
  }
  
  Carro.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    placa: DataTypes.STRING,
    transmissao: DataTypes.STRING,
    portas: DataTypes.NUMBER,
    valor_aluguel: DataTypes.NUMBER,
    status: DataTypes.STRING,
    cor: DataTypes.STRING,
    imagem:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Carro',
    tableName: 'carros'
  });
  return Carro;
};