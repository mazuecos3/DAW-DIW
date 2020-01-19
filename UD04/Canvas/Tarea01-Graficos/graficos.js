//datos añadidos como json  (array clave - valor)
function main() {

    let nombre = document.querySelectorAll("input[class='left']");
    let poder = document.querySelectorAll("input[class='right']");
    let dioses = [];
    let color = ["green", "red", "orange", "purple"]
    for (let i = 0; i < nombre.length; i++) {

        dioses.push({
            "nombre": nombre[i].value,
            "poder": parseInt(poder[i].value),
            "color": color[i]
        });


    }

    graficoRayas(dioses);
    tarta(dioses);
    lineas(dioses);


}

//grafico rectangular
function graficoRayas(dioses) {
    console.log("Creando grafico rayas")
    const canvas = document.getElementById("canvas1");
    let ctx = canvas.getContext("2d");

    let width = canvas.width;
    let height = canvas.height;

    const poderTotal = sumaPoderes(dioses);
    const barra = canvas.width / dioses.length;


    for (let i = 0; i < dioses.length; i++) {
        const dios = dioses[i];
        ctx.fillStyle = dios.color;
        let altura = Math.round(width * dios.poder / (poderTotal + 20))
        ctx.fillRect(barra * i, height - altura, barra, altura);

    }

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

function sumaPoderes(dioses) {
    let poderio = 0;

    for (let i = 0; i < dioses.length; i++) {
        const dios = dioses[i];
        poderio += dios.poder;
    }
    console.log(poderio);
    return poderio;
}

function init() {

    document.querySelector("input[name='grafiqueame']").addEventListener("click", main);

}


window.onload = init;