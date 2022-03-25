const cliente = {
	nome: "Andre",
	idade: 36,
	cpf: "123123123123",
	email: "anderson@email.com",
	fones: ["55 9999 9999", "55 2111 2121"]
}

console.log(cliente.fones) //[ '55 9999 9999', '55 2111 2121' ]

//como tenho acesso ao valor atraves da chave, tenho acesso a uma array
cliente.fones.forEach(elementoDaArray => console.log(elementoDaArray))

const objetoClienteNaoUsual = {
	nome: "name error!",
	idade: -1,
	cpf: "cpf error!",
	email: "email error!",
	fone1: "123123",
	fone2: "32423",
	fone3: "43242",
	fone4: "12312132"
}

// Nao sabemos quantos campos de fone os clientes da aplicacao terao. Será 1, 2, 3? Nao sabemos. Deixar campos pre-prontos para receber esses dados não é boa prática.
// O recomendado é utilizar uma array para armazenar os telefones que podem ser 0...N