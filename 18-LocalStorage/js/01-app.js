localStorage.setItem('nombre', 1);


const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'febrero']
const mesesString = JSON.stringify(meses)
localStorage.setItem('meses', mesesString)