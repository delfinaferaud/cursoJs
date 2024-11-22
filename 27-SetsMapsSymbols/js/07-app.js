
function *crearGenerador(){
    yield 1
    yield 'delfi'
    yield 3*3
    yield true

}

const iterador = crearGenerador()

console.log(iterador)
console.log(iterador.next())
console.log(iterador)