const { Utils } = require('sequelize');
const conversorString = require('../utils/conversorString.js');
const validaVazio = require('../utils/validaVazio.js');


class Controller {
  constructor(instanciaServices) {
    this.instanciaServices = instanciaServices
  }

  async buscaTodos(req, res) {
    const {...params} = req.query;
    validaVazio(params)
    try {
      const listaRegistros = await this.instanciaServices.buscaTodosOsRegistros(params);
      return res.status(200).json(listaRegistros);
    } catch (error) {
      return res.status(500).json({message: `${error.message} - Falha ao buscar registros`})
    }
  }

  async buscaPorId(req, res) {
    const { id } = req.params;
    try {
      const registro = await this.instanciaServices.buscaPorId(id);
      return res.status(200).json(registro);
    } catch (error) {
      return res.status(500).json({message: `${error.message} - Falha ao buscar registros`})
    }
  }

  async criaNovo(req,res) {
    const registro = req.body;
  
    conversorString(registro);

    try {
      const novoRegistro = await this.instanciaServices.criaRegistro(registro);
      return res.status(200).json(novoRegistro);
    } catch (error) {
      return res.status(500).json({message: `${error.message} - Falha ao criar novo registro`})
    }
  }

  async atualiza(req, res) {
    const {...params} = req.params;
    const registro = req.body;
    conversorString(params);

    try {
      const registroAtualizado = await this.instanciaServices.atualizaRegistro(registro,params);
      if(!registroAtualizado){
        return res.status(400).json({mensagem: 'Registro não foi atualizado'});
      }
      return res.status(200).json({mensagem: 'Registro atualizado com sucesso'});
    } catch (error) {
      return res.status(500).json({message: `${error.message}`});
    }
  }

  async exclui(req, res) {
    const { ...id } = req.params;
    conversorString(id)

    try {
      await this.instanciaServices.excluiRegistro(id);
      return res.status(200).json({message: 'Registro excluído com sucesso'});
    } catch (error) {
      return res.status(500).json({message: `${error.message} - Falha ao excluir registro` });
    }
  }
};

module.exports = Controller;