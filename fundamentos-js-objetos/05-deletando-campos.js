const carro = {
    marca: 'Ford',
    rodas: 4,
    cor: 'branco',
    carretinha: true
}

console.log(carro) // { marca: 'Ford', rodas: 4, cor: 'branco', carretinha: true }

console.log(delete carro.carretinha) // true
console.log(delete carro.CampoQueNaoExisteNoObjetoCarro) // true

console.log(carro) // { marca: 'Ford', rodas: 4, cor: 'branco' }