// pure functions, funciones puras: son funciones q retornan un dato pero no modifican los valores de las variables. debe retornar la misma cantidad de parametros q recibe. el resultado debe ser una nueva variable con el nuevo valor


const numero1 = 20;
const duplicar = numero => numero * 2;


const resultado = duplicar(numero1);

console.log(resultado);
console.log(numero1);