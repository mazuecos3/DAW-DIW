window.onload = init;

function init() {
    movimiento();
}
/* 
 
    ^(;,;)^ : Fragmento perdido

*/

function movimiento() { document.querySelector("button").addEventListener("click", createDiv); }

//creamos elementos tipo box y de un tamaño de no más de 20 
// Se le añade el evento click que hace evolucionar.
function createDiv() {

    let newDiv = document.createElement("box");
    let contadorDiv = document.querySelectorAll("box").length;
     
    //MAXIMO DIVS TIPO BOX
    if (contadorDiv< 20) {
        document.querySelector("container").appendChild(newDiv);
        newDiv.addEventListener("click", evolucion1);
    }
    
}
//Añade la clase evolucionada y también añade evento clickar para que quite la evolución.
function evolucion1() {

    this.classList.add("evoluciona");
    this.addEventListener("click", desvoluciona);
    console.log("Evolucion1");
}
//Añade la clase desevolución(Quita efectos) y el evento click que llama a la evolucion2 
function desvoluciona() {

    this.classList.replace("evoluciona","desevoluciona");
    this.addEventListener("click", evolucion2);
    console.log("desevolucion");
}
//Convierte a chulu ultimate!!!!!!!!! 
function evolucion2() {
    this.classList.replace("desevoluciona","ultimate");
    console.log("Ultimate");
   
}