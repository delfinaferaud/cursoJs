// binding implicito. indica donde buscar el dato

const usuario = {
    nombre: 'delfi',
    edad: 26,
    informacion(){
        console.log(`soy ${this.nombre} tengo ${this.edad}`);
    }
}

usuario.informacion();
