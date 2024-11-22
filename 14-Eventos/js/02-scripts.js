const nav = document.querySelector('.navegacion')

// registrar un evento
nav.addEventListener('click', () => {
    console.log('click en nav')
})
nav.addEventListener('mouseenter', () => {
    console.log('entrando en navegacion')
})
nav.addEventListener('mouseout', () => {
    console.log('salir de nav')
})