function entrar() {
  let area = document.getElementById('area')
  let texto = prompt('Qual seu nome?')
  if (texto === '' || texto === null) {
    window.alert('Digite um nome válido')
    entrar()
  } else {
    area.innerHTML = `<h1>Bem vindo: ${texto}</h1>`
  }
}

function entrar2(nome) {
  alert(nome + ' Filipe')
}
