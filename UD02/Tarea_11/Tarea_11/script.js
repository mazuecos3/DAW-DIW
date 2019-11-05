movimiento();

function movimiento() { document.querySelector("button").addEventListener("click", buscar); }

function buscar() { let caja = document.querySelectorAll(".caja");
    caja.forEach(i => i.classList.add("movimiento"));
    console.log(caja); }