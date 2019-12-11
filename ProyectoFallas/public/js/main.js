// Algunos valores
const fuentesUrl = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";

// Esta es la funcion de filtrado para
// obtener tan solo los elementos que cumplen
// una serie de requisitos.

function filtroLetra(elemento) {
    let letra = document.querySelector(`input[name="falla"]`).value;
    //starsWith (con la letra que empieza)
    return elemento.properties.nombre.startsWith(letra);
}

function buscar() {

    // Obtenemos el JSON que esta definido
    const fetchPromesa = fetch(fuentesUrl);

    // Cuando se resuelva la promesa
    fetchPromesa.then(response => {
        // la pasamos a JSON
        return response.json();
        // Y entonces
    }).then(respuesta => {
        // Filtramos los resultados con el filtro definido anteriormente
        const resultado = respuesta.features.filter(filtroLetra);

        let divResultados = document.getElementById("resultados");
        let divTodasFallas = document.createElement("div");
        divTodasFallas.classList.add("fallas");
        // Por cada uno de ellos 
        resultado.forEach(fallas => {

            let divFalla = document.createElement("div");
            divFalla.classList.add("falla");
            divFalla.innerHTML = "<img src=" + fallas.properties.boceto + "><br>" + fallas.properties.nombre + "<br><button>Ubicación</button>";

            //añadimos la falla 
            divTodasFallas.appendChild(divFalla);
        });

        divResultados.innerHTML = "";
        divResultados.appendChild(divTodasFallas);


    });

}
//funcion inicial
function init() {

    // Click en el boton de buscar
    document.querySelector(`input[type="button"]`).addEventListener("click", buscar);

}

//funcion inicial al cargar la pagina
window.onload = init;