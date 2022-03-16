const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediaDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

const localizaAlunoRetornaNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        const indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return `O aluno ${listaDeNotasEAlunos[0][indice]} possui média: ${listaDeNotasEAlunos[1][indice]}`
    }
    else{
        return `O aluno ${nomeDoAluno} não está cadastrado` 
    }
}

console.log(localizaAlunoRetornaNota('João'))
console.log(localizaAlunoRetornaNota('Ana'))
console.log(localizaAlunoRetornaNota('Pedro'))
console.log(localizaAlunoRetornaNota('Maria'))