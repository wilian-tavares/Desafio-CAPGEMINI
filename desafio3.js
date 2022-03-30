/*

Modifique apenas a variavel (senha)
lembre-se de deixa-la entra áspas

*/

const senha = '12aA*' // Modifique aqui

const especiais = /[!, @, #, $, %, ^,*,&, (, ) ,-, +]/;
const numeros = /[0-9]/
const minuscula = /[a-z]/;
const maiuscula = /[A-Z]/;

const todos = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()-+]).{6,}$/;

function validaNumero(senha, numeros) {
    const resultado = numeros.test(senha)

    if (resultado === true) {
        console.log('Tem Pelo menos um Dígito')
    } else {
        console.log('não tem Dígito')
    }
}

function validaEspeciais(senha, especiais) {
    const resultado = especiais.test(senha);
    if (resultado === true) {
        console.log('Tem pelo menos um  caractere Especial')
    }
    else {
        console.log('Não tem Caractere Especial')
    }
}

function validaMaiuscula(senha, maiuscula) {
    const resultado = maiuscula.test(senha)
    if (resultado === true) {
        console.log('Tem pelo menos uma letra Maiuscula')
    }
    else {
        console.log('Não tem maiuscula')
    }
}

function validaMinuscula(senha, minuscula) {
    const encontrado = minuscula.test(senha);
    if (encontrado === true) {
        console.log('Tem pelo menos uma letra Minuscula')
    }
    else {
        console.log('Não tem letra Minuscula')
    }
}

function validaTamanho(senha) {
    if (senha.length < 6) {
        console.log(`Sua senha tem apenas ${senha.length} Caracteres. O Tamanho Necessário é 6. `)
    }
    else {
        console.log('A senha tem o Tamanho Mínimo necessário')
    }
}

function validador(senha, numeros, especiais, minuscula, maiuscula, todos) {
    console.log(`Sua senha = ${senha}`)
    validaTamanho(senha);
    validaMinuscula(senha, minuscula)
    validaMaiuscula(senha, maiuscula)
    validaEspeciais(senha, especiais)
    validaNumero(senha, numeros)
}

validador(senha, numeros, especiais, minuscula, maiuscula)




