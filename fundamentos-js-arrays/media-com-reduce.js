const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

//itera sobre toda a array com o objetivo de reduzir a array/convergir para um único valor no fim.
//1o argumento de reduce eh uma funcao callback que recebe dois parametros de entrada 1p acumulador e 2p o valor atual do elemento da array
//2o argumento eh o valor inicial do acumulador 
const mediaSalaJS = salaJS.reduce((acum, atual) => atual + acum, 0) / salaJS.length

const arrowFunReduce = (acumulador, valorAtual) => valorAtual + acumulador
const total = salaJava.reduce(arrowFunReduce, 0)
const mediaSalaJava = total/salaJava.length

function usarComReduce (acumulator, current){
    return acumulator + current
}

const mediaSalaPython = salaPython.reduce(usarComReduce, 0) / salaPython.length

console.log(salaJS)
console.log(mediaSalaJS)

console.log(`Media da sala de Java: ${mediaSalaJava}`)

console.log('A media da sala de Python eh: ' + mediaSalaPython)