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


function ComprobarMover(){


}
function moverIzquierda() {

    document.querySelector("personaje");
    if (bart_X != 0) {
        console.log("Has pulsado flecha izquierda");
        console.log("X: " + bart_X);
     
        if (!mapa[bart_Y][bart_X - 1].classList.value.includes("camino")) {
            console.log("Choque Columna Izquierda");
           } else {
            mapa[bart_Y][bart_X].classList.replace("personaje", "huellas");
            bart_X--;
            mapa[bart_Y][bart_X].classList.replace("camino", "personaje");
           }
    }
}
function moverDerecha() {

    if (bart_X != 20) {
        console.log("Has pulsado flecha derecha");
        console.log("X: " + bart_X);
       if (!mapa[bart_Y][bart_X + 1].classList.value.includes("camino")) {
        console.log("Choque Columna Derecha");
       } else {
        mapa[bart_Y][bart_X].classList.replace("personaje", "huellas");
        bart_X++;
        mapa[bart_Y][bart_X].classList.replace("camino", "personaje");
       }
        
    }
}
function moverArriba() {

    if (bart_Y != 1) {
        console.log("Has pulsado flecha arriba");
        console.log("Y: " + bart_Y);

        if (!mapa[bart_Y - 1][bart_X].classList.value.includes("camino")) {
            console.log("Choque Columna Arriba");
        } else {
            mapa[bart_Y][bart_X].classList.replace("personaje", "huellas");
            bart_Y--;
            mapa[bart_Y][bart_X].classList.replace("camino", "personaje");
        }
       
    }
}
function moverDebajo() {

    if (bart_Y != 13) {
        console.log("Has pulsado flecha arriba");
        console.log("Y: " + bart_Y);

        if (!mapa[bart_Y + 1][bart_X].classList.value.includes("camino")) {
         console.log("choque columna Debajo");
        } else{

            mapa[bart_Y][bart_X].classList.replace("personaje", "huellas");  
            bart_Y++;
            mapa[bart_Y][bart_X].classList.replace("camino", "personaje");
        }
      
       
       
        }
    }

