const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '12322332',
    email: 'email@email.com',
    fones: ['22211111', '22221113'],
    dependentes: [
        {
            nome: 'Sara Silva',
            parentesco: 'Filha',
            dataNasc: '20/03/2011'
        },
        {
            nome: 'Samia Maria',
            parentesco: 'Filha',
            dataNasc: '04/01/2013'
        }
    ],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor
    }
}

console.log(cliente)

// utilizando o metodo

cliente.depositar(175)

console.log(cliente)