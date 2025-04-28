const Services = require('./Services.js');
import path from "path"

const filePathClientes = path.join(process.cwd(),'./temp/database/models', 'clientes.json')

class ClienteServices extends Services {
  constructor(){
    super(filePathClientes);
  }
}

module.exports = ClienteServices;