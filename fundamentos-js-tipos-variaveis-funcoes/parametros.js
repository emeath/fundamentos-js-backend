function dizerOi(nome){
    return `Oi, ${nome}! Tenha um bom dia! Tchau!`
}

console.log(dizerOi("Matheus"))

//Definir valor padrão para os argumentos
function multiplicar(n1 = 1, n2 = 1){
    return n1 * n2
}

console.log(multiplicar(10))
console.log(multiplicar(10, 11))