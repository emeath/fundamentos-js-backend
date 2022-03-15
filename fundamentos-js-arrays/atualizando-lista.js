                        //0     //1    //2     //3     //4         //5
const listaDeChamada = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

console.log(listaDeChamada)

listaDeChamada.splice(1, 2, "Rodrigo")
/*
* Iniciaremos a remover no indice 1 da array
* A partir desse ponto, removeremos 2 elementos (o próprio elem de index 1 e o de index 2)
* Qual(uais) elementos serão adicionados no local onde foram removidos elementos? Neste caso apenas Rodrigo
*/

console.log(listaDeChamada)

listaDeChamada.splice(1, 1, "Rodrigo Jr.", "Vivian")

console.log(listaDeChamada)

listaDeChamada.splice(5, 0, "Wilson")

console.log(listaDeChamada)