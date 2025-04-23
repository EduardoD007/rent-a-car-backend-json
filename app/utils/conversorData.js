module.exports = (objeto) => {
  for(propriedade in objeto) {
    if(propriedade === 'data_inicial' || propriedade === 'data_final') {
      objeto[propriedade] = objeto[propriedade].split('/').reverse().join('/')
    }
  }
}