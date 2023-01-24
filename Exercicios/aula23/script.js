let peso, altura, imc, resultado

function calcular() {
  peso = document.getElementById('peso').value
  altura = document.getElementById('altura').value
  imc = peso / (altura * altura)
  imc = imc.toFixed(2)
  if (peso.length == 0 || altura.length == 0) {
    alert('Campos vazios, preencha-os')
    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
    resultado = document.getElementById('resultado')
    resultado.innerHTML = ``
    return false
  } else {
    if (imc < 17) {
      resultado = document.getElementById('resultado')
      resultado.innerHTML = `<h3 style="color: #FF0000"> <br />Seu IMC é : ${imc}, Você está muito abaixo do peso! </h3>`
      document.getElementById('peso').value = ''
      document.getElementById('altura').value = ''
      return false
    } else if (imc >= 17 && imc <= 18.49) {
      resultado = document.getElementById('resultado')
      resultado.innerHTML = `<h3 style="color: #FF0000"> <br />Seu IMC é : ${imc}, Você está abaixo do peso! </h3>`
      document.getElementById('peso').value = ''
      document.getElementById('altura').value = ''
      return false
    } else if (imc >= 18.5 && imc <= 24.99) {
      resultado = document.getElementById('resultado')
      resultado.innerHTML = `<h3 style="color: #00FF00"> <br />Seu IMC é : ${imc}, Você está no peso normal! </h3>`
      document.getElementById('peso').value = ''
      document.getElementById('altura').value = ''
      return false
    } else if (imc >= 25 && imc <= 29.99) {
      resultado = document.getElementById('resultado')
      resultado.innerHTML = `<h3 style="color: #FF0000"> <br />Seu IMC é : ${imc}, Você está acima do peso normal! </h3>`
      document.getElementById('peso').value = ''
      document.getElementById('altura').value = ''
      return false
    } else {
      resultado = document.getElementById('resultado')
      resultado.innerHTML = `<h3 style="color: #FF0000"> <br />Seu IMC é : ${imc}, Você está muito acima do peso normal! </h3>`
      document.getElementById('peso').value = ''
      document.getElementById('altura').value = ''
      return false
    }
  }
}
