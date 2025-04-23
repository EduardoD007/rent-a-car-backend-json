const CarroServices = require('../services/CarroServices.js');
const Controller = require('./Controller.js');

const carroServices = new CarroServices();

class CarroControler extends Controller {
  constructor() {
    super(carroServices)
  }
}

module.exports = CarroControler