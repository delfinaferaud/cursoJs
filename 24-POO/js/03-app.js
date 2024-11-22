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

// Herencia
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono
        this.categoria = categoria
    }

    static bienvenida(){
        return `bienvenido al cajero de empresas`;
    }
}

const delfi = new Cliente('Delfi', 500);
const empresa = new Empresa('Codigo con juan', 500, 1234567, 'aprendiendo')
console.log(empresa)
console.log(empresa.mostrarInformacion())

console.log(Cliente.bienvenida())
console.log(Empresa.bienvenida())