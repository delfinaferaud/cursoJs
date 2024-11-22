const carrito = [
    {nombre: "monitor 27 pulgadas", precio: 500},
    {nombre: "tele", precio: 100},
    {nombre: "tablet", precio: 200},
    {nombre: "auriculares", precio: 300},
    {nombre: "teclado", precio: 400},
    {nombre: "celular", precio: 700},
]

const nuevoArray = carrito.forEach (producto => `${producto.nombre} - precio: ${producto.precio}`)

carrito.map(producto => console.log(`${producto.nombre} - precio: ${producto.precio}`))

console.log(nuevoArray);
