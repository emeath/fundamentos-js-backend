const cliente = {
    nome: "Matheus",
    idade: 99,
    cpf: "123123123",
    email: "emailDoMatheus@email.com",
    fones: ["123321123", "33322123"]
}

// adicionar um objeto dentro do objeto cliente
cliente.dependentes = {
    nome: "Dependente do Matheus",
    parentesco: "existe parentesco",
    dataNasc: "01/01/1900"
}

console.log("---")
console.log(cliente)
console.log("---")

// adicionar outro objeto dentro do objeto cliente

endereco = {
    logradouro: "Rua das orquídeas",
    bairro: "Bairro Alvorada",
    cidade: "City"
}

cliente.endereco = endereco

console.log("* * *")
console.log(cliente)
console.log("* * *")