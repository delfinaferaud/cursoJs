const busqueda = document.querySelector('.busqueda')

// busqueda.addEventListener('keydown', () => {
//     console.log("escribiendo..")
// })
// busqueda.addEventListener('keyup', () => {
//     console.log("escribiendo..")
// })
// busqueda.addEventListener('blur', () => {
//     console.log("afuera..")
// })
// busqueda.addEventListener('copy', () => {
//     console.log("copiando..")
// })
// busqueda.addEventListener('input', () => {
//     console.log("input..")
// })
busqueda.addEventListener('input', (e) => {
    console.log(e.target.value)
})
