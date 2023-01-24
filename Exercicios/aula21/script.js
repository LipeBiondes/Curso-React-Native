function gerarData() {
  var data = new Date()
  var da = document.getElementById('data')
  data = `Dia: ${data.getDay()}, Mês: ${data.getMonth()}, Ano: ${data.getFullYear()}`
  da.innerHTML = data
}
