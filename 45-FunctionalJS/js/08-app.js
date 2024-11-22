// closures: van acompañados del scope. hacer disponible un valor por fuera de una funcion. 

const obtenerCliente = () => {
    const nombre = 'delfi';

    function muestraNombre(){
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();