/*

Modifique apenas a variavel (senha)
lembre-se de deixa-la entra áspas

*/

const senha = ''; //Digite a senha dentro das áspas


const caracteresEspeciais = ['!', '@', '#', '$', '%', '^', '*', '&', '(', ')', '-', '+']

function tamanho(senha) {

    if (senha.length < 1) {
        console.log('A Senha está vázia')
    }
    else if (senha.length === 1) {
        console.log('A senha Contém Apenas 1 Dígito!')

    }
    else if (senha.length > 1 && senha.length < 6) {
        console.log('A Senha precisa de 6 Dígitos')
        console.log(`Atualmente tem: ${senha.length}`)
    }
    else {
        console.log('A senha tem o tamanho certo')

    }
}

function especial(senha, caracteresEspeciais) {

    let quantidadeEspeciais = 0;

    for (let i = 0; i < senha.length; i++) {
        for (let j = 0; j < caracteresEspeciais.length + 1; j++) {

            if (senha[i] === caracteresEspeciais[j]) {
                quantidadeEspeciais++;
                break;
            }
            else { }
        }

    }

    if (quantidadeEspeciais < 1) {
        console.log('Não Tem Especiais')
    }
    else {
        console.log(`Tem Pelo menos ${quantidadeEspeciais} Caracter Especial`)
    }
}

function maiuscula(senha) {
    let i = 0;
    let quantidadeMaiscula = 0;

    while (i < senha.length) {

        if (senha[i] == senha[i].toUpperCase()) {
            quantidadeMaiscula++;
            console.log(`Tem pelo menos ${quantidadeMaiscula} Maiúscula`)
            break;
        }
        else { }

        i++;
    }
    if (quantidadeMaiscula < 1) {
        console.log('Não Tem Letra Maíscula')
    }
}

function minuscula(senha) {
    let j = 0;
    let quantidadeMinuscula = 0;

    while (j < senha.length) {

        if (senha[j] == senha[j].toLowerCase()) {
            quantidadeMinuscula++;
            console.log(`Tem pelo menos ${quantidadeMinuscula} minúscula`);
            break;
        }
        else {
        }
        j++;
    }
    if (quantidadeMinuscula < 1) {
        console.log('Não Tem Letra Minúscula')
    }
}

function validador(senha, caracteresEspeciais) {
    console.log(`A senha escolhida foi: ${senha}`)
    tamanho(senha);
    especial(senha, caracteresEspeciais);
    maiuscula(senha);
    minuscula(senha);
}

validador(senha, caracteresEspeciais)


