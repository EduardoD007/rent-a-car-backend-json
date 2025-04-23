'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('carros', [
      {
        marca: 'Toyota',
        modelo: 'Corolla Xli 1.8 Flex 16V',
        placa: 'FLS4567',
        transmissao: 'Manual',
        portas: 4,
        valor_aluguel: 260,
        status: 'Disponível',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca: 'Toyota',
        modelo: 'Etios Platinum 1.5 Flex 16V',
        placa: 'AFG4566',
        transmissao: 'Automático',
        portas: 4,
        valor_aluguel: 140,
        status: 'Disponível',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca: 'Fiat',
        modelo: 'Argo HGT 1.8 16V Flex',
        placa: 'DDA5687',
        transmissao: 'Automático',
        portas: 2,
        valor_aluguel: 180,
        status: 'Disponível',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca: 'VW',
        modelo: 'Polo Track Robust 1.0 Flex 15V',
        placa: 'DDA5687',
        transmissao: 'Automático',
        portas: 5,
        valor_aluguel: 160,
        status: 'Disponível',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca: 'GM',
        modelo: 'Tracker LTZ 1.8 16V 4X2',
        placa: 'FFR7768',
        transmissao: 'Automático',
        portas: 4,
        valor_aluguel: 190,
        status: 'Disponível',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca: 'VW',
        modelo: 'T-Cross Sense 200 TSI 1.0 Flex',
        placa: 'RYT2234',
        transmissao: 'Automático',
        portas: 5,
        valor_aluguel: 250,
        status: 'Disponível',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
      
    await queryInterface.bulkDelete('carros', [
      {
        marca: 'Toyota',
        modelo: 'Corolla Xli 1.8 Flex 16V',
        placa: 'FLS4567',
        transmissao: 'Manual',
        portas: 4,
        valor_aluguel: 260,
        staus: 'Disponível',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca: 'Toyota',
        modelo: 'Etios Platinum 1.5 Flex 16V',
        placa: 'AFG4566',
        transmissao: 'Automático',
        portas: 4,
        valor_aluguel: 140,
        staus: 'Disponível',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca: 'Fiat',
        modelo: 'Argo HGT 1.8 16V Flex',
        placa: 'DDA5687',
        transmissao: 'Automático',
        portas: 2,
        valor_aluguel: 180,
        staus: 'Disponível',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca: 'VW',
        modelo: 'Polo Track Robust 1.0 Flex 15V',
        placa: 'DDA5687',
        transmissao: 'Automático',
        portas: 5,
        valor_aluguel: 160,
        staus: 'Disponível',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca: 'GM',
        modelo: 'Tracker LTZ 1.8 16V 4X2',
        placa: 'FFR7768',
        transmissao: 'Automático',
        portas: 4,
        valor_aluguel: 190,
        staus: 'Disponível',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca: 'VW',
        modelo: 'T-Cross Sense 200 TSI 1.0 Flex',
        placa: 'RYT2234',
        transmissao: 'Automático',
        portas: 5,
        valor_aluguel: 250,
        staus: 'Disponível',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    
  }
};
