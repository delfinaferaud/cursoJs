const carrito = [];

// definir un producto
const producto = {
    nombre: "monitor 32",
    precio: 400
}

const producto2 = {
    nombre: "celular",
    precio: 500
}

const producto3 = {
    nombre: "teclado",
    precio: "50"
}

let resultado;

resultado = [...carrito, producto]


console.table(resultado);
