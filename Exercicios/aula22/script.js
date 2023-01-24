function validar() {
  var numero = document.getElementById('numero').value
  var nome = document.getElementById('nome').value

  if (numero.length > 2 || numero.length == 0) {
    alert('Digite 2 numeros ou menos!')
    document.formulario.numero.focus()
    return false
  } else if (nome.length < 3) {
    alert('Digite um nome maior')
    document.formulario.nome.focus()
    return false
  } else {
    alert('Enviado com sucesso!')
    return true
  }
}
