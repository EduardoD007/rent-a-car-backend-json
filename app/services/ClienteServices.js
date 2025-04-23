const Services = require('./Services.js');

class ClienteServices extends Services {
  constructor(nomeDoModel){
    super('Cliente');
  }
}

module.exports = ClienteServices;