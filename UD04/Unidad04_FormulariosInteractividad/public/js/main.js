// Algunos valores
const fuentesUrl = " http://mapas.valencia.es/lanzadera/opendata/kioscos_once/JSON";

// Esta es la funcion de filtrado para
// obtener tan solo los elementos que cumplen
// una serie de requisitos.

function filtroLetra(elemento) {
    let letra = document.querySelector(`input[name="emplazamiento"]`).value;
    //starsWith (con la letra que empieza)
    return elemento.properties.emplazamiento.startsWith(letra);
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
        let listado = document.createElement("ul");

        // Por cada uno de ellos 
        resultado.forEach(kiosco => {
            // Creamos un <li>
            let calleli = document.createElement("li");
            calleli.innerHTML = kiosco.properties.emplazamiento + " -- [" + kiosco.geometry.coordinates + "]";
            // Lo anyadimos
            listado.appendChild(calleli);
        });
        // Establecemos el listado en la Web
        document.querySelector(".resultados").innerHTML = "";
        document.querySelector(".resultados").appendChild(listado);
    });

}

function init() {

    // Click en el boton de buscar
    document.querySelector(`input[type="button"]`).addEventListener("click", buscar);

}

window.onload = init;