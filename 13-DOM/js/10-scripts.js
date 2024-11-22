
const enlace = document.createElement('A')

//agregando texto
enlace.textContent = 'Nuevo Enlace'

//añadiendo href
enlace.href= '/nuevo-enlace'

enlace.target = "_blank"

console.log(enlace)

enlace.setAttribute('data-enlace', 'nuevo-enlace')

//seleccionar la navegacion
const navegacion = document.querySelector('.navegacion')
console.log(navegacion.children)
navegacion.insertBefore(enlace, navegacion.children[1]);

//crear un card
const parrafo1 = document.createElement('P')
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('P')
parrafo2.textContent = 'Concierto de rock'
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('P')
parrafo3.textContent = '$80000'
parrafo3.classList.add('precio')

//crear div con la clase de info
const info= document.createElement('div')
info.classList.add('info')
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

//crear la imagen
const imagen = document.createElement('img')
imagen.src = 'img/hacer2.jpg'

//crear el card
const card = document.createElement('div')
card.classList.add('card')

//asignar la imagen
card.appendChild(imagen)

//asignar info
card.appendChild(info);


//insertar en html
const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.appendChild(card)
