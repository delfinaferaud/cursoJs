const pendientes = ["tarea", "comer", "proyecto", "estudiar"];


const carrito = [
    {nombre: "monitor 27 pulgadas", precio: 500},
    {nombre: "tele", precio: 100},
    {nombre: "tablet", precio: 200},
    {nombre: "auriculares", precio: 300},
    {nombre: "teclado", precio: 400},
    {nombre: "celular", precio: 700},
]

for(let pendiente of pendientes){
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto.nombre)
}