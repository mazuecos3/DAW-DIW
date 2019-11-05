window.onload = init;

function init() {
    movimiento();
}
/* 
 
    ^(;,;)^ : Fragmento perdido

*/



function movimiento() { document.querySelector("button").addEventListener("click", createDiv); }

function createDiv() {

    let newDiv = document.createElement("div");
    let clase = newDiv.classList.add("box");

    console.log(newDiv);


}