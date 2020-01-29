    function onLoad() {
        document.addEventListener("ionChange", setStyle);
        setStyle();
    }

    function setStyle() {
        document.querySelectorAll("ion-content ion-button").forEach(function(b) {
            b.expand = "block";
            b.strong = "true";
            b.fill = document.getElementById("type").value;
            b.size = document.getElementById("size").value;
        });
        asignarValor();
    }

    function asignarValor() {
        let botones = document.querySelectorAll("ion-button");

        for (let i = 2; i < botones.length; i++) {
            //console.log(botones[i].innerText);
            botones[i].value = botones[i].innerText;
            //añadimos funcionabilidad, al hacer click dependiendo si es numero o operación 
            //hará una cosa o otra, y si es "=" hara un eval.
            botones[i].addEventListener("click", function add() {
                var result = getResult();
                if (!isNaN(botones[i].value)) {

                    setResult(botones[i].value);
                    console.log(botones[i].value)
                } else {

                    if (botones[i].value == "=") {
                        calc();
                        console.log("Calcular")
                    } else {
                        setResult(result + botones[i].value);
                        console.log("signo");
                    }

                }

            });

            // console.log(botones[i].value);

        }



    }

    function setResult(value) {
        document.getElementById("result").innerHTML = value;
    }

    function getResult() {
        return (document.getElementById("result").innerHTML);
    }



    function calc() {
        console.log("Calculando")
        var result = eval(getResult());
        setResult(result);
    }

    function del() {
        setResult(0);
    }