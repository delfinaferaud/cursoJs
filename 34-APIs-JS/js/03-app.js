window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);


function actualizarEstado(){
    if(navigator.onLine){
        console.log('Estás conectado')
    }else{
        console.log('No estás conectado')
    }
}

