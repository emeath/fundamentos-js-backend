const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '1233321123',
    email: 'ANDRE@EMAIL.COM'
}

const chaves = ['nome', 'idade', 'cpf', 'email']
const chave = 'nome'
console.log(cliente[chaves[0]]) // acessa atributo nome -- output Andre
console.log(cliente[chave]) // Andre
//console.log(cliente.chave) // ERRO! pois não existe este atributo no objeto declarato acima

//Acessando todos os elementos de forma enxuta
chaves.forEach(elemento => console.log(`Chave: ${elemento} - Valor: ${cliente[elemento]}`))

// Tentar acessar objetos nao definidos retorna undefined e nao ocorre erro em JS...
console.log(cliente.saldo) //undefined
console.log(cliente['saldo']) //undefined