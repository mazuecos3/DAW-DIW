window.onload = init;

let movimientoRotar = false;
let movimientoRebotar = false;
/*Keyframe rotar que gire desde 0 a 360 grados*/
function init() {
    movimiento();
    eventoRebotar();
    eventoRotar();
}

function movimiento() { document.querySelector("button").addEventListener("click", createDiv); }

//creamos elementos tipo box y de un tamaño de no más de 20 
// Se le añade el evento click que hace evolucionar.
function createDiv() {

    let newDiv = document.createElement("box");
    let contadorDiv = document.querySelectorAll("box").length;

    //MAXIMO DIVS TIPO BOX
    if (contadorDiv < 20) {
        document.querySelector("container").appendChild(newDiv);
        newDiv.addEventListener("click", evolucion1);
    }

}
//Añade la clase evolucionada y también añade evento clickar para que quite la evolución.
function evolucion1() {

    this.classList.add("evoluciona");
    this.addEventListener("click", desvoluciona);
    //console.log("Evolucion1");
}
//Añade la clase desevolución(Quita efectos) y el evento click que llama a la evolucion2 
function desvoluciona() {

    this.classList.replace("evoluciona", "desevoluciona");
    this.addEventListener("click", evolucion2);
    //console.log("desevolucion");
}
//Convierte a chulu ultimate!!!!!!!!! 
function evolucion2() {
    if (this.classList.value.includes("desevoluciona")) {
        this.classList.replace("desevoluciona", "ultimate");
    }

    //console.log("Ultimate");
    if (this.classList.value.includes("ultimate") && movimientoRotar) {
        this.addEventListener("click", rotar);
    }
    if (this.classList.value.includes("ultimate") && movimientoRebotar) {
        this.addEventListener("click", rebotar);
    }

}

//Añadir evento click y funcion rotar 
function eventoRotar() {
    document.getElementById("uno").addEventListener("click", comprobarRotar);
}

function comprobarRotar() {
    //console.log(movimientoRotar);
    movimientoRotar = true;
    //console.log(movimientoRotar);
}

//Añadimos la clase rebotar y volvemos a poner la comprobación a false para que 
//no ocurra mas veces y tengas que clickar otra vez para cada evento 
function rotar() {
    if (movimientoRotar && !this.classList.value.includes("rebotar")) {
        this.classList.add("rotar");
        movimientoRotar = false;
    }
}

//Añadir evento click y funcion rebotar 
function eventoRebotar() {
    document.getElementById("dos").addEventListener("click", comprobarRebotar);
}

//Igualar a true para hacer la comprobación
function comprobarRebotar() {
    movimientoRebotar = true;
    //console.log(movimientoRotar);
}

//Añadimos la clase rebotar y volvemos a poner la comprobación a false para que 
//no ocurra mas veces y tengas que clickar otra vez para cada evento 
function rebotar() {
    if (movimientoRebotar && !this.classList.value.includes("rotar")) {
        this.classList.add("rebotar");
        movimientoRebotar = false;
    }

}