const sym = Symbol()
const sym2 = Symbol()

// ningun symbol es igual

if(sym === sym2){
    console.log('son iguales')
}else{
    console.log('son diferentes')
}

const nombre = Symbol()
const apellido = Symbol()

const persona ={}

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Delfina'
persona[apellido] = 'Feraud'
persona.tipoCliente = 'Premium'
persona.saldo = 500

console.log(persona)
console.log(persona[nombre])

// Las propiedades que utilizan un symbol no son iterables
for(let i in persona){
    console.log(i)
}

// Definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del cliente')
const cliente = {}

cliente[nombreCliente] = 'Pedro'

console.log(cliente[nombreCliente])