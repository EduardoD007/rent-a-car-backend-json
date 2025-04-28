const Services = require('./Services.js');


//const filePathCarros = path.join(process.cwd(),'./app/database/models', 'carros.json')
class CarroServices extends Services {
  constructor() {
    super('./app/database/models/carros.json');
  }
}

module.exports = CarroServices;