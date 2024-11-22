const reproductor = {
    reproducir: function(id){
        console.log("Reproduciendo canción con el id: " + id)   
    },
    pausar: function(){
        console.log("pausando..")
    },
    borrar: function(id){
        console.log("Borrando " +id)
    },
    crearPlaylist: function(nombre){
        console.log("Creando la playlist "+ nombre)
    },
    reproducirPlaylist: function(nombre){
        console.log("reproduciendo " + nombre)
    }

}


reproductor.reproducir(4567);
reproductor.reproducir(345);
reproductor.pausar();
reproductor.borrar(345);
reproductor.crearPlaylist("chill");
reproductor.reproducirPlaylist("chill");