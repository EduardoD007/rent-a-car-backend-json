const Services = require('./Services.js');
import path from "path"

class ClienteServices extends Services {
  constructor(nomeDoModel){
    super('./app/database/models/clientes.json');
  }
}

module.exports = ClienteServices;