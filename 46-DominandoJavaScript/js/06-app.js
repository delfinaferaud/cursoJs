// new binding

function Auto(modelo, color){
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto('camaro', 'negro');

console.log(auto);


// window binding

window.color = 'negro';
function hola(){
    console.log(color);
}

hola();