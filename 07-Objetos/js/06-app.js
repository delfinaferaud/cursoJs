const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1m"
        },
        fabricacion: {
            pais: "china"
        }
    }
}

const { nombre, informacion: {fabricacion} } = producto;

console.log(nombre);
console.log(fabricacion);