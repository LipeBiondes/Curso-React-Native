// var lista = ['Alefe', 'Ismael', 'Caio', 'Djunior', 22]

// lista.indexOf('Alefe') vai retornar a posição que tem esse valor se não retorna -1

// console.log(lista.join(', ')) retorna a lista separada por ','

// lista.pop() remove o último elemento do array

// lista.shift() remove o primero elemento do array

// lista[0] = 'Alefe Filipe'  alterando valores do array

// lista.push('Maricona') adiciona um valor ao array

function alerta(params) {
  var lista = ['Alefe', 'Ismael', 'Caio', 'Djunior', 22]
  if (lista.indexOf('Ismael') > -1) {
    window.alert('Esse item existe na lisa')
  } else {
    window.alert('Item não encontrado!')
  }
}
