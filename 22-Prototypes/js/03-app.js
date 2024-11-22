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

// Instanciarlo
const delfi = new Cliente('Delfi', 8000);
console.log(delfi.tipoCliente());
console.log(delfi.nombreClienteSaldo());
delfi.retiraSaldo(1000)
console.log(delfi.nombreClienteSaldo)
console.log(delfi);

