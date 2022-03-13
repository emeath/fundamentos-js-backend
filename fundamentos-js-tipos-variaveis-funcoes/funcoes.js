//Forma 1: declaração de função

// declarar a função
function colocaEmMaiusculo(texto) {
    return texto.toUpperCase()
}

function fatorial(numero){
    if(numero == 1){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

// utilizar a função
console.log(colocaEmMaiusculo("oi qual o seu nome?"))
console.log(fatorial(10))