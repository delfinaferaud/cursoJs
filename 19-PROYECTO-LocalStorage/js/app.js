// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];



// Event listeners
eventListeners();
function eventListeners(){
    // Cuando el usuario agrega un nuevo tw
    formulario.addEventListener('submit',agregarTweet)

    // Cuando el doc esta listo
    document.addEventListener('DOMContentLoade', ()=> {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    })
}



// Funciones
function agregarTweet(e){
    e.preventDefault();

    // Textarea 
    const tweet = document.querySelector('#tweet').value;
    

    // Validacion
    if(tweet === ''){
        mostrarError('El mensaje no puede ir vacio');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // Agregar al array
    tweets = [...tweets, tweetObj];
    
    crearHTML()

    // Reiniciar form
    formulario.reset();
}

// Mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// Muestra un listado de los tweets
function crearHTML(){
    limpiarHTML()
    if(tweets.length > 0){
        tweets.forEach( tweet =>{

            // Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet')
            btnEliminar.innerText = 'X';

            // Agregar la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //Crear el HTML
            const li = document.createElement('li');

            // Agregar texto
            li.innerText = tweet.tweet

            // Asignar el boton
            li.appendChild(btnEliminar);

            // Insertarlo en el html
            listaTweets.appendChild(li);
        })
    }

    sincronizarStorage()
}

// Agrega los tweets actuales a localstorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Eliminar un tw
function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id);
    crearHTML()
}

// Limpiar html
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}