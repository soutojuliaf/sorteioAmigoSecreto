let Amigos = [];

const AmigoInput = document.getElementById('amigo');
const AddBtn = document.getElementById('button-add');
const listaAmigos = document.getElementById('name-list');
const resultado = document.getElementById('resultado');
const SortearBtn = document.getElementById('button-sortear');

var input = document.getElementById("amigo");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    adicionarAmigo();
  }
});

function adicionarAmigo() {
    const nomeAmigo = AmigoInput.value.trim();
    if (nomeAmigo !== "") {
        Amigos.push(nomeAmigo);
        AmigoInput.value = "";
        atualizarListaAmigos();
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    Amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    if (Amigos.length < 2) {
        alert("Adicione pelo menos três amigos para sortear.");
        return;
    }
    const amigosSorteados = [...Amigos];
    const resultados = [];
    Amigos.forEach((amigo) => {
        let index;
        do {
            index = Math.floor(Math.random() * amigosSorteados.length);
        } while (amigosSorteados[index] === amigo);
        resultados.push({ amigo, amigoSecreto: amigosSorteados[index] });
        amigosSorteados.splice(index, 1);
    });
    exibirResultados(resultados);
}

function exibirResultados(resultados) {
    resultado.innerHTML = "";
    resultados.forEach(({ amigo, amigoSecreto }) => {
        const li = document.createElement("li");
        li.textContent = `${amigo} tirou ${amigoSecreto}`;
        resultado.appendChild(li);
    });
}
AddBtn.addEventListener('click', adicionarAmigo);
AmigoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});
SortearBtn.addEventListener('click', sortearAmigo);
AmigoInput.focus();
