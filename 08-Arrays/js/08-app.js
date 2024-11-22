const producto = {
    nombre: "monitor 32",
    precio: 400, 
    disponible: true
}

const {nombre} = producto;
console.log(nombre);

//destructuring en arrays

const numeros = [10, 20, 30, 40, 50];

const [, , tercero] = numeros;

console.log(tercero);