
const arrayVazia = [];

console.log(arrayVazia); // Output: []
console.log(arrayVazia.length); // Output: 0

const arrayVazia2 = [];
console.log(arrayVazia2[0]); // Output: undefined

const arrayVazia3 = [,,,];
console.log(arrayVazia3.length);
console.log(arrayVazia3[0]);
console.log(arrayVazia3[1]);
console.log(arrayVazia3[2]);
console.log(arrayVazia3[31]);

console.log("---")
const arrayVazia4 = [,,,];
console.log(arrayVazia4.length);
arrayVazia4.push(51);
console.log(arrayVazia4);
console.log(arrayVazia4.length);