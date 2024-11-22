// first-class functions: asignar una funcion como si fuera un valor 

const suma = function(a,b){
    return a+b;
}

const resultado = suma;

console.log(resultado(10,20));
