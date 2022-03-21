const nomes = ['Ana Flavia', 'Marco Aurelio', 'Marta', 'Marquinho']
const notas = [7, 4.5, 8, 9.75]

// desejamos retornar o nome do aluno, filtraremos a array de nomes
const alunosReprovados = nomes.filter( (nomeDoAluno, indice) => notas[indice] < 5)

// caso desejemos nao utilizar um argumento mas que deve ser informado:
const alunosReprovados2 = nomes.filter((indiceDoAluno) => notas[indiceDoAluno] < 5)

//console.log(alunosReprovados)
//console.log(alunosReprovados2)

// Erro. Comportamento "buggy" - nota['abc'] nao resulta em erro. Resulta em undefined
const alunosReprovados3 = nomes.filter((indiceDoAluno) => {
    console.log(indiceDoAluno)
    // por utilizamos { } devemos usar a keyword return
    // no return deve-se retornar dado boolean
    return notas[indiceDoAluno] < 5
})

console.log("Alunos reprovados 3 [inicio]:")
console.log(alunosReprovados3)
console.log("Alunos reprovados 3 [final]:")


//console.log(notas['itatiaia'])
//console.log(notas['itatiaia'] == true)

// Nao sera interpretado. Resultara em erro!! Deve-se utilizar a keyword _
const alunosReprovados4 = nomes.filter((    , indiceDoAluno) => nota[indiceDoAluno] < 5})
