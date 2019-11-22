/*

This Script is licensed under GPL v3 or higher

Author: Oscar Maxzuecos

*/


function startMigration() {
    ocultar();
    //creamos contenedor de todos lo que contiene steps
    let steps = document.querySelectorAll('steps');
    //Nos quedamos con los hijos de el contenedor steps
    steps = document.querySelector('steps').children;
    let label;
    let barraProgreso;
    let mensajeFinal;

    // lo dividimos de tres en tres para poder hacerlo de forma dinámica siempre
    // el primero para label, segundo barraProgreso y el ultimo barra final, así sucesivamente con todos los que hayan.
    for (let i = 0; i < steps.length; i += 3) {

        
        label = steps[i];//.classList.add("steplabel1")
        barraProgreso = steps[i + 1];
        mensajeFinal = steps[i + 2];
       /* console.log(label);
        console.log(barraProgreso);
        console.log(mensajeFinal);
        */

    }
    

}

function ocultar() {
    let steps;
    steps = document.querySelector('steps').children;     
    for (let i = 0; i < steps.length; i++) {
      
        //console.log(steps[i]);
        steps[i].style.visibility = "visible";
    }
}

function efectoLabel() {
    
}

function init() {
    console.info(" * Init envirnoment ");

    // Set click function on button
    document.querySelector("button").addEventListener("click",  startMigration);
   
}

// Init the environment when all is ready
window.onload = init;