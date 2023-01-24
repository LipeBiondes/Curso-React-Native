// Criar balao
// Estourar balao
// carregar o jogo

var total = 0
var time = 500
var timer

function começar() {
  timer = setInterval(criarBalao, time)
  setTimeout(parar, 10000)
}
function parar() {
  clearInterval(timer)
  alert('Parabéns, voce estorou: ' + total + ' balões em 10 segundos!')
  window.location.href = window.location.href
}
function criarBalao() {
  let balao = document.createElement('img')
  balao.setAttribute('class', 'balao')
  balao.setAttribute('src', 'img/balo-png-vermelho.png')

  let x = Math.floor(Math.random() * 600)
  let y = Math.floor(Math.random() * 400)

  if (x != y) {
    balao.setAttribute('style', `left:${x}px; top:${y}px;`)
    balao.setAttribute('onclick', 'estourar(this)')

    document.body.appendChild(balao)
  }
}

function estourar(objeto) {
  document.body.removeChild(objeto)
  total++
  let score = document.getElementById('total')
  score.innerHTML = `Balões Estourados: ${total}`
}
