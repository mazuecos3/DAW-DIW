function listo(){
mapa =[
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
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
 
 
for (var i=0;i<13;i++){
    for (var j=0;j<21;j++){
        var newDiv = document.createElement("div");
        if (mapa[i][j]==0){
            newDiv.classList.add("rojo");
        }else{
            newDiv.classList.add("verde");
        }
        document.querySelector(".mapa").appendChild(newDiv);
    }
}
 
}
 
window.onload=function(){
 
    listo()
};