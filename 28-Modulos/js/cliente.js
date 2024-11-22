export const nombreCliente = 'Delfi'
export const ahorro = 200

export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`
}

export class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre
        this.ahorro = ahorro
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`
    }
}

export default function nuevaFuncion(){
    console.log('este es el export default')
}