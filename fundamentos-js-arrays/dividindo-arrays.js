const nomes = ["João", "Juliana", "Ana", "Caio", "Lara", "Marjorie", "Guilherme", "Aline", "Fabiana", "Andre", "Carlos", "Paulo", "Bia", "Vivian", "Isabela", "Vinícius", "Renan", "Renata", "Daisy", "Camilo"]

const sala1 = nomes.slice(0, nomes.length/2); // Desejamos cortar ate a metade
const sala2 = nomes.slice(nomes.length/2); // da metade ate o fim da array

console.log(`Alunos da sala A: ${sala1}`);
console.log(`Alunos da sala B: ${sala2}`);