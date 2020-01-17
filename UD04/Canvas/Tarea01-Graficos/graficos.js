function buildGrafico(){
    console.info(" * Construyendo grafico ");
    const canvas = document.querySelector("canvas");
    // contexto -> ctx
    let ctx = canvas.getContext("2d");

    ctx.fillStyle="red";

    //ctx.fillRect(10,10,100,200);
    ctx.strokeStyle="purple";
    ctx.lineWidth=1;
    //ctx.strokeRect(10,10,100,200);

    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(50,50);
    ctx.lineTo(50,100);
    ctx.lineTo(100,100);
    //ctx.fill();
    ctx.stroke();

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.moveTo(200,200);

    // control, destino
    //ctx.quadraticCurveTo(100,100,200,0);
    //ctx.bezierCurveTo(100,100,70,70,200,0);

    ctx.beginPath();

    //ctx.arc(200,200,50,0.2,1 * Math.PI);

    ctx.stroke();
    console.log(ctx);
}

function loadListeners(){
    document.querySelector("input[name='grafiqueame']").addEventListener("click",buildGrafico);
}


function init(){
    //console.log(" * Init ");
    loadListeners();
  

    
}

window.onload=init;