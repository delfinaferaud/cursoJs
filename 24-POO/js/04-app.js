class Cliente { 

    #nombre;

    constructor(nombre, saldo){
        this.#nombre = nombre
        this.saldo = saldo
    }

    mostrarInformacion(){
        return `cliente: ${this.nombre} saldo: ${this.saldo}`
    }

    static bienvenida(){
        return `bienvenido al cajero`;
    }

}

const delfi = new Cliente('delfi', 1234)
console.log(delfi.mostrarInformacion())
console.log(delfi.nombre)
