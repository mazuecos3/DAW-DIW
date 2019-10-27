var bart_Y = 1;
var bart_X = 9;
var skinner_Y = 14;
var skinner_X = 5;
var skinner_Y2 = 6;
var skinner_X2 = 8;
var puntos = 0;
var pantallaVidas;
var pantallaPuntos;
var vidas = 5;

var moverMomia = true;
var matarMomia = false;

var intervalFuncion = setInterval(moverSkinner, 300);

var momias = new Array();



//MAPA NIVEL INCIAL 1
mapa = [
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 9],
    [9, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 9],
    [9, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 9],
    [9, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 9],
    [9, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 9],
    [9, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
];


window.onload = function() {
    listo();
};

function listo() {
    dibujarMapa();
    document.addEventListener("keydown", cogerTecla);

    //MOSTRAR PRIMERA VEZ VIDAS
    pantallaVidas = document.getElementById("pantallaVidas");
    pantallaVidas.value = parseInt(vidas);

}

function dibujarMapa() {

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 23; j++) {
            let newDiv = document.createElement("div");
            //asignamos atributos fila y columna para i y j
            newDiv.dataset.fila = i;
            newDiv.dataset.columna = j;

            if (mapa[i][j] == 0) {
                newDiv.classList.add("camino");
                mapa[i][j] = newDiv;

            } else if (mapa[i][j] == 1) {
                newDiv.classList.add("bloques");
                mapa[i][j] = newDiv;

            } else if (mapa[i][j] == 2) {
                newDiv.classList.add("personaje");
                mapa[i][j] = newDiv;
            } else if (mapa[i][j] == 3) {
                newDiv.classList.add("camino");
                newDiv.classList.add("momia");
                mapa[i][j] = newDiv;
            } else if (mapa[i][j] == 4) {
                newDiv.classList.add("huellas");
                mapa[i][j] = newDiv;
            } else if (mapa[i][j] == 9) {
                newDiv.classList.add("fondo");
                mapa[i][j] = newDiv;
            }

            document.querySelector(".mapa").appendChild(newDiv);
        }
    }
}

function cogerTecla(e) {

    var teclaPulsada = e.keyCode;
    switch (teclaPulsada) {
        //flecha izquierda
        case 37:
            moverPersonaje(bart_Y, bart_X - 1);
            break;

            //flecha arriba
        case 38:
            moverPersonaje(bart_Y - 1, bart_X);

            break;

            //flecha derecha   
        case 39:
            moverPersonaje(bart_Y, bart_X + 1);
            break;

            //flecha debajo    
        case 40:
            moverPersonaje(bart_Y + 1, bart_X);
            break;
    }

}
//Movimiento Personaje

function moverPersonaje(bart_Y1, bart_X1) {

    var aux = !mapa[bart_Y1][bart_X1].classList.value.includes("camino");
    var aux1 = !mapa[bart_Y1][bart_X1].classList.value.includes("huellas");
    var aux2 = mapa[bart_Y1][bart_X1].classList.value.includes("momia");
    console.log(matarMomia);
    console.log(mapa[bart_Y1][bart_X1]);
    // SI  NO ES CAMINO NI HUELLAS CHOCA
    if (aux && aux1) {
        console.log("Choque Columna");
        //SINO CAMBIA PEROSNAJE POR HUELLA PARA DEJAR EL RASTRO DE HUELLAS
    } else {

        mapa[bart_Y][bart_X].classList.replace("personaje", "huellas");
        //Incrementamos añadiendo las posiciones
        bart_Y = bart_Y1;
        bart_X = bart_X1;


        // MATAR MOMIA
        if (aux2 && matarMomia == true) {
            mapa[bart_Y][bart_X].classList.replace("personaje", "momia");
            mapa[skinner_Y][skinner_X].classList.remove("momia");
            skinner_Y = 0;
            skiner_X = 0;
            moverMomia = false;
            //QUITAMOS EL MOVIMIENTO DIRECTAMENTE
            clearInterval(intervalFuncion);
            console.log("Momia muerta");
        }
        //Al avanzar comprobar choqueMomia y restar vida
        comprobarVidas(bart_Y1, bart_X1, "momia");


        //SI CONTIENE HUELLAS CAMBIAMOS LA HUELLA POR EL PERSONAJE EN CASO DE VOLVER SOBRE LAS HUELLAS
        if (!aux1) {
            //  console.log("Huellas");
            mapa[bart_Y1][bart_X1].classList.replace("huellas", "personaje");

            //SINO ES CAMINO Y CAMBIAMOS EL CAMINO POR EL PERSONAJE PARA AVANZAR EL PERSONAJE
        } else {
            //  console.log("Camino")
            mapa[bart_Y1][bart_X1].classList.replace("camino", "personaje");
        }
    }
    comprobarBloques();

}

