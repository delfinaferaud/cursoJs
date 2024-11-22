const reproductor = {
    reproducir: id => console.log("Reproduciendo canción con el id: " + id),
    pausar: () => console.log("pausando.."),
    borrar: id => console.log("Borrando " +id),
    crearPlaylist: nombre => console.log("Creando la playlist "+ nombre),
    reproducirPlaylist: nombre => console.log("reproduciendo " + nombre)
}

reproductor.reproducir(4567);
reproductor.reproducir(345);
reproductor.pausar();
reproductor.borrar(345);
reproductor.crearPlaylist("chill");
reproductor.reproducirPlaylist("chill");