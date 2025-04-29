const fs = require("fs")
const ordenaListaNumeros = require('../utils/ordenaListaNumeros')




class Services {
  constructor(model) {
    this.model = model
  }


  async buscaTodosOsRegistros(where) {
    const registros =  JSON.parse(fs.readFileSync(this.model))

    function filtraRegistros (objeto) {
      let bool 
      for(const prop in where) {
        for(const proObjeto in objeto) {
          if(prop === proObjeto) {
            if(bool === false) {break}
            if(where[prop] === objeto[proObjeto]){
              bool = true
            }else{
              bool = false
            }
          }
        }
      }
      return bool
    }

    if(Object.keys(where).length === 0) {
      return registros
    }
    else{
      var registrosFiltrados =  registros.filter(registro => filtraRegistros(registro))
      return registrosFiltrados
    }
  }

  async buscaPorId(id) {
    const registros = JSON.parse(fs.readFileSync(this.model))
    const registro =  registros.filter(registro => registro.id === Number(id))
    return registro

  }

  async criaRegistro(registro) {
    var listaId = []
    let id
    const registros = JSON.parse(fs.readFileSync(this.model))
    
    if(registros.length === 0) {
      id = 1
    }else {
      for(const registro of registros) {
        var registroId = registro.id
        listaId.push(registroId)
      }
      const listaIdOrdenada = ordenaListaNumeros(listaId)
      id = (listaIdOrdenada.reverse().find(e => listaIdOrdenada[0])) + 1
    }
    
    registro.id = id

    const novoRegistro = [...registros, registro]

    fs.writeFileSync(this.model,JSON.stringify(novoRegistro))
    console.log("adicionou carro")
  }

  async atualizaRegistro(registroAtualizar, where) {
    const registros = JSON.parse(fs.readFileSync(this.model))
    debugger
    var data = registros.filter(registro => registro.id === Number(where.id))
    console.log(data)

    data.map(objeto => {
      for(const propData in objeto) {
        for(const propAtualizar in registroAtualizar) {
          if (propData === propAtualizar) {
            objeto[propData] = registroAtualizar[propAtualizar]
          }
        }
      }
    })

    registros.splice(registros.findIndex(registro => registro.id === where.id),1,data.find(e => e,[0,data]))
    fs.writeFileSync((this.model), JSON.stringify(registros))
  }

  async excluiRegistro(id) {
    console.log('entrou em excluir')
    const registros = JSON.parse(fs.readFileSync(this.model))
    registros.splice(registros.findIndex(e => e.id === id),1)
    fs.writeFileSync((this.model), JSON.stringify(registros))
  }
}

module.exports = Services;