const Services = require('./Services.js');
import path from "path"

const filePathCarros = path.join(process.cwd(),'./temp/', 'carros.json')
class CarroServices extends Services {
  constructor() {
    super(filePathCarros);
  }
}

module.exports = CarroServices;