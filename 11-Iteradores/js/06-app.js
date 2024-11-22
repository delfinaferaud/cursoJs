//forEach

const pendientes = ["tarea", "comer", "proyecto", "estudiar"];

pendientes.forEach( (pendiente, i) => {
    console.log(`${i}: pendiente`)
})

const carrito = [
    {nombre: "monitor 27 pulgadas", precio: 500},
    {nombre: "tele", precio: 100},
    {nombre: "tablet", precio: 200},
    {nombre: "auriculares", precio: 300},
    {nombre: "teclado", precio: 400},
    {nombre: "celular", precio: 700},
]

const nuevoArreglo = carrito.forEach(producto=> producto.nombre)

    
const nuevoArreglo2 = carrito.map(producto => producto.nombre);
console.log(nuevoArreglo)
console.log(nuevoArreglo2)