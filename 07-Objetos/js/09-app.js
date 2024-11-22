"use strict"

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.seal( producto ); //se puede modificar pero no agregar ni eliminar

producto.disponible = false;
producto.imagen = "imagen.jpg";

console.log(producto);

console.log(Object.isSealed(producto));
