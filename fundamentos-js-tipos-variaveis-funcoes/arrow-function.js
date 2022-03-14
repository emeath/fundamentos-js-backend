//antigamente
function oi(nome){
    return `oi, ${nome}`
}

//Nova forma utilizando arrow function (ES6 news)

//Quando corpo da funcao é apenas uma linha de código não é necessário utilizar { }. Note que também não é necessário utilizar a keyword return
const oiArrow = nome => `oi =>, ${nome}`;
console.log(oiArrow("Arrow Functions!"))

const somar = (numero1, numero2) => numero1 + numero2
console.log(somar(1,1))

const baskhara = (a, b, c) => {
    const delta = b*b - 4*a*c
    const raizDelta = Math.sqrt(delta)
    const x1 = (-b + raizDelta) / 2 * a
    const x2 = (-b - raizDelta) / 2 * a

    return `x1 = ${x1} e x2 = ${x2}`
}

console.log(baskhara(1, 10, 4))