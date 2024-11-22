// const meses = ["Enero", "Febrero", "Marzo"];

// //agregar al final del arreglo
// meses.push("Abril");

// console.table(meses);

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

carrito.push(producto, producto2);

const producto3 = {
    nombre: "teclado",
    precio: "50"
}

carrito.unshift(producto3);

console.table(carrito);
