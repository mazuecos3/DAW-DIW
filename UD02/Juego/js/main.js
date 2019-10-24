var bart_Y = 1;
var bart_X = 9;
var skinner_Y = 14;
var skinner_X = 5;
var momia = ["momia1","momia2","momia3","momia4","momia5"];
var vidas = 5;
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
            } else if (mapa[i][j] == 9) {
                newDiv.classList.add("fondo");
                mapa[i][j] = newDiv;
            }
            //newDiv.innerText = i + " : " + j;
            document.querySelector(".mapa").appendChild(newDiv);
        }
    }

}
function cogerTecla(e) {

    var teclaPulsada = e.keyCode;
    switch (teclaPulsada) {
        //flecha izquierda
        case 37:
                moverPersonaje(bart_Y,bart_X -1);
            break;

            //flecha arriba
        case 38:
                moverPersonaje(bart_Y - 1,bart_X);   
            
            break;

            //flecha derecha   
        case 39:
                moverPersonaje(bart_Y,bart_X +1);
            break;

            //flecha debajo    
        case 40:
                moverPersonaje(bart_Y + 1,bart_X);
            break;
    }

}


//Movimiento Personaje

function moverPersonaje(bart_Y1, bart_X1) {
    var aux = !mapa[bart_Y1][bart_X1].classList.value.includes("camino");
    var aux1 = !mapa[bart_Y1][bart_X1].classList.value.includes("huellas");

    console.log(mapa[bart_Y1][bart_X1]);
        // SI  NO ES CAMINO NI HUELLAS CHOCA
        if (aux && aux1) {
            console.log("Choque Columna");
            //SINO CAMBIA PEROSNAJE POR HUELLA PARA DEJAR EL RASTRO DE HUELLAS
        } else {
            console.log("jeje");
            mapa[bart_Y][bart_X].classList.replace("personaje", "huellas");
            //Incrementamos añadiendo las posiciones
            bart_Y = bart_Y1;   
            bart_X = bart_X1;

            //SI CONTIENE HUELLAS CAMBIAMOS LA HUELLA POR EL PERSONAJE EN CASO DE VOLVER SOBRE LAS HUELLAS
            if (!aux1) {
                console.log("Huellas");
                mapa[bart_Y1][bart_X1].classList.replace("huellas", "personaje");

                //SINO ES CAMINO Y CAMBIAMOS EL CAMINO POR EL PERSONAJE PARA AVANZAR EL PERSONAJE
            } else {
                console.log("Camino")
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
                moverIzquierdaSkinner(skinner_Y,skinner_X -1);
               
                break;
    
            case 1:
               moverIzquierdaSkinner(skinner_Y - 1,skinner_X);
                break;
    
            case 2:
                moverIzquierdaSkinner(skinner_Y,skinner_X +1);
                break;
    
            case 3:
                moverIzquierdaSkinner(skinner_Y + 1,skinner_X);
                break;
    
        }
    
    } 
   
}




function moverIzquierdaSkinner(skinner_Y1,skinner_X1) {
    var aux = !mapa[skinner_Y1][skinner_X1].classList.value.includes("camino");
    var aux1 = !mapa[skinner_Y1][skinner_X1].classList.value.includes("huellas");
    var aux2 = mapa[skinner_Y1][skinner_X1].classList.value.includes("personaje");

        if (aux && aux1) {
            if (aux2) {
                mapa[skinner_Y][skinner_X].classList.replace("momia", "camino");               
                vidas--;
                console.log(vidas);
            }

            //SINO CAMBIA PEROSNAJE POR HUELLA PARA DEJAR EL RASTRO DE HUELLAS
        } else {
            mapa[skinner_Y][skinner_X].classList.replace("momia", "camino");
            skinner_Y = skinner_Y1;
            skinner_X = skinner_X1;
            mapa[skinner_Y][skinner_X].classList.replace("camino", "momia");
        }

      
    
}


//BLOQUES RODEADOS






function comprobarBloques() {

    let docBloques = document.getElementsByClassName("bloques");

    let dataFila;
    let dataColumna;
    let arrayPremios = ["papiro", "llave", "sarcofago"];
    
    for (let i = 0; i < docBloques.length; i++) {

        //asignamos atributos filas y columnas
        dataFila = parseInt(docBloques[i].getAttribute("data-fila"));
        dataColumna = parseInt(docBloques[i].getAttribute("data-columna"));
        //RANGO
        if (dataFila < 14 && dataColumna < 21) {
//COGER LA ESUQINA IZQUIERDA CADA 6 BLOQUES

  // si no contiene camino o momia a la derecha,arriba,debajo o izquierda 
            if (!mapa[dataFila - 1][dataColumna].classList.value.includes("camino") &&
                !mapa[dataFila + 1][dataColumna].classList.value.includes("camino") &&
                !mapa[dataFila][dataColumna + 1].classList.value.includes("camino") &&
                !mapa[dataFila][dataColumna - 1].classList.value.includes("camino")

            ) { //Añadimos divRodeado a cada bloque en caso de que tenga huellas o muros por los lados
                mapa[dataFila][dataColumna].classList.add("divRodeado");
                //docBloques[i].classList.add("divRodeado");
                var esquina = buscarEsquina(dataFila, dataColumna);

                pintarBloques(esquina);

                console.table(esquina);
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

            }


        }


    }
}

function pintarBloques(esquina){
    var contador = 0;
    for (x = esquina[0] - 1; x < esquina[0] + 3; x++) {
        for (y = esquina[1] - 1; y < esquina[1] + 5; y++) {
            if (mapa[x][y].classList.contains("huellas")) contador++;
        }
    }

    if (contador == 14) {
        for (x = esquina[0]; x < esquina[0] + 1; x++) {
            for (y = esquina[1]; y < esquina[1] + 3; y++) {
                if (mapa[x][y].classList.contains("huellas")) contador++;
            }
        }
    }

}
    




function buscarEsquina(x,y) {
    var esquina = new Array(2);

    //comprobamos si estamos arriba, si no, nos ponemos arriba
    if (!(mapa[x-1][y].classList.contains("camino") || 
        mapa[x-1][y].classList.contains("huellas") || 
        mapa[x-1][y].classList.contains("personaje") ||
        mapa[x-1][y].classList.contains("momia"))) {
            x--;
    }
    var salir = false;
    while (!salir) {
        if (!(mapa[x][y-1].classList.contains("camino") || 
            mapa[x][y-1].classList.contains("huellas") || 
            mapa[x][y-1].classList.contains("personaje") ||
            mapa[x][y-1].classList.contains("momia"))) {
                y--;
        } else salir = true;
    }
    esquina[0] = x;
    esquina[1] = y;

    return esquina;
}