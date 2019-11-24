/*

This Script is licensed under GPL v3 or higher

Author: Oscar Maxzuecos

*/
let contadorLabels = 0;
let steps;

function startMigration() {

    document.querySelector("button").removeEventListener("click", startMigration);
    //creamos contenedor de todos lo que contiene steps
    //Nos quedamos con los hijos de el contenedor steps
    steps = document.querySelector('steps').children;
    primeraLabel();
}

function primeraLabel() {
    if (contadorLabels < steps.length) {
        steps[contadorLabels].classList.add("estabaEscondido");
        steps[contadorLabels].addEventListener("transitionend", progressBarra);
        contadorLabels++;
    }
}

function progressBarra() {
    steps[contadorLabels].classList.add("estabaEscondido");
    steps[contadorLabels].classList.add("progerssBuena");
    steps[contadorLabels].addEventListener("transitionend", mensajeFinal);
    console.log("perro");
    contadorLabels++;

}

function mensajeFinal() {
    steps[contadorLabels].classList.add("estabaEscondido");
    steps[contadorLabels].classList.add("finalmsg");
    steps[contadorLabels].addEventListener("transitionend", primeraLabel);
    contadorLabels++;
}

function init() {
    console.info(" * Init envirnoment ");
    // Set click function on button


    document.querySelector("button").addEventListener("click", startMigration);
}
// Init the environment when all is ready
window.onload = init;