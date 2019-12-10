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

        // Una vez tenemos el listado filtrado pasamos a crear
        // cada uno de los <li> que representan
       let divResultados = document.getElementById("resultados");

        // Por cada uno de ellos 
        resultado.forEach(fallas => {
            // Creamos un <li>
            let calleli = document.createElement("div");
            calleli.innerHTML = "<img src=" + fallas.properties.boceto + ">"  + fallas.properties.nombre ;
            // Lo anyadimos
            divResultados.appendChild(calleli);
        });
       
      
    });

}
function init() {

    // Click en el boton de buscar
    document.querySelector(`input[type="button"]`).addEventListener("click", buscar);

}

window.onload = init;