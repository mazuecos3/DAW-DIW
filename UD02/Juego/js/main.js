// comprobar bloques con includes
// mapa[i][j].value.classList.value.includes();
/* if (mapa[i][j].value.classList.value.includes(personaje)) {
        newDiv.classList.replace("personaje", "huellas");
 }
        document.querySelector(".personaje").classList.replace("personaje", "huellas");  

        
   */


bartX = 0;
bartY = 8;

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
function moverIzquierda() {

    document.querySelector("personaje");
    if (bartY != 0) {
        console.log("Has pulsado flecha izquierda");
        console.log("Y: " + bartY);
     
        if (mapa[bartX][bartY - 1].classList.value.includes("bloques")) {
            console.log("Choque Columna Izquierda");
           } else {
            mapa[bartX][bartY].classList.replace("personaje", "huellas");
            bartY--;
            mapa[bartX][bartY].classList.replace("camino", "personaje");
           }
    }
}
function moverDerecha() {

    if (bartY != 20) {
        console.log("Has pulsado flecha derecha");
        console.log("Y: " + bartY);
       if (mapa[bartX][bartY + 1].classList.value.includes("bloques")) {
        console.log("Choque Columna Derecha");
       } else {
        mapa[bartX][bartY].classList.replace("personaje", "huellas");
        bartY++;
        mapa[bartX][bartY].classList.replace("camino", "personaje");
       }
        
    }
}
function moverArriba() {

    if (bartX != 1) {
        console.log("Has pulsado flecha arriba");
        console.log("X: " + bartX);

        if (mapa[bartX - 1][bartY].classList.value.includes("bloques")) {
            console.log("Choque Columna Arriba");
        } else {
            mapa[bartX][bartY].classList.replace("personaje", "huellas");
            bartX--;
            mapa[bartX][bartY].classList.replace("camino", "personaje");
        }
       
    }
}
function moverDebajo() {

    if (bartX != 13) {
        console.log("Choque Columna Debajo");
        console.log("X: " + bartX);

        if (mapa[bartX + 1][bartY].classList.value.includes("bloques")) {
         console.log("choque columna");
        } else{

            mapa[bartX][bartY].classList.replace("personaje", "huellas");  
            bartX++;
            mapa[bartX][bartY].classList.replace("camino", "personaje");
        }
      
       
       
        }
    }

