const cliente = {
    nome: 'Kiko',
    idade: 21,
    cpf: '000221-cpfCanino',
    email: 'kikoOrei@dog.com'
}

console.log(cliente.nome)
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos de idade`)
console.log(`Por questões de segurança, meus três primeiros dígitos do cpf é: ${cliente.cpf.substring(0, 3)}`)