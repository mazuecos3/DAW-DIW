window.onload = init;

function init() {
    movimiento();
}
/* 
 
    ^(;,;)^ : Fragmento perdido

*/

function movimiento() { document.querySelector("button").addEventListener("click", createDiv); }

function createDiv() {

    let newDiv = document.createElement("box");
    newDiv.classList.add("box");
    document.querySelector("container").appendChild(newDiv);
    newDiv.addEventListener("click", evolucion1);

}

function evolucion1() {

    this.classList.add("evoluciona");
    this.addEventListener("click", evolucion2);
}

function evolucion2() {

    this.classList.add("ultimate");
}