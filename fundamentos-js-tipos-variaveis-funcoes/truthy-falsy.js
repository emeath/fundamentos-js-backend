// Tipos que podem ser interpretados como true ou false mesmo nao sendo explicitamente true ou false

const usuarioLogado = true
const contaPaga = false

if(usuarioLogado == contaPaga){
    console.log("Usuario == contaPaga")
}
else {
    console.log("Usuario != contaPaga")
}

// Primeiro tipo 0 e 1 (linguagem de banco de dados)
// 0 -> false
// 1 -> true

const firstTruthyFalsy = 0
console.log(firstTruthyFalsy)
if(firstTruthyFalsy){
    console.log(`${firstTruthyFalsy} representa true em js`)
}
else {
    console.log(`${firstTruthyFalsy} representa false em js`) // output
}

// Segundo tipo "" ou '' representam false 

const secondTruthyFalsy = ''
console.log(`${secondTruthyFalsy} == false? ${secondTruthyFalsy == false}`) //outputs true
console.log(`>>>${secondTruthyFalsy}<<< == false? ${secondTruthyFalsy == false}`) //outputs true


let minhaLet; // (como nao eh definida, armazena undefined)
console.log(minhaLet) //outputs undefined

const constNulla = null;
console.log(constNulla); //outputs null

// Tipos de minhaLet e constNulla
console.log(typeof minhaLet) // outputs undefined
console.log(typeof constNulla) // outputs object

/**
 * typeof constNulla = object. Deveria ser null, porem foi definido assim
 * na construção da linguagem. A alteração do tipo de object -> null não
 * ocorrerá para não quebrar sistemas legados...
 */