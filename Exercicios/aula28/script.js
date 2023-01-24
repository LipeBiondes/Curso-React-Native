const pessoa = {
  nome: 'Alefe',
  sobrenome: 'Filipe',
  idade: '21',
  cargo: 'Dev júnior'
}

/*let { nome } = pessoa
let { sobrenome } = pessoa

let { idade, cargo } = pessoa
console.log(nome + ' ' + sobrenome + ' ' + idade + ' ' + cargo)
*/

let { idade: anos } = pessoa

console.log(anos)

let nomes = ['Alefe', 'Biondes', 21]
let { 0: nomeP } = nomes

let { 0: nome1, 2: idade1 } = nomes
console.log(nome1, idade1)

let [nome, sobrenome, idade] = nomes
console.log(nome, sobrenome, idade)
