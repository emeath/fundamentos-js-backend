const idadeMinimaDirigir = 18
const idadeUsuario = 11

if(idadeUsuario >= idadeMinimaDirigir){
    console.log("Voce pode iniciar a etapa de certificação para dirigir automóveis.")
} else {
    console.log(`Você não pode inidicar o processo de certificação. Volte daqui ${idadeMinimaDirigir - idadeUsuario} anos`)
}

//utilizando operador ternario
console.log("utilizando operador ternario")

console.log(idadeUsuario >= idadeMinimaDirigir ? "Voce pode iniciar a etapa de certificação para dirigir automóveis." : `Você não pode inidicar o processo de certificação. Volte daqui ${idadeMinimaDirigir - idadeUsuario} anos`)