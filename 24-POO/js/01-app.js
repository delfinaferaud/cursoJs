class Cliente { 
    constructor(nombre, saldo){
        this.nombre = nombre
        this.saldo = saldo
    }

    mostrarInformacion(){
        return `cliente: ${this.nombre} saldo: ${this.saldo}`
    }

    static bienvenida(){
        return `bienvenido al cajero`;
    }

}

const delfi = new Cliente('Delfi', 500);
console.log(delfi.mostrarInformacion())
console.log(delfi)

console.log(Cliente.bienvenida())

const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre
        this.saldo = saldo
    }
}

const delfi2 = new Cliente2('Delfi', 500)
console.log(delfi2)