const nomes = ['Ana', 'Ju', 'Leo', 'Paula']

// Note que passamos apenas o nome da função e mais nada
// Apesar disso, a ImprimeNomes recebera cada elemento da
// array de forma iterativa
nomes.forEach(ImprimeNomes)

// Nao pode
// nomes.forEach(12333)
// nomes.forEach("abccc string...123x")

// forEach() aceita um segundo parametro opcional
// não é muito comum de ser usado. Primeiro parametro é obrigatório
// nomes.forEach(ImprimeNomes, indice)

function ImprimeNomes(nome){
    console.log(`>>>> ${nome}`)
}

// Especialmente util fazer isto quando existem varias arrays
// e voce quer aplicar a mesma função callback nelas através
// do forEach()