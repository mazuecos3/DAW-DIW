// Direccion json web
const fuentesUrl = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";
var resultadoJSON;

let secciones = [];

function buscar() {
    // Obtenemos el JSON que esta definido.
    const fetchPromesa = fetch(fuentesUrl);

    // Cuando se resuelva la promesa.
    fetchPromesa.then(response => {
        // la pasamos a JSON.
        return response.json();
        // Y entonces.
    }).then(respuesta => {
        // resultadoJSONs.
        resultadoJSON = respuesta.features;
        principal();
        rellenarSection();
    });

}

function rellenarSection() {
    // Recogemos las secciones  las metemos en un array.
    for (let i = 0; i < resultadoJSON.length; i++) {
        let seccion = resultadoJSON[i].properties.seccion;
        //para que no se repitan dentro de el array.
        if (!secciones.includes(seccion)) {
            secciones.push(resultadoJSON[i].properties.seccion);
        }
    }
    //Ordenamos el array.
    secciones.sort();
    //declaramos la seccion y por cada iteración añadimos una option nueva
    let allSection = document.getElementById("section");

    for (let i = 0; i < secciones.length; i++) {
        let option = document.createElement("option");
        option.innerText = secciones[i];
        option.value = secciones[i];

        allSection.appendChild(option);
    }
    //console.log(secciones);
}



function principal() {

    let principalChecked = document.getElementById("fallaPrincipal").checked;
    let divResultados = document.getElementById("resultados");
    let divTodasFallas = document.createElement("div");
    divTodasFallas.classList.add("fallas");

    // Por cada uno de ellos 
    resultadoJSON.forEach(fallas => {
        //Creamos un div para cada falla y le añadimos la clase.
        let divFalla = document.createElement("div");
        divFalla.classList.add("falla");

        let secciones = document.getElementById("section");
        let fecha1 = document.getElementById("fecha1");
        let fecha2 = document.getElementById("fecha2");
        // RANGO FECHAS
        let boceto;

        // if (fecha1.value < fecha2.value && fecha1.value < fallas.properties.anyo_fundacion && fecha2.value > fallas.properties.anyo_fundacion) {

        if (secciones.value == "Todas") {
            //Si esta pulsado el radiobutton de la falla pirncipal establecemos las fotos de las fallas principales.
            if (principalChecked) {
                boceto = fallas.properties.boceto;
            } //Si esta pulsado el radiobutton de la falla infantil establecemos las fotos de las fallas infantil.
            else {
                boceto = fallas.properties.boceto_i;
            }
            //depende de el valor de la seccion se mostrará aquellos que entren en esa seccion.
        } else if (fallas.properties.seccion == secciones.value) {

            //Si esta pulsado el radiobutton de la falla pirncipal establecemos las fotos de las fallas principales.
            if (principalChecked) {
                console.log("antes " + boceto);
                boceto = fallas.properties.boceto;
                console.log("despues " + boceto);
            }
            //Si esta pulsado el radiobutton de la falla infantil establecemos las fotos de las fallas infantil.
            else {
                boceto = fallas.properties.boceto_i;
                console.log("antes " + boceto);
            }
            //añadimos la falla 
        }
        //   }

        let imagen = document.createElement("img");
        imagen.src = boceto;

        let nombre = document.createElement("p");
        nombre.innerText = fallas.properties.nombre;

        let botonUbi = document.createElement("button");
        botonUbi.innerText = "Ubicación";

        let botonInfo = document.createElement("button");
        botonInfo.innerText = "Más Información";

        divFalla.appendChild(imagen);
        divFalla.appendChild(nombre);
        divFalla.appendChild(botonUbi);
        divFalla.appendChild(botonInfo);
        divTodasFallas.appendChild(divFalla);

    });

    // Lo establecemos en blanco cada vez que se haga la funcion para hacer efecto refrescar.
    divResultados.innerHTML = "";
    //Añadimos las falla al div principal de los resultados.
    divResultados.appendChild(divTodasFallas);


}

function limpiar() {
    let divResultados = document.getElementById("resultados");
    divResultados.innerHTML = "";
}

function mostrarMapa() {
    console.log("perro1")
}

function mostrarInfo() {
    console.log("perro2")
}
//Funcion inicial
function init() {
    //llamamos a la funcion buscar nada mas empezar porque el radiobuton principal va a estar pulsado por defecto
    //para que al entrar muestre todas las fallas principales directamente.
    buscar();
    //Añadimos evento click a cada radiobutton.
    document.querySelectorAll(`input[name="fallaPri"]`)[0].addEventListener("click", principal);
    document.querySelectorAll(`input[name="fallaPri"]`)[1].addEventListener("click", principal);
    //Funcion changue para el section
    document.getElementById("section").addEventListener("change", principal);
    //Funcion perdida de foco
    document.getElementById("fecha1").addEventListener("blur", principal);
    document.getElementById("fecha2").addEventListener("blur", principal);





}
//Funcion inicial al cargar la pagina.
window.onload = init;