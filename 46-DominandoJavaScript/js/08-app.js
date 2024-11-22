// self: ventana global. es lo mismo que windows

self.onload = () => {
    console.log('ventana lista');
}

const producto = {
    nombre: 'compu',
    precio: 30,
    disponible: true,
    mostrarInfo: function(){
        const self = this;
        return `${self.nombre} sale ${self.precio}`
    }
}

console.log(producto.mostrarInfo());