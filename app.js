// --- Variáveis Globais --- 
let friends = [];

// --- Funções de Manipulação da Lista de Amigos ---

// Função responsável por adicionar um amigo na lista de amigos
function adicionarAmigo() {
    let name = document.querySelector('#amigo').value;

    if (name == '') {
        alert('Por favor, insira um nome');
        return;
    } else {
        // Adiciona o amigo na lista
        friends.push(name.trim());
        listarAmigos();
        limparCampo();
    }
};

// Função responsável por listar os amigos na tela
function listarAmigos() {
    let list = document.getElementById('listaAmigos');
    list.innerHTML = '';

    let i = 0;
    while (i < friends.length) {
        if (friends[i] !== '') {
            let item = document.createElement('li');
            item.textContent = friends[i];
            list.appendChild(item);
        }
        i++;
    }
};

// Função responsável por limpar o campo de input
function limparCampo() {
    document.querySelector('#amigo').value = '';
};

// --- Funções de Sorteio ---

// Função responsável por sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há pelo menos 2 amigos na lista para o sorteio
    if (friends.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear!');
        return;
    }

    // Sorteio aleatório de um amigo
    let friendsList = Math.floor(Math.random() * friends.length);
    let selectedFriend = friends[friendsList];

    // Exibe o resultado do sorteio
    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${selectedFriend}`;
};

// --- Função de Reset --- 

// Função responsável por resetar a lista de amigos e limpar os resultados
function reset() {
    friends = [];
    listarAmigos();
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('listaAmigos').innerHTML = '';
    limparCampo();
};
