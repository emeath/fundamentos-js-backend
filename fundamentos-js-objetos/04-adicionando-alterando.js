const cliente = {
    nome: 'Kiko',
    idade: 22,
    cpf: '221222211',
    email: 'kikoOrei@idog.com'
}

console.log(cliente)
// {
//     nome: 'Kiko',
//     idade: 22,
//     cpf: '221222211',
//     email: 'kikoOrei@idog.com'
// }

// Adicionando
cliente.telefone = '34 6666 6666'

console.log(cliente)
//   {
//     nome: 'Kiko',
//     idade: 22,
//     cpf: '221222211',
//     email: 'kikoOrei@idog.com',
//     telefone: '34 6666 6666'   
//   }

// Como o campo ja existe, ele sera alterado
cliente.telefone = '31 7777 7777'

console.log(cliente)
// {
//     nome: 'Kiko',
//     idade: 22,
//     cpf: '221222211',
//     email: 'kikoOrei@idog.com',
//     telefone: '31 7777 7777'
// }
