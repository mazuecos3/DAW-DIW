var bart_Y = 1;
var bart_X = 9;


var skinner_Y = 14;
var skinner_X = 5;

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


    //  randomImage();
};

function listo() {
    dibujarMapa();
    document.addEventListener("keydown", cogerTecla);
    setInterval(moverSkinner, 1000);
}

function dibujarMapa() {

    document.querySelector(".mapa").innerHTML = "";
    //mapa[bartViejoX][bartViejoY]=4;
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 23; j++) {
            var newDiv = document.createElement("div");
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
                newDiv.classList.add("momia");
                mapa[i][j] = newDiv;
            } else if (mapa[i][j] == 4) {
                newDiv.classList.add("huellas");
                mapa[i][j] = newDiv;
            } else if (mapa[i][j] == 5) {
                newDiv.classList.add("papiro");
                // newDiv.setAttribute("id", "random");
                mapa[i][j] = newDiv;
            } else if (mapa[i][j] == 6) {
                newDiv.classList.add("llave");
                // newDiv.setAttribute("id", "random");
                mapa[i][j] = newDiv;
            } else if (mapa[i][j] == 7) {
                newDiv.classList.add("sarcofago");
                // newDiv.setAttribute("id", "random");
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

            moverIzquierda();


            break;

            //flecha arriba
        case 38:
            moverArriba();
            break;

            //flecha derecha   
        case 39:
            moverDerecha();

            break;

            //flecha debajo    
        case 40:
            moverDebajo();
            break;
    }

}


//FUNCIONES MOVIMIENTOS

function moverIzquierda() {
    var aux = !mapa[bart_Y][bart_X - 1].classList.value.includes("camino");
    var aux1 = !mapa[bart_Y][bart_X - 1].classList.value.includes("huellas");



    if (bart_X != 1) {
        console.log("Has pulsado flecha izquierda");


        // SI  NO ES CAMINO NI HUELLAS CHOCA
        if (aux && aux1) {
            console.log("Choque Columna Izquierda");
            //SINO CAMBIA PEROSNAJE POR HUELLA PARA DEJAR EL RASTRO DE HUELLAS
        } else {

            mapa[bart_Y][bart_X].classList.replace("personaje", "huellas");
            bart_X--;

            console.log("X: " + bart_X);
            //SI CONTIENE HUELLAS CAMBIAMOS LA HUELLA POR EL PERSONAJE EN CASO DE VOLVER SOBRE LAS HUELLAS
            if (!aux1) {
                console.log("Huellas");
                mapa[bart_Y][bart_X].classList.replace("huellas", "personaje");

                //SINO ES CAMINO Y CAMBIAMOS EL CAMINO POR EL PERSONAJE PARA AVANZAR EL PERSONAJE
            } else {
                console.log("Camino")
                mapa[bart_Y][bart_X].classList.replace("camino", "personaje");
            }
        }

    }
    comprobarBloques();

}

function moverDerecha() {


    var aux = !mapa[bart_Y][bart_X + 1].classList.value.includes("camino");
    var aux1 = !mapa[bart_Y][bart_X + 1].classList.value.includes("huellas");
    //SI  ES DISTINTO DE 20 PARA EL RANGO
    if (bart_X != 21) {
        console.log("Has pulsado flecha Derecha");

        // SI  NO ES CAMINO NI HUELLAS CHOCA
        if (aux && aux1) {
            console.log("Choque Columna Derecha");

            //SINO CAMBIA PEROSNAJE POR HUELLA PARA DEJAR EL RASTRO DE HUELLAS
        } else {
            mapa[bart_Y][bart_X].classList.replace("personaje", "huellas");
            bart_X++;
            console.log("X: " + bart_X);
            //SI CONTIENE HUELLAS CAMBIAMOS LA HUELLA POR EL PERSONAJE EN CASO DE VOLVER SOBRE LAS HUELLAS
            if (!aux1) {
                console.log("Huellas");
                mapa[bart_Y][bart_X].classList.replace("huellas", "personaje");

                //SINO ES CAMINO  CAMBIAMOS EL CAMINO POR EL PERSONAJE PARA AVANZAR EL PERSONAJE
            } else {
                console.log("Camino")
                mapa[bart_Y][bart_X].classList.replace("camino", "personaje");
            }
        }

    }
    comprobarBloques();

}

