const cargarJsonBtn = document.querySelector('#cargarJSON');
cargarJsonBtn.addEventListener('click', obtenerJson);


function obtenerJson(){
    const url = 'data/empleado.json';

    fetch(url)
        .then(respuesta => {
            console.log(respuesta)
            return respuesta.json();

        })
        .then(datos => mostrarHTML(datos))
}


function mostrarHTML({empresa, id, nombre, trabajo}){
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>Id: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `
}
