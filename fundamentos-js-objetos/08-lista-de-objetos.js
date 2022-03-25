const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '0123456789ABCDEF',
    email: 'andre@email.com',
    fones: ['5591233321', '5532322121'],
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'Filha',
        dataNasc: '20/03/2011'
    }]
}

// Trabalhando com métodos de array

cliente.dependentes.push({
    nome: 'Samia Maria',
    parentesco: 'Irmã',
    dataNasc: '04/01/1992'
})

console.log(cliente)
// {
//     nome: 'Andre',
//     idade: 36,
//     cpf: '0123456789ABCDEF',
//     email: 'andre@email.com',
//     fones: [ '5591233321', '5532322121' ],
//     dependentes: [
//       { nome: 'Sara Silva', parentesco: 'Filha', dataNasc: '20/03/2011' },
//       { nome: 'Samia Maria', parentesco: 'Irmã', dataNasc: '04/01/1992' }
//     ]
// }

//Obter dependente mais nova
const parenteMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNasc === '20/03/2011' )
console.log(parenteMaisNovo[0].nome)