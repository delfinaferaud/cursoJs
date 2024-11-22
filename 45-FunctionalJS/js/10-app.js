// composition: alternativa a las clases. escribir muchas funciones y utilizar en los objetos lo q crea q vaya a necesitar


const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`)
    }
})

const guardarMail = info => ({
    agregarMail(email){
        console.log(`Guardando mail en: ${info.nombre}`);
        info.email = email;
    }
})


const obtenerMail = info => ({
    mostrarEmail(){
        console.log(`correo: ${info.email}`)
    }
})

function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarMail(info),
        obtenerMail(info)
    )

}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarMail(info),
        obtenerMail(info)

    )
}

const cliente = Cliente('Delfi', null, 'accenture');
cliente.mostrarNombre();
cliente.agregarMail('ajsfsdjdf');
cliente.mostrarEmail();


const empleado = Empleado('tomi', null, 'novio');
empleado.mostrarNombre(); 