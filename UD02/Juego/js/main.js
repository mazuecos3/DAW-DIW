bart_Y = 1;
bart_X = 9;



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
    this.comprobarBloques();
   
        //  randomImage();
};

function listo() {
    dibujarMapa();
    document.addEventListener("keydown", cogerTecla);
}

function dibujarMapa() {

    document.querySelector(".mapa").innerHTML = "";
    //mapa[bartViejoX][bartViejoY]=4;
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 23; j++) {
            var newDiv = document.createElement("div");
            newDiv.dataset.fila=i;
            newDiv.dataset.columna=j;

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

  /*  console.log("bart_X " + bart_X);
    console.log("bart_Y " + bart_Y);
   
    divArriba = document.querySelector("[data-arriba=" + CSS.escape(bart_X) + "]");
    console.log(divArriba);*/



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
}


function comprobarBloques() {

    let docBloques = document.querySelectorAll(".bloques");


    for (let i = 0; i < docBloques.length; i++) {

      

        //COGEMOS EL PRIMER BLOQUE DE CADA COLUMNA
        if (parseInt(i / 15) % 2 == 0) {
            if (i % 3 == 0) {
                console.log(docBloques[i]);
                console.log(docBloques[i + 1]);
                console.log(docBloques[i + 2]);
                console.log(docBloques[i + 15]);
                console.log(docBloques[i + 16]);
                console.log(docBloques[i + 17]);

            }

        }
            
    }


    // RUEBAS !!!
    /*console.log(document.getElementsByClassName(".mapa")[0].querySelector(docBloques[0]));*/
    //POSIBLE AYUDA
    /*if (!docBloques[i].classList.value.includes("camino") &&
                       !docBloques[i + 1].classList.value.includes("camino") &&
                       !docBloques[i + 2].classList.value.includes("camino") &&
                       !docBloques[i + 15].classList.value.includes("camino") &&
                       !docBloques[i + 16].classList.value.includes("camino") &&
                       !docBloques[i + 17].classList.value.includes("camino")
                   ) {
                       console.log("PerroFlauta")
                   }*/

    //Cogemos todos los div bloques

    /*   let docBloques = document.querySelectorAll(".bloques");

        console.log(docBloques[0]);
    if (docBloques[0] && docBloques[1] && docBloques[2] && docBloques[0 + 15 ] && docBloques[1 + 15] && docBloques[2 +15 ] ) {
        
    }*/

}

//Establecer imagen random

/* function randomImage() {
     var numimages = 3;
      rndimg = new Array("C:\Users\oscar\GitHub\DAW-DIW\UD02\Juego\images\key.png", "C:\Users\oscar\GitHub\DAW-DIW\UD02\Juego\images\key.png", "C:\Users\oscar\GitHub\DAW-DIW\UD02\Juego\images\key.png");
      x = (Math.floor(Math.random() * numimages));
      randomimage = (rndimg[x]);
      document.getElementById("random").style.backgroundImage = "url(" + randomimage + ")";
}*/