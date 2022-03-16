const notas = [10, 6.5, 8, 7.5]
let somaDasNotas = 0
notas.forEach(nota => {
    somaDasNotas += nota
    console.log('Begin Debugging')
    console.log(notas.indexOf(nota), nota)
    console.log('End Debugging')
})
const media = somaDasNotas/notas.length
console.log(media)

//forma alternativa
somaDasNotas = 0
notas.forEach(function(nota){
    somaDasNotas += nota
})
const media2 = somaDasNotas/notas.length
console.log(media2)