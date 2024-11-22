// for(let i = 0; i <= 10; i++){
//     if(i === 5){
//         console.log("cinco");
//         break;
        
//     }
//     console.log(`Numero: ${i}`)
// }


const carrito = [
    {nombre: "monitor 27 pulgadas", precio: 500},
    {nombre: "tele", precio: 100},
    {nombre: "tablet", precio: 200},
    {nombre: "auriculares", precio: 300, descuento: true},
    {nombre: "teclado", precio: 400},
    {nombre: "celular", precio: 700},
]

for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`el articulo ${carrito[i].nombre} tiene descuento`)
        continue;
    }
    console.log(carrito[i].nombre)
}