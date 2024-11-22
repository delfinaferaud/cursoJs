// WeakSet

const weakSet = new WeakSet()

// Solo se pueden agregar objetos
// No se puede usar size ni forEach

const cliente = {
    nombre: 'delfi',
    saldo: 100
}

weakSet.add(cliente)


// console.log(weakSet.has(cliente))

weakSet.delete(cliente)
console.log(weakSet)