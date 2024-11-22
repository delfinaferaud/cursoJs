// funciones q retornan funciones 

const obtenerCliente = () => () => console.log('delfiii');

const fn = obtenerCliente(); 

fn()