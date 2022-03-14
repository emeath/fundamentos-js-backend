const notas = [7, 4, 10]
notas.push(6.2)
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)

// Atenção!
notas.push()
console.log(notas[4]) // outputs: undefined
// Será adicionado elemento 'undefined' para a array que utilizar o método de array push sem argumento (push())