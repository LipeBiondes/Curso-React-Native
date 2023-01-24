function tecladoApertado(event) {
  if (event.shiftKey) {
    console.log('Shift precionado')
  }
  if (event.keyCode === 13) {
    alert('Enter precionado!')
    console.log('Enter')
  }
}

function soltouTeclado(event) {
  console.log('Soltou teclado')
}

function apertouTeclado(event) {
  console.log('precionou o teclado!')
}
