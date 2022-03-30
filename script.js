let nome = document.getElementById('nome');
let cidade = document.getElementById('cidade');
let estado = document.getElementById('estado');

let a = {}
let usuarios = []


class Usuario {
    constructor(name, city, state) {
        this.name = name,
            this.city = city,
            this.state = state
    }


}
const usuario = new Usuario()

function teste(nome, cidade, estado) {
    usuario.nome = nome;
    usuario.cidade = cidade;
    usuario.estado = estado;
}

function cadastrar(nome, cidade, estado) {
    teste(nome, cidade, estado)

    a.push(usuario);
    usuarios.push(a);

    console.log(
        nome.value,
        cidade.value,
        estado.value,
    )

    //Limpando campos após inserção
    nome.value = '';
    cidade.value = '';
    estado.value = '';
    console.log(usuarios)
    console.log(a)

}







// { nome: '', cidade: '', estado: '' }


