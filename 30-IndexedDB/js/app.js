
let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB()

    setTimeout(() => {
        crearCliente()
    }, 5000);
})

function crmDB(){
    // cREAR BASE DE DATOS VERSION 1.0
    let crmDB = window.indexedDB.open('crm', 1)

    // si hay un error
    crmDB.onerror = function(){
        console.log('hubo un error a la hora de crear la db')
    }


    // si se creo bien
    crmDB.onsuccess = function(){
        console.log('base de datos creada')
        
        DB = crmDB.result
    }


    // configuracion de la base
    crmDB.onupgradeneeded = function(e) {
        const db = e.target.result

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        })

        // Definir las columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false })
        objectStore.createIndex('email', 'email', { unique: true })
        objectStore.createIndex('tekefono', 'telefono', { unique: false })


        console.log('columnas creadas')
    }
}

function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite')

    transaction.oncomplete = function(){
        console.log('transaccion completada')
    }

    transaction.onerror = function(){
        console.log('hubo un error en la transaccion')
    }

    const objectStore = transaction.objectStore('crm')

    const nuevoCliente = {
        telefono: 123456764,
        nombre: ' delfi',
        email: 'delfi@gmail.com'

    }

    const peticion = objectStore.add(nuevoCliente)
    console.log(peticion)
}