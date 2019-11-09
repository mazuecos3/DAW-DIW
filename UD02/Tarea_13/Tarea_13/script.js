window.onload = init;

let movimientoRotar = false;
let movimientoRebotar = false;
let movimientoParar = false;
/*Keyframe rotar que gire desde 0 a 360 grados*/
function init() {
    movimiento();
    eventoRebotar();
    eventoRotar();
    pararTransicion();
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

    if (this.classList.value.includes("ultimate") && movimientoRotar) {
        this.addEventListener("click", rotar);
    }
    if (this.classList.value.includes("ultimate") && movimientoRebotar) {
        this.addEventListener("click", rebotar);
    }
    //PARAR TRANSICION
    if (movimientoParar && this.classList.value.includes("rotar")) {
        this.classList.remove("rotar");
        movimientoParar = false;
    }
    if (movimientoParar && this.classList.value.includes("rebotar")) {
        this.classList.remove("rebotar");
        movimientoParar = false;
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
//Añadir evento click y funcion pararTransicion
function pararTransicion() {
    document.getElementById("tres").addEventListener("click", comprobarTransicion);
}

function comprobarTransicion() {
    console.log(movimientoParar);
    movimientoParar = true;
    console.log(movimientoParar);
}