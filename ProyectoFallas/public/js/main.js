// Direccion json web
const fuentesUrl = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";
let resultadoJSON;

let divTodasFallas = document.createElement("div");
divTodasFallas.classList.add("fallas");

let secciones = [];
let ids = [];
let coordenadas = [];

var misCoordenadas = new Map();

let map;


function crearMapa(idFalla) {
    map = L.map("map");

    let tilerMapUrl = 'https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=iKFTul3NW3eysK9xpmVO';
    L.tileLayer(tilerMapUrl, {
        attribution: 'Map data © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>, Imagery © <a href="http://www.kartena.se/">Kartena</a>',
    }).addTo(map);

    map.setView(misCoordenadas.get(idFalla), 16);

}

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

    divTodasFallas.innerHTML = "";

    let divResultados = document.getElementById("resultados");


    // Por cada uno de ellos
    resultadoJSON.forEach(fallas => {
        //Creamos un div para cada falla y le añadimos la clase.

        let divFalla;

        let secciones = document.getElementById("section");
        let fecha1 = document.getElementById("fecha1");
        let fecha2 = document.getElementById("fecha2");
        let boceto;

        // RANGO FECHAS   
        if (fecha1.value < fecha2.value &&
            fecha1.value <= fallas.properties.anyo_fundacion &&
            fecha2.value >= fallas.properties.anyo_fundacion) {

            if (secciones.value == "Todas") {
                //Si esta pulsado el radiobutton de la falla pirncipal establecemos las fotos de las fallas principales.
                if (principalChecked) {
                    cargarFalla(fallas.properties.boceto, fallas.properties.nombre, fallas.properties.id);
                    if (fallas.properties.id == ids.value) {

                    }
                } //Si esta pulsado el radiobutton de la falla infantil establecemos las fotos de las fallas infantil.
                else {
                    cargarFalla(fallas.properties.boceto_i, fallas.properties.nombre, fallas.properties.id);

                }
                //depende de el valor de la seccion se mostrará aquellos que entren en esa seccion.
            } else if (fallas.properties.seccion == secciones.value) {
                //Si esta pulsado el radiobutton de la falla pirncipal establecemos las fotos de las fallas principales.
                if (principalChecked) {
                    cargarFalla(fallas.properties.boceto, fallas.properties.nombre, fallas.properties.id);
                }
                //Si esta pulsado el radiobutton de la falla infantil establecemos las fotos de las fallas infantil.
                else {
                    cargarFalla(fallas.properties.boceto_i, fallas.properties.nombre, fallas.properties.id);
                }
            }
        }
    });

    // Lo establecemos en blanco cada vez que se haga la funcion para hacer efecto refrescar.
    divResultados.innerHTML = "";
    //Añadimos las falla al div principal de los resultados.
    divResultados.appendChild(divTodasFallas);
}

function cargarFalla(boceto, nombreFalla, id) {

    let divFalla = document.createElement("div");
    divFalla.classList.add("falla");
    divFalla.dataset.id = id;

    let imagen = document.createElement("img");
    imagen.src = boceto;

    let nombre = document.createElement("p");
    nombre.innerText = nombreFalla;

    let botonUbi = document.createElement("button");
    botonUbi.innerText = "Ubicación";
    botonUbi.addEventListener("click", function(evento) {
        let probando = evento.target.parentElement.dataset.id;
        crearMapa(probando);
    });

    let botonInfo = document.createElement("button");
    botonInfo.innerText = "Más Información";
    botonInfo.addEventListener("click", mostrarInfo);

    divFalla.appendChild(imagen);
    divFalla.appendChild(nombre);
    divFalla.appendChild(botonUbi);
    divFalla.appendChild(botonInfo);

    divTodasFallas.appendChild(divFalla);

    crearMapas();

}

function crearMapas() {
    for (let i = 0; i < resultadoJSON.length; i++) {

        ids.push(resultadoJSON[i].properties.id);

        coordenadas.push(resultadoJSON[i].geometry.coordinates);

    }
    for (let i = 0; i < resultadoJSON.length; i++) {

        misCoordenadas.set(ids[i], coordenadas[i]);

    }


}

function getCoordinates(coordenadas) {
    // Cambiar la proyeccion de la referencia espacial 25830 a 4326
    let firstProjection = '+proj=utm +zone=30 +ellps=GRS80 +units=m +no_defs';
    let secondProjection = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';
    coordenadas = proj4(firstProjection, secondProjection, coordenadas);

    return [coordenadas[1], coordenadas[0]];
}




function mostrarInfo() {
    console.log("Info");
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