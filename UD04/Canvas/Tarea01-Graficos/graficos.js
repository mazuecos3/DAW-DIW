let dioses = [];
let tipoGrafico;
let color = ["green", "red", "orange", "purple"]

//datos añadidos como json  (array clave - valor)
function main() {

    let nombre = document.querySelectorAll("input[class='left']");
    let poder = document.querySelectorAll("input[class='right']");

    for (let i = 0; i < nombre.length; i++) {

        dioses.push({
            "nombre": nombre[i].value,
            "poder": poder[i].value,
            "color": color[i]
        });

    }

    console.log(dioses);
    tarta(dioses);
    rectangulos(dioses);
    lineas(dioses);

}

//grafico rectangular
function rectangulos() {
    console.log(" * Construyendo grafico rectangular")
    const canvas = document.getElementById("canvas1");

    let ctx = canvas.getContext("2d");


}

//grafico lineal
function lineas() {
    console.log(" * Construyendo grafico lineal")
    const canvas = document.getElementById("canvas2");

    let ctx = canvas.getContext("2d");
}


//grafico de la tarta
function tarta() {
    console.info(" * Construyendo grafico tarta ");
    const canvas = document.getElementById("canvas3");
    let ctx = canvas.getContext("2d");
}

function init() {

    document.querySelector("input[name='grafiqueame']").addEventListener("click", main);

}


window.onload = init;