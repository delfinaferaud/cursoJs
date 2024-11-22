function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function(){
    let tipo;
    
    if(this.saldo > 10000){
        tipo = 'gold'
    }else if(this.saldo >5000){
        tipo = 'platinum'
    }else {
        tipo = 'normal'
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, saldo: ${this.saldo},
    tipo cliente: ${this.tipoCliente()}`
}


Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}

function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono;
}

Persona.prototype = Object.create( Cliente.prototype );

Persona.prototype.constructor = Cliente;

// Instanciarlo
const delfi= new Persona('Delfi', 2000, 1234567);
console.log(delfi);
console.log(delfi.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es ${this.telefono}`
}

console.log(delfi.mostrarTelefono())