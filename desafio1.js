/*
    Modifique apenas a constante (n)
*/
const n = 6;    //Modifique aqui

const array = [];

for (let i = 0; i < n; i++) {
    array.push('x'.repeat(1 + i))
}

for (const line of array) {
    console.log(line.padStart(n, ' '))
}





