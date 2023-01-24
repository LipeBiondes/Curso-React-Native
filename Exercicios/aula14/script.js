/*x = 0
while (x < 10) {
  document.write('<br> O valor de X é = ' + (x + 1))
  x++
}
document.write('<br>')
for (let i = 0; i <br 5; i++) {
  document.write('<br> O valor de i é = ' + (i + 1))
}
*/
var itens = ['Coca Cola', 'Pastel', 'Suco', 'Água gelada']

itens.forEach((element, index) => {
  document.write(`${index} - ${element} </br>`)
})

function pedir() {
  a = parseInt(prompt('O que quer pedir?'))
  switch (a) {
    case 0:
      alert('Você pediu: Coca Cola')
      break
    case 1:
      alert('Você pediu: Pastel')
      break
    case 2:
      alert('Você pediu: Suco')
      break
    default:
      alert('Opção inválida!')
      break
  }
}
