const notas = [10, 9, 8, 7, 5]

const notasAtualizadas = notas.map(nota => nota + 1)

const notasAtualizadas2 = notas.map(nota => {
    if (nota < 10)
        return nota++
    else
        return nota
})

const notasAtualizadas3 = notas.map(nota => {
    if (nota < 10)
        return ++nota
    else
        return nota
})

const notasAtualizadas4 = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)
console.log(notasAtualizadas2)
console.log(notasAtualizadas3)
console.log(notasAtualizadas4)