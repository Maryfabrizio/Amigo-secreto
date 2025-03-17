
let amigos = [];


function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.Value.trim();


if (nombreAmigo === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;

    }

    amigos.push(nombreAmigoNombre);

    actualizarLista();

    inputAmigo.value = ""; 
    inputAmigo.focus();
 

}

function actualizarLista() {
    const listaAmigoU1 =document.getElementById("listaAmigos");
    listaAmigoU1.innerHTML = "";
    

    amigos.forEach (amigo => {
        const li =document.createElement("li");
        li.textContent = amigo; 
        listaAmigoU1.appendChild(li);


      } )

        function sortearAmigo() {
            if (amigos.length === 0) {
            alert("¡No hay amigos en la lista para sortear! Por favor, agrega amigos antes de sortear.");
        return
            
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];
        const resultadoU1 = document.getElementById("resultado");
        
        resultadoU1.innerHTML = `<li>${amigoSorteado}</li>`;

    
    }

    