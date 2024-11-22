function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('juan', 500);

function formatearCliente(cliente){
    const {nombre, saldo} = cliente
    return `El cliente ${nombre} tiene un saldo de ${saldo}` 
}

function formatearEmpresa(cliente){
    const {nombre, saldo, categoria} = cliente
    return `El cliente ${nombre} tiene un saldo de ${saldo} en una categoria de ${categoria}` 
}

console.log(formatearCliente(juan));

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con juan', 4000, 'cursos en linea');
console.log(formatearEmpresa(CCJ))