module.exports = (objeto) => {
  for(const propriedade in objeto){
    if(/id/.test(propriedade) || /Id/.test(propriedade)){
      objeto[propriedade] = Number(objeto[propriedade]);
    }
  }
}
