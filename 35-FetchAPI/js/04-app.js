const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', cargarAPI);


function cargarAPI(){
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado))
}

function mostrarHTML(datos){
    const contenido = document.querySelector('.contenido');

    let html = '';

    datos.forEach(dato => {
        const {author, post_url} = dato;

        html += `
            <p>Author: ${author}</p>
            <a href="${post_url}" target="_blank">Ver Imagen</a>
        `
    });

    contenido.innerHTML = html;
}