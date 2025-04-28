const Services = require('./Services.js');

class ClienteServices extends Services {
  constructor(nomeDoModel){
    super('./app/database/models/clientes.json');
  }
}

module.exports = ClienteServices;