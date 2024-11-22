const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima)
})

function buscarClima(e){
    e.preventDefault();

    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        mostrarError('Ambos campos son obligatorios');
        return;
    }
    consultarAPI(ciudad, pais);
}


function mostrarError(mensaje){

    const alerta = document.querySelector('.bg-red-100');
    if(!alerta){

        const alerta = document.createElement('div');
    
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');
    
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `
    
        container.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }

}

function consultarAPI(ciudad, pais){

    const appId = 'b33bb33fe10e78efb9c2efa53afaf813';

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    spinner();

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            limpiarHTML();
            if (datos.length === 0){
                mostrarError('Ciudad no encontrada')
                return;
            }

            mostrarClima(datos);

        })
}

function mostrarClima(datos){
    const { main: { temp, temp_max, temp_min }, name} = datos;

    const centigrados = kelvinACentigrados(temp)
    const max = kelvinACentigrados(temp_max)
    const min = kelvinACentigrados(temp_min)


    const cityName = document.createElement('p');
    cityName.innerHTML = `${name}`;
    cityName.classList.add('font-bold', 'text-4xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMax = document.createElement('p');
    tempMax.innerHTML = `Máx: ${max} &#8451;`;
    tempMax.classList.add('text-xl');

    const tempMin = document.createElement('p');
    tempMin.innerHTML = `Min: ${min} &#8451;`;
    tempMin.classList.add('text-xl');

    

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(cityName);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMax);
    resultadoDiv.appendChild(tempMin);

    resultado.appendChild(resultadoDiv);
    
}

const kelvinACentigrados = grados => parseInt(grados - 273.15);


function limpiarHTML(){
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}


function spinner(){

    limpiarHTML();
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    resultado.appendChild(divSpinner);
}