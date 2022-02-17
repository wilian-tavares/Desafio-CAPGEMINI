let entrada = 'ovo'; // Editar apenas a (variável entrada)

let aux = '';
let array = [];

for (let i = 0; i < entrada.length; i++) {
    for (let j = 0; j < entrada.length; j++) {
        if (i != j) {
            aux = (entrada[i] + entrada[j])

            if (array.includes(aux)) {
            }
            else {
                array.push(aux);
                entrada[j] + entrada[i]
            }
        }
    }
}

console.log(array)
console.log(`Anagramas encontrados = ${array.length}`)
