// comprobar bloques con includes
// mapa[i][j].value.classList.value.includes();
/* if (mapa[i][j].value.classList.value.includes(personaje)) {
        newDiv.classList.replace("personaje", "huellas");
 }
        document.querySelector(".personaje").classList.replace("personaje", "huellas");  

        
   */


bart_Y = 0;
bart_X = 8;

mapa = [
    [9, 9, 9, 9, 9, 9, 9, 9, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

window.onload = function() {
    listo()
};

function listo() {
    dibujarMapa();
    document.addEventListener("keydown", cogerTecla);
}

function dibujarMapa() {

    document.querySelector(".mapa").innerHTML = "";
    //mapa[bartViejoX][bartViejoY]=4;
    for (var i = 0; i < 14; i++) {
        for (var j = 0; j < 21; j++) {
            var newDiv = document.createElement("div");
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

    if (bart_X != 0) {
        console.log("Has pulsado flecha izquierda");
        console.log("X: " + bart_X);

        // SI Y NO ES CAMINO NI HUELLAS CHOCA
        if (aux && aux1) {
            console.log("Choque Columna Izquierda");
            //SINO CAMBIA PEROSNAJE POR HUELLA PARA DEJAR EL RASTRO DE HUELLAS
        } else {
            mapa[bart_Y][bart_X].classList.replace("personaje", "huellas");
            bart_X--;
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
}

function moverDerecha() {

    var aux = !mapa[bart_Y][bart_X + 1].classList.value.includes("camino");
    var aux1 = !mapa[bart_Y][bart_X + 1].classList.value.includes("huellas");
    //SI Y ES DISTINTO DE 20 PARA EL RANGO
    if (bart_X != 20) {
        console.log("Has pulsado flecha Derecha");
        console.log("X: " + bart_X);
        // SI Y NO ES CAMINO NI HUELLAS CHOCA
        if (aux && aux1) {
            console.log("Choque Columna Derecha");

            //SINO CAMBIA PEROSNAJE POR HUELLA PARA DEJAR EL RASTRO DE HUELLAS
        } else {
            mapa[bart_Y][bart_X].classList.replace("personaje", "huellas");
            bart_X++;
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
}

function moverArriba() {

    var aux = !mapa[bart_Y - 1][bart_X].classList.value.includes("camino");
    var aux1 = !mapa[bart_Y - 1][bart_X].classList.value.includes("huellas");

    //SI Y ES DISTINTO DE CERO PARA EL RANGO
    if (bart_Y != 0) {
        console.log("Has pulsado flecha arriba");
        console.log("Y: " + bart_Y);

        // SI Y NO ES CAMINO NI HUELLAS CHOCA
        if (aux && aux1) {
            console.log("Choque Columna Arriba");
            //SINO CAMBIA PEROSNAJE POR HUELLA PARA DEJAR EL RASTRO DE HUELLAS
        } else {
            mapa[bart_Y][bart_X].classList.replace("personaje", "huellas");
            bart_Y--;
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
}

function moverDebajo() {

    var aux = !mapa[bart_Y + 1][bart_X].classList.value.includes("camino");
    var aux1 = !mapa[bart_Y + 1][bart_X].classList.value.includes("huellas");
    if (bart_Y != 13) {
        console.log("Has pulsado flecha arriba");
        console.log("Y: " + bart_Y);

        // SI Y NO ES CAMINO NI HUELLAS CHOCA
        if (aux && aux1) {
            console.log("Choque Columna Arriba");
            //SINO CAMBIA PEROSNAJE POR HUELLA PARA DEJAR EL RASTRO DE HUELLAS
        } else {
            mapa[bart_Y][bart_X].classList.replace("personaje", "huellas");
            bart_Y++;
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
}