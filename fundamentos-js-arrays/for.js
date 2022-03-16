const numeros = [71, 81, 91, 101, 111, 121]

for (let i = 0; i < numeros.length; i++){
    console.log(`indice: ${i} | elemento: ${numeros[i]}`)
}

for (let i = numeros.length - 1; i >= 0; i--){
    console.log(i, numeros[i])
}