
 document.querySelector("button").addEventListener("click", buscar); 

function buscar() { let caja = document.querySelectorAll(".caja");
//Añadimos a cada caja la clase movimiento
    caja.forEach(i => i.classList.toggle("movimiento"));
    //console.log(caja); 
}