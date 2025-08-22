//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo(){
let amigos = document.querySelector('input').value;
if(amigos === ''){
    alert('Por favor, insira um nome.');
}else{
listaDeAmigos.push(amigos);
limparCampo();
}
}

function limparCampo() {
    amigos = document.querySelector('input');
    amigos.value = '';
}

console.log(listaDeAmigos);

