// Objetivo: calcular media de notas: 10, 6, 2.7, 9
let nota1 = 10
let nota2 = 6
let nota3 = 2.7
let nota4 = 9

let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log(media)

// Esse codigo consegue calcular a media, mas se fosse calcular para todos os alunos da sala, criar varias variaveis nao seria a melhor forma. Pra solucionar esse questão pode-se utilizar Arrays: coleção de dados ordenados - cada elemento ocupa uma posição específica

// Arrays possuem propriedades proprias (ex: .length)
// elemento 10 está na posição 0
// elemento 2.7 está na posição 2
// etc...
const notas = [10, 6, 2.7, 9]
let media2 = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(media2)
