// hoisting: como funcionan los contextos de ejecucion. creacion y ejecucion

function obtenerCliente(nombre){
    console.log(`el nombre del cliente es ${nombre}`);
}

obtenerCliente('delfi');



const obtenerCliente2 = function(nombre){
    console.log(`el nombre del cliente es ${nombre}`);
    
}

obtenerCliente2('tomi');
