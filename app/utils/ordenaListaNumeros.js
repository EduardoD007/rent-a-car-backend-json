
const ordenaListaNumeros = (array) => {
  console.log(array)
  let menor
  let arrayOrdenada = []
  for(let i = 0; i <= array.length; i++) {
    menor = array[i]
    for(let j = 0; j < array.length; j++) {
      if(menor < array[j]) {
        menor = menor
      }else {
        menor = array[j]
      }
    }

    array.splice(array.findIndex(e => e === menor), 1)
    arrayOrdenada.push(menor)
    i = 0
  }
  console.log(arrayOrdenada)
  return arrayOrdenada
}

module.exports = ordenaListaNumeros