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
/*
Chave: nome - Valor: Andre
Chave: idade - Valor: 36
Chave: cpf - Valor: 1233321123
Chave: email - Valor: ANDRE@EMAIL.COM
*/
 

// Forma alternativa
const exibeElementosFormatados = elementoArray => console.log(`Chave: ${elementoArray} | Valor: ${cliente[elementoArray]}`)
chaves.forEach(exibeElementosFormatados)
/*
Chave: nome | Valor: Andre
Chave: idade | Valor: 36
Chave: cpf | Valor: 1233321123
Chave: email | Valor: ANDRE@EMAIL.COM
*/

// Tentar acessar objetos nao definidos retorna undefined e nao ocorre erro em JS...
console.log(cliente.saldo) //undefined
console.log(cliente['saldo']) //undefined