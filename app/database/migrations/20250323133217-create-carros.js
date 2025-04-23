'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('carros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      modelo: {
        type: Sequelize.STRING
      },
      placa: {
        type: Sequelize.STRING
      },
      transmissao: {
        type: Sequelize.STRING
      },
      portas: {
        type: Sequelize.NUMBER
      },
      valor_aluguel: {
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
    await queryInterface.dropTable('carros');
  }
};