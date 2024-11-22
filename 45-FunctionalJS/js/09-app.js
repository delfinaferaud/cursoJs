// partials y currying. 

/*
currying: dividir una funcion q toma mas de un parametro en argumentos de forma parcial.

*/

const suma = (a,b,c) => a + b + c;

const parcial = a => (b,c) => suma(a,b,c);

const primerNumero = parcial(5);
const resultado =  primerNumero(4,5);

console.log(resultado);

///

const parcial2 = a => b => c => suma(a,b,c);

// const primerNumero2 = parcial2(5);
// const segundoNumero = primerNumero2(4);
// const resultado2 = segundoNumero(5);
const resultadoParcial = parcial2(5)(4)(5);

console.log(resultadoParcial);
