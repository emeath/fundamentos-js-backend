function minhaFuncao(parametro){
    // etc...
}

minhaFuncao("param")

// 2a forma de escrever funções:
// Expressao de função

const soma = function(numero1, numero2) {return numero1 + numero2}
console.log(soma(7, 6))

// - - - - - -

// Perceba que nas linhas abaixo, foi possivel utilizar a função (dizeOi()) antes de defini-la. Isso ocorre devido a propriedade de hoisting do JavaScript

// hoisting = processo de "subir" para o topo do código todas as declaraçoes de var e funtion que estão ao longo do código e somente após isso o restante do código é executado


console.log(dizerOi())

function dizerOi(){
    return "Oi!!"
}

// - - - - -

console.log(subtrair(4, 10))
const subtrair = function(n1, n2) {return n1 - n2}

/**
 * Erro...
 * 
 * Output:
console.log(subtrair(4, 10))
            ^

ReferenceError: Cannot access 'subtrair' before initialization
    at Object.<anonymous> (C:\Users\Mathe\OneDrive\Documentos\Cursos\Alura\Formação JavaScript para Backend\repo\fundamentos-js-tipos-variaveis-funcoes\expressao-funcao.js:23:13)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
 */

// Vantagem de atribuir uma função a uma variável é que a função passa a agir como uma variavel, no sentido de que não pode ser utilizada antes de declarada (variaveis tipo let e const no js)