function moverArriba() {

    var aux = !mapa[bart_Y - 1][bart_X].classList.value.includes("camino");
    var aux1 = !mapa[bart_Y - 1][bart_X].classList.value.includes("huellas");

    //SI  ES DISTINTO DE CERO PARA EL RANGO
    if (bart_Y != 1) {
        console.log("Has pulsado flecha arriba");


        // SI Y NO ES CAMINO NI HUELLAS CHOCA
        if (aux && aux1) {
            console.log("Choque Columna Arriba");
            //SINO CAMBIA PEROSNAJE POR HUELLA PARA DEJAR EL RASTRO DE HUELLAS
        } else {
            mapa[bart_Y][bart_X].classList.replace("personaje", "huellas");
            bart_Y--;
            console.log("Y: " + bart_Y);
            //SI CONTIENE HUELLAS CAMBIAMOS LA HUELLA POR EL PERSONAJE EN CASO DE VOLVER SOBRE LAS HUELLAS
            if (!aux1) {
                console.log("Huellas");
                mapa[bart_Y][bart_X].classList.replace("huellas", "personaje");

                //SINO ES CAMINO  CAMBIAMOS EL CAMINO POR EL PERSONAJE PARA AVANZAR EL PERSONAJE
            } else {
                console.log("Camino")
                mapa[bart_Y][bart_X].classList.replace("camino", "personaje");
            }
        }

    }
    comprobarBloques();

}

function moverDebajo() {

    var aux = !mapa[bart_Y + 1][bart_X].classList.value.includes("camino");
    var aux1 = !mapa[bart_Y + 1][bart_X].classList.value.includes("huellas");
    if (bart_Y != 14) {
        console.log("Has pulsado flecha Debajo");

        // SI  NO ES CAMINO NI HUELLAS CHOCA
        if (aux && aux1) {
            console.log("Choque Columna Debajo");

            //SINO CAMBIA PEROSNAJE POR HUELLA PARA DEJAR EL RASTRO DE HUELLAS
        } else {
            mapa[bart_Y][bart_X].classList.replace("personaje", "huellas");

            bart_Y++;
            console.log("Y: " + bart_Y);
            //SI CONTIENE HUELLAS CAMBIAMOS LA HUELLA POR EL PERSONAJE EN CASO DE VOLVER SOBRE LAS HUELLAS
            if (!aux1) {
                console.log("Huellas");
                mapa[bart_Y][bart_X].classList.replace("huellas", "personaje");

                //SINO ES CAMINO  CAMBIAMOS EL CAMINO POR EL PERSONAJE PARA AVANZAR EL PERSONAJE
            } else {
                console.log("Camino")
                mapa[bart_Y][bart_X].classList.replace("camino", "personaje");
            }
        }


    }
    comprobarBloques();

}

//MOVER SKINNER

function moverSkinner() {

    let movimientoRandom = Math.floor(Math.random() * 4);
    switch (movimientoRandom) {

        case 0:
            moverIzquierdaSkinner();
            break;

        case 1:
            moverDerechaSkinner();
            break;

        case 2:
            moverArribaSkinner();
            break;

        case 3:
            moverDebajoSkinner();
            break;

    }

}




function moverIzquierdaSkinner() {
    var aux = !mapa[skinner_Y][skinner_X - 1].classList.value.includes("camino");
    var aux1 = !mapa[skinner_Y][skinner_X - 1].classList.value.includes("huellas");

    if (skinner_X != 0) {

        if (aux && aux1) {

            //SINO CAMBIA PEROSNAJE POR HUELLA PARA DEJAR EL RASTRO DE HUELLAS
        } else {
            mapa[skinner_Y][skinner_X].classList.replace("momia", "camino");
            skinner_X--;
            mapa[skinner_Y][skinner_X].classList.replace("camino", "momia");
        }

    } else {
        moverDerechaSkinnerSkinner();
    }
}

