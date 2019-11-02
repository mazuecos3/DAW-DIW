// AÑADIMOS EVENLISTENER AL HUNDIR LA TECLA Y LE PASAMOS LA FUNCION 
window.addEventListener('keydown', iniciarAudio);

//CREAMOS CONSTANTE QUE NUNCA VA A VARIAR DE CADA DIV Y LE ASIGNAMOS A CADA UNA
//QUE CUANDO ACABE LA TRANSICION LLAME A NUESTRA FUNCION borrarTransicion
const key = document.querySelectorAll("div");
key.forEach(i => { i.addEventListener('transitionend', borrarTransicion); });



//FUNCION INICIAR AUDIO
function iniciarAudio(e) {
    //COMO EN EL HTML TENEMOS  EL DATA KEY DE CADA AUDIO ES FACIL, LO COGEMOS 
    // Y HACEMOS PLAY DE ESE DATA KEY QUE TIENE UN AUDIO (HABILIDADES)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    audio.currentTime = 0;
    audio.play();

    //COGEMOS CON EL DATAKEY OTRA VEZ CADA TECLA QUE SE PULSA Y LE AÑADIMOS UNA TRANSICION
    const teclaPulsada = document.querySelector(`div[data-key="${e.keyCode}"]`);
    teclaPulsada.classList.add("transicion");
}
// FUNCION QUE BORRA LA TRANSIICON
function borrarTransicion() {
    this.classList.remove("transicion");
}