/*

This Script is licensed under GPL v3 or higher

Author: Oscar Maxzuecos

*/

let steps;

function startMigration() {

    document.querySelector("button").removeEventListener("click", startMigration);
    //creamos contenedor de todos lo que contiene steps
    //Nos quedamos con los hijos de el contenedor steps
    steps = document.querySelector('steps').children;

    for (let i = 0; i < steps.length; i++) {

        steps[i].classList.add("estabaEscondido");
        steps[i].addEventListener("transitionend", finalizar);

        //el tagname Funciona con Mayusculas, coge el nombre de la etiqueta
        if (steps[i].tagName == "STEPLABEL") {
            //console.log(steps[i]);
            steps[i].classList.add("stepLabel");
        }
        if (steps[i].tagName == "PROGRESS") {
            console.log(steps[i]);
            steps[i].classList.add("progressBuena");
        }
        if (steps[i].tagName == "FINALMSG") {
            // console.log(steps[i]);
            steps[i].classList.add("finalmsg");
        }
    }
}

function finalizar() {

    console.log("perro");

}


function init() {
    console.info(" * Init envirnoment ");
    // Set click function on button


    document.querySelector("button").addEventListener("click", startMigration);
}
// Init the environment when all is ready
window.onload = init;