function moverDerechaSkinner() {
    var aux = !mapa[skinner_Y][skinner_X + 1].classList.value.includes("camino");
    var aux1 = !mapa[skinner_Y][skinner_X + 1].classList.value.includes("huellas");

    if (skinner_X != 21) {

        if (aux && aux1) {

            //SINO CAMBIA PEROSNAJE POR HUELLA PARA DEJAR EL RASTRO DE HUELLAS
        } else {
            mapa[skinner_Y][skinner_X].classList.replace("momia", "camino");
            skinner_X++;
            mapa[skinner_Y][skinner_X].classList.replace("camino", "momia");
        }
    } else {
        moverArribaSkinner();
    }

}

function moverArribaSkinner() {
    var aux = !mapa[skinner_Y - 1][skinner_X].classList.value.includes("camino");
    var aux1 = !mapa[skinner_Y - 1][skinner_X].classList.value.includes("huellas");

    if (skinner_Y != 1) {
        if (aux && aux1) {

            //SINO CAMBIA PEROSNAJE POR HUELLA PARA DEJAR EL RASTRO DE HUELLAS
        } else {
            mapa[skinner_Y][skinner_X].classList.replace("momia", "camino");
            skinner_Y--;
            mapa[skinner_Y][skinner_X].classList.replace("camino", "momia");
        }
    } else {
        moverDebajoSkinner();
    }

}

function moverDebajoSkinner() {
    var aux = !mapa[skinner_Y + 1][skinner_X].classList.value.includes("camino");
    var aux1 = !mapa[skinner_Y + 1][skinner_X].classList.value.includes("huellas");

    if (skinner_Y != 14) {
        if (aux && aux1) {

            //SINO CAMBIA PEROSNAJE POR HUELLA PARA DEJAR EL RASTRO DE HUELLAS
        } else {
            mapa[skinner_Y][skinner_X].classList.replace("momia", "camino");
            skinner_Y++;
            mapa[skinner_Y][skinner_X].classList.replace("camino", "momia");
        }
    } else {
        moverIzquierdaSkinner();
    }
}

//BLOQUES RODEADOS

function comprobarBloques() {

    let docBloques = document.getElementsByClassName("bloques");

    let contadorPuntos = 0;
    let dataFila;
    let dataColumna;
    let arrayPremios = ["papiro", "llave", "sarcofago"];

    for (let i = 0; i < docBloques.length; i++) {

        //asignamos atributos filas y columnas
        dataFila = parseInt(docBloques[i].getAttribute("data-fila"));
        dataColumna = parseInt(docBloques[i].getAttribute("data-columna"));

        if (dataFila < 13 && dataColumna < 21) {
            // console.log(mapa[dataFila][dataColumna]);

            // si no contiene camino o momia a la derecha,arriba,debajo o izquierda 
            if (!mapa[dataFila - 1][dataColumna].classList.value.includes("camino") &&
                !mapa[dataFila + 1][dataColumna].classList.value.includes("camino") &&
                !mapa[dataFila][dataColumna + 1].classList.value.includes("camino") &&
                !mapa[dataFila][dataColumna - 1].classList.value.includes("camino")

            ) { //Añadimos divRodeado a cada bloque en caso de que tenga huellas o muros por los lados
                docBloques[i].classList.add("divRodeado");
            }
            // comprobamos si los 6 bloques de cada columna estan rodeados 
            if (docBloques[i].classList.value.includes("divRodeado") &&
                docBloques[i + 1].classList.value.includes("divRodeado") &&
                docBloques[i + 2].classList.value.includes("divRodeado") &&
                docBloques[i + 15].classList.value.includes("divRodeado") &&
                docBloques[i + 16].classList.value.includes("divRodeado") &&
                docBloques[i + 17].classList.value.includes("divRodeado")
            ) { //si estan rodeados cambiamos ese divrodeado por otra clase para que cambie

                docBloques[i].classList.replace("divRodeado", "llave");
                docBloques[i + 1].classList.replace("divRodeado", "llave");
                docBloques[i + 2].classList.replace("divRodeado", "llave");
                docBloques[i + 15].classList.replace("divRodeado", "llave");
                docBloques[i + 16].classList.replace("divRodeado", "llave");
                docBloques[i + 17].classList.replace("divRodeado", "llave");

                //contadorScore 
                contadorPuntos += 100;
                console.log("Puntos: " + contadorPuntos);
            }



        }

    }
}