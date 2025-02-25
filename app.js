// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];
const inputNombre = document.getElementById('amigo');
const listaElement = document.getElementById('listaAmigos');
const resultadoElement = document.getElementById('resultado');

function agregarAmigo() {
    const nombre = inputNombre.value.trim();
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    listaAmigos.push(nombre);
    actualizarLista();
    inputNombre.value = ''; // Limpiar el campo de entrada
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];
    resultadoElement.innerHTML = `<p>El amigo secreto es:<li>${amigoSecreto}</li><p>`;
}

function actualizarLista() {
    listaElement.innerHTML = '';
    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}