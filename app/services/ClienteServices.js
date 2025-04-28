const Services = require('./Services.js');

//const filePathClientes = path.join(process.cwd(),'./app/database/models', 'clientes.json')

class ClienteServices extends Services {
  constructor(){
    super('./app/database/models/clientes.json');
  }
}

module.exports = ClienteServices;