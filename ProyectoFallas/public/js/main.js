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
    console.log(secciones);
}

function principal() {

    let divResultados = document.getElementById("resultados");
    let divTodasFallas = document.createElement("div");
    divTodasFallas.classList.add("fallas");

    // Por cada uno de ellos 
    resultadoJSON.forEach(fallas => {
        //DUDAS CON EL FILTER PREGUNTAR A ANGEL

        //Creamos un div para cada falla y le añadimos la clase.
        let divFalla = document.createElement("div");
        divFalla.classList.add("falla");

        //Si esta pulsado el radiobutton de la falla pirncipal establecemos las fotos de las fallas principales.
        if (document.getElementById("fallaPrincipal").checked == true) {
            divFalla.innerHTML = "<img src=" + fallas.properties.boceto + ">" + fallas.properties.nombre + "<button>Ubicación</button>";
        } //Si esta pulsado el radiobutton de la falla infantil establecemos las fotos de las fallas infantil.
        if (document.getElementById("fallaInfantil").checked == true) {
            divFalla.innerHTML = "<img src=" + fallas.properties.boceto_i + ">" + fallas.properties.nombre + "<button>Ubicación</button>";
        }
        //añadimos la falla 
        divTodasFallas.appendChild(divFalla);
    });
    // Lo establecemos en blanco cada vez que se haga la funcion para hacer efecto refrescar.
    divResultados.innerHTML = "";
    //Añadimos las falla al div principal de los resultados.
    divResultados.appendChild(divTodasFallas);
}



//Funcion inicial
function init() {
    //llamamos a la funcion buscar nada mas empezar porque el radiobuton principal va a estar pulsado por defecto
    //para que al entrar muestre todas las fallas principales directamente.
    buscar();
    //Añadimos evento click a cada radiobutton.
    document.querySelectorAll(`input[name="fallaPri"]`)[0].addEventListener("click", buscar);
    document.querySelectorAll(`input[name="fallaPri"]`)[1].addEventListener("click", buscar);
    //Funcion changue para el section
    document.getElementById("section").addEventListener("change", buscar);
}


//Funcion inicial al cargar la pagina.
window.onload = init;