//MOVER SKINNER

function moverSkinner() {

    if (momia = true) {
        let movimientoRandom = Math.floor(Math.random() * 4);
        switch (movimientoRandom) {

            case 0:
                movimientoSkiner(skinner_Y, skinner_X - 1);

                break;

            case 1:
                movimientoSkiner(skinner_Y - 1, skinner_X);
                break;

            case 2:
                movimientoSkiner(skinner_Y, skinner_X + 1);
                break;

            case 3:
                movimientoSkiner(skinner_Y + 1, skinner_X);
                break;
        }
    }
}

function movimientoSkiner(skinner_Y1, skinner_X1) {
    var aux = !mapa[skinner_Y1][skinner_X1].classList.value.includes("camino");
    var aux1 = !mapa[skinner_Y1][skinner_X1].classList.value.includes("huellas");
    var aux2 = mapa[skinner_Y1][skinner_X1].classList.value.includes("personaje");

    if (moverMomia == true) {
        if (aux && aux1) {
            comprobarVidas(skinner_Y1, skinner_X1, "personaje");
            //SINO CAMBIA MOMIA POR CAMINO
        } else {
            mapa[skinner_Y][skinner_X].classList.remove("momia");
            skinner_Y = skinner_Y1;
            skinner_X = skinner_X1;
            mapa[skinner_Y][skinner_X].classList.add("momia");

            if (aux2) {
                mapa[skinner_Y][skinner_X].classList.remove("personaje");
                mapa[skinner_Y][skinner_X].classList.remove("personaje");
            }
        }

    }
    /* if (aux && aux1) {
        comprobarVidas(skinner_Y1, skinner_X1, "personaje");
        //SINO CAMBIA MOMIA POR CAMINO
    } else {

        mapa[skinner_Y][skinner_X].classList.remove("momia");
        skinner_Y2 = skinner_Y1;
        skinner_X2 = skinner_X1;
        mapa[skinner_Y][skinner_X].classList.add("momia");
    }
*/
}


//BLOQUES RODEADOS

