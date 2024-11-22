// for(let i = 0; i <= 10; i++){
//     console.log(`Numero: ${i}`)
// }

// for(let i = 0; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(`el numero ${i} es par`)
//     }else{
//         console.log(`el numero ${i} es impar`)
//     }
// }

const carrito = [
    {nombre: "monitor 27 pulgadas", precio: 500},
    {nombre: "tele", precio: 100},
    {nombre: "tablet", precio: 200},
    {nombre: "auriculares", precio: 300},
    {nombre: "teclado", precio: 400},
    {nombre: "celular", precio: 700},
]

console.log(carrito.length);

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}

