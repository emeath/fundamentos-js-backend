//const numero;
/**
const numero;
      ^^^^^^

-- abaixo é o stacktrace (pilha de erros)

SyntaxError: Missing initializer in const declaration
    at Object.compileFunction (node:vm:352:18)
    at wrapSafe (node:internal/modules/cjs/loader:1031:15)
    at Module._compile (node:internal/modules/cjs/loader:1065:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
 */

//const numero = 1
//console.log(numero 
/**
\erros-stacktrace.js:20
console.log(numero
            ^^^^^^

SyntaxError: missing ) after argument list
    at Object.compileFunction (node:vm:352:18)
    at wrapSafe (node:internal/modules/cjs/loader:1031:15)
    at Module._compile (node:internal/modules/cjs/loader:1065:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
 */


console.log(minhaVarNaoDefinida)
/**
\erros-stacktrace.js:38
console.log(minhaVarNaoDefinida)
            ^

ReferenceError: minhaVarNaoDefinida is not defined
    at Object.<anonymous> (C:\Users\Mathe\OneDrive\Documentos\Cursos\Alura\Formação JavaScript para Backend\repo\fundamentos-js-tipos-variaveis-funcoes\erros-stacktrace.js:38:13)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
 */