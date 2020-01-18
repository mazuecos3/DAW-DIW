const canvas = document.querySelector("canvas");

// contexto -> ctx
// contexto tipo 2d
let ctx = canvas.getContext("2d");

let X = 0;
let Y = 0;

let numCasillas = 0;
let celda = true;

//rellenar el tablero
for (let i = 0; i < 64; i++) {

    //Asignamos color negro y blanco celda si celda no
    if (celda) {
        ctx.fillStyle = "black";
        celda = false;
        console.log("negro");
    } else {
        ctx.fillStyle = "white";
        celda = true;
        console.log("negro");
    }

    //aumentamos numero casillas
    numCasillas++;
    //establecemos el primer cuadrado en la posicion x=0 y=0 de 75px 
    //para hacer 8 filas ya que el tamaño de el canvas es de 600px que dividido entre 75 da justo 8 celdas.
    ctx.fillRect(X, Y, 75, 75);

    //aumentamos la posicionX para que situe el siguiente pegado a la derecha en horizontal
    X += 75;
    //y cada 8 casillas...
    if (numCasillas == 8) {
        //aumentamos en 75 también la altura y la x a 0 para volver al principio
        Y += 75;
        X = 0;

        //Asignamos color negro y blanco celda si celda no
        if (celda) {
            ctx.fillStyle = "black";
            celda = false;
            console.log("negro");
        } else {
            ctx.fillStyle = "white";
            celda = true;
            console.log("negro");
        }

        //igualamos a 0 para que sea cada 8
        numCasillas = 0;
    }


}