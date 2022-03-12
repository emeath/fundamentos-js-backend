//conversao implicita

const meuNumero = 663;
const meuNumeroString = "663";

console.log(meuNumero == meuNumeroString)
/**
 * numero eh diferente de string, porem o retorno da comp acima é true
 * 
 * Isso ocorre porque houve conversao implicita. 'meuNumero' foi
 * convertido para string ("663") então "663" == "663" retorna true.
 * 
 * Esse comportamento pode causar erros inesperados. Atenção!
 */

//conversao explicita

console.log(meuNumero === meuNumeroString)
/**
 * O operador compara tanto o tipo da variavel e o valor da mesma
 * 
 * - meuNumero (Number) = 663
 * - meuNumeroString (String) = "663"
 */

//--------------------------------------------------------------------------------

const numeroNumero = 123
const numeroString = "123"

console.log(numeroNumero + numeroString) 
/**
 * Output: 123123
 * 
 * Ocorre concatenação. Isso não é possível em outras linguagens (ex: Python)
 * 
 * Cuidado. Esse comportamento pode causar erro
 */

console.log(numeroNumero + Number(numeroString))
/**
 * Output: 246
 * 
 * Formas de conversão explícita
 * - Number()
 * - String()
 * 
 * Porém, cuidado com conversões...
 */

console.log(Number("123A"))
/**
 * Output: NaN -- not a number
 * 
 * Nesse caso não é possível mesmo converter para um número
 * 
 * Mas, tome cuidado... Olhe esse caso
 */

console.log(Number("0xFF"))
/**
 * Output: 255
 * 
 * uai... Não deveria resultar em NaN porque tem digito numero e letras?
 * 
 * Na verdade o que houve foi a conversão de uma string que representa um
 * número em base hexadecimal para um número em base decimal (255)
 */
