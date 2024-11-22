// Maps son listas ordenadas con llave y valor
const cliente = new Map()

cliente.set('nombre', 'delfina')
cliente.set('tipo', 'premium')
cliente.set('saldo', '3000')


console.log(cliente.size)
console.log(cliente.has('nombre'))

console.log(cliente.get('nombre'))

cliente.delete('saldo')
console.log(cliente.has('saldo'))

console.log(cliente.get('saldo'))

cliente.clear()
console.log(cliente)

const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']])

paciente.set('dr', 'dr asignado')
console.log(paciente)

paciente.forEach(datos => {
    console.log(datos)
})