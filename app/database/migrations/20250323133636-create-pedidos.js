'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {model: 'clientes', key: 'id'}
      },
      carro_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'carros', key: 'id'}
      },
      data_inicial: {
        type: Sequelize.DATE
      },
      data_final: {
        type: Sequelize.DATE
      },
      valor: {
        type: Sequelize.NUMBER
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pedidos');
  }
};