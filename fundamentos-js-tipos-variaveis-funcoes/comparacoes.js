// == (comparação implícita -- utiliza conversão implícita)

const numero = 4;
const texto = "4";

console.log(`numero == texto >> ${numero} == ${texto} (Numero typeof: ${typeof numero} e texto typeof: ${typeof texto})? Output: ${numero == texto}`)
/**
 * Output: numero == texto >> 4 == 4 | Numero typeof: number e texto typeof: string? Output: true
 */

 console.log(`numero === texto >> ${numero} === ${texto} (Numero typeof: ${typeof numero} e texto typeof: ${typeof texto})? Output: ${numero === texto}`)
 /**
  * Output: numero === texto >> 4 === 4 (Numero typeof: number e texto typeof: string)? Output: false
  * 
  * Isso ocorre porque os tipos delas são diferentes.
  * 
  * É boa prática utilizar ===
  */