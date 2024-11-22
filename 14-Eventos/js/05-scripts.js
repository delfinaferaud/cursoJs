window.addEventListener('scroll', () => {
    

    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 784){
        console.log("el elemento es visible")
    }else {
        console.log("todavia no ")
    }
})