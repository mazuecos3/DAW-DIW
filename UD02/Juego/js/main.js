var bartX;
var bartY;

var bart = {};
bart.X=0;
bart.Y=8;

window.onload=function(){
 
    listo()
};

function listo(){
mapa =[
[9,9,9,9,9,9,9,9,2,9,9,9,9,9,9,9,9,9,9,9,9],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
[0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
[0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
[0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
[0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
[0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
 


dibujarMapa();

document.addEventListener("keydown", cogerTecla);

}


function dibujarMapa(){

    document.querySelector(".mapa").innerHTML="";

    for (var i=0;i<14;i++){
        for (var j=0;j<21;j++){
            var newDiv = document.createElement("div");
            if (mapa[i][j]==0){
                newDiv.classList.add("camino");
            }else if (mapa[i][j]==1) {
                newDiv.classList.add("bloques");
            }
            else if (mapa[i][j]==2) {
                
                newDiv.classList.add("personaje");
            }
            else if (mapa[i][j]==3) {
                
                newDiv.classList.add("momia");
            }
            else if (mapa[i][j]==9) {
                
                newDiv.classList.add("fondo");
            }
            document.querySelector(".mapa").appendChild(newDiv);
        }
    }
    
}


function cogerTecla(e){		
    		
    var key_code = e.keyCode;
    switch(key_code){
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

function moverPersonaje(){
    mapa[bart.X][bart.Y]=2;
}


function moverIzquierda(){
  console.log("Has pulsado flecha izquierda")
    
}
function moverArriba(){

    console.log("Has pulsado flecha arriba")
}
function moverDerecha(){
    console.log("Has pulsado flecha derecha")
}
function moverDebajo(){
    console.log("Has pulsado flecha debajo")
    bart.X++;
}









 


