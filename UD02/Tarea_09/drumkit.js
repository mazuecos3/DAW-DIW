function ejecutarSonido(e) {
    
    //REVISAR COMILLAS EJECUCION
let sonido = document.querySelector(`sonido[data-key="${e.keyCode}"]`);
}


function eliminarTransicion(e) {
    e.target.classList.remove("");
}

const tecla= document.querySelector('.keys');
tecla.forEach(i => { i.addEventListener('transitionend', eliminarTransicion);
    
});




