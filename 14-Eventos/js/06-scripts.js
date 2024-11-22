// event bubbling

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {
    e.stopPropagation()
    console.log('click en card');
})

cardDiv.addEventListener('click', e => {
    e.stopPropagation()
    console.log('click en info');
})

cardDiv.addEventListener('click', e => {
    e.stopPropagation()
    console.log('click en titulo');
})