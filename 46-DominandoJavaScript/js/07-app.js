// event loop y modelo de concurrencia. como se va ejecutando el codigo. js va fila por fila pero va priorizando. 1- console log, 2- functions, 3- promise, 4- settimeout

console.log('primero');

setTimeout(() => {
    console.log('segundo')
}, 0);

console.log('tercero')


setTimeout(() => {
    console.log('cuarto')
}, 0);


new Promise(function(resolve){
    resolve('desconocido..')
}).then(console.log)

console.log('ultimo');