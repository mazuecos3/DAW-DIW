var bart_Y = 1;
var bart_X = 9;
var nivel = 1;
var nivelTexto;
var puntos = 0;
var pantallaVidas;
var pantallaPuntos;
var vidas = 5;

var moverMomia = true;
var matarMomia = false;

var intervalFuncion = setInterval(moverSkinner, 300);

let skinner_Y;
let skinner_X;

//MAPA NIVEL INCIAL 1
mapa = [
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 5, 6, 5, 9, 7, 9, 9, 9],
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
//REVISAR
let mapaAux = copyArray(mapa);

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
    //  document.querySelector("#mapa").style.display="none";
    document.querySelector("#mapa").innerHTML = "";
    console.log(document.querySelector("#mapa"));
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
            } else if (mapa[i][j] == 5) {
                newDiv.classList.add("l");
                mapa[i][j] = newDiv;
            } else if (mapa[i][j] == 6) {
                newDiv.classList.add("v");
                mapa[i][j] = newDiv;
            } else if (mapa[i][j] == 7) {
                newDiv.classList.add("nivel1");
                mapa[i][j] = newDiv;
            } else if (mapa[i][j] == 9) {
                newDiv.classList.add("fondo");
                mapa[i][j] = newDiv;
            }
            document.querySelector("#mapa").appendChild(newDiv);
        }
    }


    //document.querySelector("#mapa").style.display="grid";
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
    // console.log(matarMomia);
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
            console.log("Momia muerta");
            matarMomia = false;
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
    let momia = document.querySelectorAll(".momia");

    for (let i = 0; i < momia.length; i++) {
        skinner_Y = parseInt(momia[i].getAttribute("data-fila"));
        skinner_X = parseInt(momia[i].getAttribute("data-columna"));
        //  console.log(momia);
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
    var aux3 = mapa[skinner_Y1][skinner_X1].classList.value.includes("momia");
    if (moverMomia == true) {
        if (aux && aux1) {
            comprobarVidas(skinner_Y1, skinner_X1, "personaje");
            //SINO CAMBIA MOMIA POR CAMINO
        } else {

            if (aux3) {
                //console.log("CHOQUE MOMIA");
            } else {
                mapa[skinner_Y][skinner_X].classList.remove("momia");
                skinner_Y = skinner_Y1;
                skinner_X = skinner_X1;
                mapa[skinner_Y][skinner_X].classList.add("momia");
                if (aux2) {
                    mapa[skinner_Y][skinner_X].classList.remove("personaje");

                }
            }


        }
    }

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
                    ) {
                        //si estan rodeados cambiamos ese divrodeado por otra clase para que cambie y añadimos otra momia
                        // Luego vovlvera a comprobar si están divRodeados y como si que lo estarán al moverse la momia aparecerá nelson "Siguiente condicion"

                        if (!docBloques[35].classList.value.includes("momiaAbierta")) {
                            docBloques[35].classList.replace("divRodeado", "momia");
                            docBloques[35].classList.add("momiaAbierta");

                        }
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
    // PARA MATAR A LA MOMIA SKINNER
    if (docBloques[1].classList.value.includes("tirachinas")) {
        //  console.log("MATAR MOMIA ON");
        matarMomia = true;
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

            // RESETEAR MAPA 
            subirNivel();
            reiniciarMapa();
            añadirMomiasNivel();

        }
    }

}

function reiniciarMapa() {

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 23; j++) {
            //CON ESTO DEJAMOS EL MAPA VACIO
            mapa[i][j].classList = [];
            //VOLVEMOS A ASIGNAR AL MAPA TODAS LAS CLASES
            if (mapaAux[i][j] == 0) {
                mapa[i][j].classList.add("camino");
            } else if (mapaAux[i][j] == 1) {
                mapa[i][j].classList.add("bloques");
            } else if (mapaAux[i][j] == 2) {
                mapa[i][j].classList.add("personaje");
            } else if (mapaAux[i][j] == 3) {
                mapa[i][j].classList.add("camino");
                mapa[i][j].classList.add("momia");
            } else if (mapaAux[i][j] == 4) {
                mapa[i][j].classList.add("huellas");
            } else if (mapaAux[i][j] == 5) {
                mapa[i][j].classList.add("l");
            } else if (mapaAux[i][j] == 6) {
                mapa[i][j].classList.add("v");
            } else if (mapaAux[i][j] == 7) {
                mapa[i][j].classList.add(nivelTexto);
            } else if (mapaAux[i][j] == 9) {
                mapa[i][j].classList.add("fondo");
            }
        }
    }
}

function copyArray(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res[i] = [];
        for (let j = 0; j < arr[0].length; j++) {
            res[i][j] = arr[i][j];
        }
    }
    return res;
}

function comprobarVidas(posicionY, posicionX, personaje) {

    var aux1 = mapa[posicionY][posicionX].classList.value.includes(personaje);

    if (aux1 && vidas > 0) {
        vidas--;
        pantallaVidas.value = parseInt(vidas);

    } else if (vidas == 0) {
        //CUANDO SE ACABE LA PARTIDA DEVOLVER EL NIVEL AL 1 
        alert("GAME OVER");
        nivel = 1;
        nivelTexto = "nivel1";
        //REINICIAR MAPA
        reiniciarMapa();
        //CUANDO SE ACABE LA PARITDA DEVOLVER ALS VIDAS A 5
        vidas = 5;
        pantallaVidas.value = parseInt(vidas);
        bart_Y = 1;
        bart_X = 9;

    }

}

function subirNivel() {
    if (nivel == 5) {
        alert("HAS COMPLETADO TODOS LOS NIVELES !!! ERES UN TITÁN");
        nivel = 1;
        nivelTexto = "nivel1";
    } else {

        nivel++;
        nivelTexto = "nivel" + nivel;

        console.log(nivel);
        alert("VICTORIA!!! PASAS AL SIGUIENTE NIVEL");
    }
}

function añadirMomiasNivel() {

    switch (nivel) {
        case 2:
            mapa[8][8].classList.add("momia");
            break;
        case 3:
            mapa[11][13].classList.add("momia");
            break;
        case 4:
            mapa[11][11].classList.add("momia");
            break;
        case 5:
            mapa[2][20].classList.add("momia");
            break;

        default:
            break;
    }

}