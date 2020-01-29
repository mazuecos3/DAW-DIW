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

    rectangulos(dioses);
    lineas(dioses);
    tarta(dioses);

}

//grafico rectangular
function rectangulos(dioses) {
    console.log("Creando grafico rayas")
    const canvas = document.getElementById("canvas1");
    let ctx = canvas.getContext("2d");

    let ancho = canvas.width;
    let alto = canvas.height;

    const poderTotal = sumaPoderes(dioses);
    //tamaño de cada barra (anchura)
    let partes = ancho / dioses.length;

    ctx.clearRect(0, 0, ancho, alto);
    ctx.fillStyle = "black";
    ctx.font = "30px Verdana";
    ctx.fillText("Grafico Rectangular", 100, 80);

    for (let i = 0; i < dioses.length; i++) {

        ctx.fillStyle = dioses[i].color;
        let altura = Math.round(ancho * dioses[i].poder / (poderTotal))
        ctx.fillRect(partes * i, alto - altura, partes, altura);
        ctx.fillStyle = "black";
        ctx.fillText(dioses[i].nombre, partes * i, alto);

    }

}

//grafico lineal
function lineas(dioses) {

    console.log("Creando grafico lineas")
    const canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
    const poderTotal = sumaPoderes(dioses);

    let ancho = canvas.width;
    let alto = canvas.height;

    let partes = ancho / dioses.length;
    let cadaAltura = alto / poderTotal;

    //la posicion de la primera linea
    let X = 0;
    let Y = alto - dioses[0].poder * cadaAltura;

    ctx.clearRect(0, 0, ancho, alto);
    ctx.font = "30px Verdana";
    ctx.fillText("Grafico Linear", 100, 80);
    ctx.lineWidth = 5;
    for (let i = 0; i < dioses.length; i++) {

        ctx.strokeStyle = dioses[i].color;
        let result = alto - cadaAltura * dioses[i].poder;

        ctx.beginPath();
        ctx.moveTo(X, Y);
        ctx.lineTo(X + partes, result);
        ctx.stroke();

        X += partes;
        Y = result;

        ctx.fillStyle = "black";
        ctx.fillText(dioses[i].nombre, partes * i, alto);
    }

}


//grafico de la tarta Dificultad maxima
function tarta(dioses) {

    console.info(" * Construyendo grafico tarta ");
    const canvas = document.getElementById("canvas3");
    let ctx = canvas.getContext("2d");

    let ancho = canvas.width;
    let alto = canvas.height;
    let partes = ancho / dioses.length;
    let inicioAngulo = -Math.PI / 2;
    let finAngulo = 0;
    ctx.clearRect(0, 0, ancho, alto);
    ctx.fillStyle = "black";
    ctx.font = "30px Verdana";
    ctx.fillText("Grafico Tarta", 100, 80);

    for (let i = 0; i < dioses.length; i++) {

        ctx.strokeStyle = dioses[i].color;
        ctx.fillStyle = dioses[i].color;
        ctx.beginPath();
        ctx.moveTo(200, 200);
        finAngulo = inicioAngulo + (parseInt(dioses[i].poder) / sumaPoderes(dioses)) * 2 * Math.PI;
        console.log(dioses[i].poder);
        ctx.arc(200, 200, 100, inicioAngulo, finAngulo);
        ctx.moveTo(200, 200);
        ctx.fill();

        inicioAngulo = finAngulo;
        ctx.fillStyle = dioses[i].color;
        ctx.fillText(dioses[i].nombre, partes * i, alto);
    }

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