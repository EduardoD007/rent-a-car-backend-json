module.exports = (objeto) => {
  for(const propriedade in objeto){
    if(/vazio/.test(objeto[propriedade])){
      delete objeto[propriedade]
      console.log(objeto)
    }
  }
}