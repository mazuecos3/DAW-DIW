/*

This Script is licensed under GPL v3 or higher

Author: Oscar Maxzuecos

*/
let contadorLabels = 0;
let steps;

//funcion comenzarMigración que asignara quitara el evento click 
//para que no puedas darle otra vez y evitarte bugs y luego nos guardaremos todos los hijos
// de steps en una variable y llamamos a la funcion primerLabel
function startMigration() {

    document.querySelector("button").removeEventListener("click", startMigration);
    //creamos contenedor de todos lo que contiene steps
    //Nos quedamos con los hijos de el contenedor steps
    steps = document.querySelector('steps').children;
    primeraLabel();
}
//mientras sea menor de el tamaño de los hijos (18)
//añadimos la clase estabaEscondidio para hacerlo visible y cuando acabe 
//la transicion pasamos a la siguiente funcion y aumentamos contador para que pase al siguiente item hijo.
function primeraLabel() {
    if (contadorLabels < steps.length) {
        steps[contadorLabels].classList.add("estabaEscondido");
        steps[contadorLabels].addEventListener("transitionend", progressBarra);
        contadorLabels++;
    }
}
//añadimos la clase estabaEscondidio para hacerlo visible y la clase para la barra(donde haremos la trnasicion)
// y cuando acabe la transicion pasamos a la siguiente funcion y
// aumentamos contador para que pase al siguiente item hijo.
function progressBarra() {
    steps[contadorLabels].classList.add("estabaEscondido");
    steps[contadorLabels].classList.add("progressBuena");
    steps[contadorLabels].addEventListener("transitionend", mensajeFinal);

    contadorLabels++;
}
//añadimos la calse para que sea visible y luego la clase neon también 
//para añadir la transicion que tiene que hacer el mensaje final
//no ponemos transitionend en este porque peta bastante preguntar duda en clase
function mensajeFinal() {
    steps[contadorLabels].classList.add("estabaEscondido");
    steps[contadorLabels].classList.add("neon");
    contadorLabels++;
    primeraLabel();


}

function init() {
    console.info(" * Init envirnoment ");
    // Set click function on button
    document.querySelector("button").addEventListener("click", startMigration);
}
// Init the environment when all is ready
window.onload = init;