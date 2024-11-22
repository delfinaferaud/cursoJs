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
const producto4 = {
    nombre: "mouse",
    precio: "250"
}

carrito.unshift(producto3, producto4);

console.table(carrito);

// //eliminar ultimo elemento

// carrito.pop();

// console.table(carrito);

// //eliminar del inicio
// carrito.shift();


// console.table(carrito);

carrito.splice(1, 1);
console.table(carrito);