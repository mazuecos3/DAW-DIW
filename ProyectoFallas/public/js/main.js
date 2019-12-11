// Direccion json web
const fuentesUrl = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";


function buscar() {

    // Obtenemos el JSON que esta definido
    const fetchPromesa = fetch(fuentesUrl);

    // Cuando se resuelva la promesa
    fetchPromesa.then(response => {
        // la pasamos a JSON
        return response.json();
        // Y entonces
    }).then(respuesta => {
        // resultados
        const resultado = respuesta.features;

        let divResultados = document.getElementById("resultados");
        let divTodasFallas = document.createElement("div");
        divTodasFallas.classList.add("fallas");
        // Por cada uno de ellos 
        resultado.forEach(fallas => {
            let fallaPrincipal = document.getElementById("fallaPrincipal");
            let fallaInfantil = document.getElementById("fallaInfantil");     
            let divFalla = document.createElement("div");

            divFalla.classList.add("falla");
            if ( document.getElementById("fallaPrincipal").checked == true) {
                divFalla.innerHTML = "<img src=" + fallas.properties.boceto + "><br>" + fallas.properties.nombre + "<br><button>Ubicación</button>"; 
            }
            if ( document.getElementById("fallaInfantil").checked == true) {
                divFalla.innerHTML = "<img src=" + fallas.properties.boceto_i + "><br>" + fallas.properties.nombre + "<br><button>Ubicación</button>"; 
              }

            //añadimos la falla 
            divTodasFallas.appendChild(divFalla);
        });

        divResultados.innerHTML = "";
        divResultados.appendChild(divTodasFallas);


    });

}
//funcion inicial
function init() {
   
    //los dos radiobutons
    document.querySelectorAll(`input[name="fallaPri"]`)[0].addEventListener("click", buscar);
    document.querySelectorAll(`input[name="fallaPri"]`)[1].addEventListener("click", buscar);
    
  
    // Click en el boton de buscar
  
}

//funcion inicial al cargar la pagina
window.onload = init;