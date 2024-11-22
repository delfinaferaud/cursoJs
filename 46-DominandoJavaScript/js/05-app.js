// explicit binding. se utiliza en call, apply y en bind

function persona(el1, el2){
    console.log(`mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: 'delfi'
}

const musica = ['rock', 'pop'];

persona.call(informacion, musica[0], musica[1]);

persona.apply(informacion, musica);

const nueva = persona.bind(informacion, musica[0], musica[1]);