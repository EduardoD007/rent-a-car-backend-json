const Services = require('./Services.js');

class CarroServices extends Services {
  constructor() {
    super('app/database/models/carros.json');
  }
}

module.exports = CarroServices;