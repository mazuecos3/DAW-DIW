// comprobar bloques con includes
// mapa[i][j].value.classList.value.includes();
/* if (mapa[i][j].value.classList.value.includes(personaje)) {
        newDiv.classList.replace("personaje", "huellas");
 }
        document.querySelector(".personaje").classList.replace("personaje", "huellas");  


         var query = document.querySelector(".personaje");
    query.classList.add("huellas");
    query.classList.remove;
   */


var bart = {};
bart.X = 0;
bart.Y = 8;



var bartViejoX = 0;
var bartViejoY = 8;

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
            } else if (mapa[i][j] == 1) {
                newDiv.classList.add("bloques");
            } else if (mapa[i][j] == 2) {
                newDiv.classList.add("personaje");
            } else if (mapa[i][j] == 3) {
                newDiv.classList.add("momia");
            } else if (mapa[i][j] == 4) {
                newDiv.classList.add("huellas");
            } else if (mapa[i][j] == 9) {
                newDiv.classList.add("fondo");
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


    moverPersonaje();
    dibujarMapa();
}

function moverPersonaje() {
    mapa[bart.X][bart.Y] = 2;


}

function moverIzquierda() {

    if (bart.Y != 0) {
        console.log("Has pulsado flecha izquierda");
        console.log("Y: " + bart.Y);
       
        bartViejoX = bart.X;
        bartViejoY = bart.Y;
        mapa[bartViejoX][bartViejoY] = 4;
        bart.Y--;
    }
}

function moverDerecha() {

    if (bart.Y != 20) {
        console.log("Has pulsado flecha derecha");
        console.log("Y: " + bart.Y);
        
        bartViejoX = bart.X;
        bartViejoY = bart.Y;
        mapa[bartViejoX][bartViejoY] = 4;
        bart.Y++;
    }
}
function moverArriba() {

    if (bart.X != 1) {
        console.log("Has pulsado flecha arriba");
        console.log("X: " + bart.X);

        bartViejoX = bart.X;
        bartViejoY = bart.Y;
        mapa[bartViejoX][bartViejoY] = 4;
        bart.X--;
    }
}

function moverDebajo() {

    if (bart.X != 13) {
        console.log("Has pulsado flecha debajo");
        console.log("X: " + bart.X);

        bartViejoX = bart.X;
        bartViejoY = bart.Y;
        mapa[bartViejoX][bartViejoY] = 4;
        bart.X++;

       
    }

}