const carrito = [
    {nombre: "monitor 27 pulgadas", precio: 500},
    {nombre: "tele", precio: 100},
    {nombre: "tablet", precio: 200},
    {nombre: "auriculares", precio: 300},
    {nombre: "teclado", precio: 400},
    {nombre: "celular", precio: 700},
]

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
})

carrito.map(function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
})

//map crea un nuevo arreglo