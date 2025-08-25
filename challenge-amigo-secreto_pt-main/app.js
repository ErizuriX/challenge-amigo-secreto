//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo(){
let amigos = document.querySelector('input').value;
if(amigos === ''){
    alert('Por favor, insira um nome válido.');
}else{
listaDeAmigos.push(amigos);
limparCampo();
atualizarLista(); // chama a função para exibir na tela
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // limpa a lista antes de adicionar os novos elementos

    // percorre o array e cria os <li>
    for(let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement('li'); // Crie um elemento <li>
        item.textContent = listaDeAmigos[i]; // Adicione o nome do amigo ao <li>
        lista.appendChild(item); // Adicione o <li> à lista
    }
}

function limparCampo() {
    amigos = document.querySelector('input');
    amigos.value = '';
}

function sortearAmigo() {
    // 1. Validar que há amigos disponíveis
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    // 2. Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // 3. Obter o nome sorteado
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    // 4. Mostrar o resultado
    let resultado = document.getElementById("resultado");
    resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}