function comprobarBloques() {

    let docBloques = document.getElementsByClassName("bloques");

    let dataFila;
    let dataColumna;

    for (let i = 0; i < docBloques.length; i++) {
        //asignamos atributos filas y columnas
        dataFila = parseInt(docBloques[i].getAttribute("data-fila"));
        dataColumna = parseInt(docBloques[i].getAttribute("data-columna"));
        //RANGO 

        if (dataFila < 14 && dataColumna < 21) {

            // si no contiene camino o momia a la derecha,arriba,debajo o izquierda 
            if (!mapa[dataFila - 1][dataColumna].classList.value.includes("camino", "momia") &&
                !mapa[dataFila + 1][dataColumna].classList.value.includes("camino", "momia") &&
                !mapa[dataFila][dataColumna + 1].classList.value.includes("camino", "momia") &&
                !mapa[dataFila][dataColumna - 1].classList.value.includes("camino", "momia")

            ) { //Añadimos divRodeado a cada bloque en caso de que tenga huellas o muros por los lados
                mapa[dataFila][dataColumna].classList.add("divRodeado");
            }
            //COGER LA ESUQINA IZQUIERDA CADA 6 BLOQUES
            if (parseInt(i / 15) % 2 == 0) {
                if (i % 3 == 0) {
                    // Si es el ultimo bloque desvela el autobus
                    if (docBloques[102].classList.value.includes("divRodeado") &&
                        docBloques[103].classList.value.includes("divRodeado") &&
                        docBloques[104].classList.value.includes("divRodeado") &&
                        docBloques[117].classList.value.includes("divRodeado") &&
                        docBloques[118].classList.value.includes("divRodeado") &&
                        docBloques[119].classList.value.includes("divRodeado")) {
                        //AÑADIMOS AUTOBUS 
                        docBloques[103].classList.replace("divRodeado", "autobus")

                    } // SI ES EL PRIMER BLOQUE DESVELAMOS BATIDO
                    if (docBloques[0].classList.value.includes("divRodeado") &&
                        docBloques[1].classList.value.includes("divRodeado") &&
                        docBloques[2].classList.value.includes("divRodeado") &&
                        docBloques[15].classList.value.includes("divRodeado") &&
                        docBloques[16].classList.value.includes("divRodeado") &&
                        docBloques[17].classList.value.includes("divRodeado")) {

                        //AÑADIMOS BATIDO
                        docBloques[1].classList.replace("divRodeado", "tirachinas");
                    } // Si rodeamos las posiciones seleccionadas debajo aparecera el tirachinas que es igual a la llave
                    if (docBloques[66].classList.value.includes("divRodeado") &&
                        docBloques[67].classList.value.includes("divRodeado") &&
                        docBloques[68].classList.value.includes("divRodeado") &&
                        docBloques[81].classList.value.includes("divRodeado") &&
                        docBloques[82].classList.value.includes("divRodeado") &&
                        docBloques[83].classList.value.includes("divRodeado")) {
                        //AÑADIMOS TIRACHINAS
                        docBloques[67].classList.replace("divRodeado", "batido");
                    }
                    if (docBloques[6].classList.value.includes("divRodeado") &&
                        docBloques[7].classList.value.includes("divRodeado") &&
                        docBloques[8].classList.value.includes("divRodeado") &&
                        docBloques[21].classList.value.includes("divRodeado") &&
                        docBloques[22].classList.value.includes("divRodeado") &&
                        docBloques[23].classList.value.includes("divRodeado")) {

                        //AÑADIMOS PUNTOS
                        docBloques[7].classList.replace("divRodeado", "puntos");

                    }
                    if (docBloques[42].classList.value.includes("divRodeado") &&
                        docBloques[43].classList.value.includes("divRodeado") &&
                        docBloques[44].classList.value.includes("divRodeado") &&
                        docBloques[57].classList.value.includes("divRodeado") &&
                        docBloques[58].classList.value.includes("divRodeado") &&
                        docBloques[59].classList.value.includes("divRodeado")) {

                        //AÑADIMOS PUNTOS
                        docBloques[43].classList.replace("divRodeado", "puntos");
                    }
                    if (docBloques[33].classList.value.includes("divRodeado") &&
                        docBloques[34].classList.value.includes("divRodeado") &&
                        docBloques[35].classList.value.includes("divRodeado") &&
                        docBloques[48].classList.value.includes("divRodeado") &&
                        docBloques[49].classList.value.includes("divRodeado") &&
                        docBloques[50].classList.value.includes("divRodeado")
                    ) { //si estan rodeados cambiamos ese divrodeado por otra clase para que cambie

                        docBloques[35].classList.replace("divRodeado", "momia");
                    }
                    // comprobamos si los 6 bloques de cada columna estan rodeados 
                    if (docBloques[i].classList.value.includes("divRodeado") &&
                        docBloques[i + 1].classList.value.includes("divRodeado") &&
                        docBloques[i + 2].classList.value.includes("divRodeado") &&
                        docBloques[i + 15].classList.value.includes("divRodeado") &&
                        docBloques[i + 16].classList.value.includes("divRodeado") &&
                        docBloques[i + 17].classList.value.includes("divRodeado")
                    ) { //si estan rodeados cambiamos ese divrodeado por otra clase para que cambie

                        docBloques[i + 1].classList.replace("divRodeado", "nelson");
                    }

                }
            }
        }
    }

    if (docBloques[1].classList.value.includes("tirachinas")) {
        console.log("MATAR MOMIA ON");
        matarMomia = true;
    }
    if (docBloques[35].classList.value.includes("momia")) {
        console.log("Segunda momia ON");

    }

    // SUMAMOS PUNTOS AL DESBLOQUEAR LOS BLOQUES QUE CONTIENEN EL DINERO
    if (docBloques[7].classList.value.includes("puntos") || docBloques[43].classList.value.includes("puntos")) {
        puntos = 1000;
        pantallaPuntos = document.getElementById("pantallaPuntos");
        pantallaPuntos.value = puntos;
    }
    if (docBloques[7].classList.value.includes("puntos") && docBloques[43].classList.value.includes("puntos")) {
        puntos = 2000;
        pantallaPuntos = document.getElementById("pantallaPuntos");
        pantallaPuntos.value = puntos;
    }
    //ABRIR PUERTA PARA PASAR DE NIVEL AL CONSEGUIR TANTO EL TIRACHINAS COMO EL AUTOBUS
    if (docBloques[103].classList.value.includes("autobus") && docBloques[67].classList.value.includes("batido")) {
        mapa[1][9].classList.add("salida");
        //PASAR POR LA PUERTA AL SIGUENTE NIVEL QUE SALGA UNA ALERTA
        if (mapa[1][9].classList.value.includes("personaje")) {
            alert("VICTORIA!!! PASAS AL SIGUIENTE NIVEL");

            // RESETEAR MAPA 
            let myNode = document.getElementById("mapa");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
            dibujarMapa();
        }
    }
}

function comprobarVidas(posicionY, posicionX, personaje) {

    var aux1 = mapa[posicionY][posicionX].classList.value.includes(personaje);

    if (aux1 && vidas > 0) {
        vidas--;
        pantallaVidas.value = parseInt(vidas);

    } else if (vidas == 0) {
        let myNode = document.getElementById("mapa");
        alert("GAME OVER");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        dibujarMapa();
    }

}