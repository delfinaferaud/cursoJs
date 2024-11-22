// Lista que no tiene valores repetidos

const carrito = new Set()

carrito.add('Camisa')
carrito.add('Disco')

console.log(carrito.has('Camisa'))

console.log(carrito.size)

carrito.delete('Disco')

carrito.clear()

console.log(carrito)

// Del siguiente arreglo, eliminar los duplicados
const numeros = [10,20,30,40,50,10,20]

const noDuplicados = new Set(numeros)

console.log(noDuplicados)