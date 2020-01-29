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
        let botones = document.querySelectorAll("ion-button");

        for (let i = 2; i < botones.length; i++) {
            //console.log(botones[i].innerText);
            botones[i].value = botones[i].innerText;
            botones[i].addEventListener("click", asignarResultado);
            // console.log(botones[i].value);

        }



    }


    function asignarResultado() {

        let botones = document.querySelectorAll("ion-button");

        for (let i = 2; i < botones.length; i++) {


            console.log(botones[i].value);

            if (botones[i].value <= 9 || botones[i].value >= 0) {
                setResult(botones[i].value);
            } else {
                switch (botones[i].value) {
                    case "+":
                        setResult("+");
                        break;
                    case "-":
                        setResult("-");
                        break;
                    case "*":
                        setResult("*");
                        break;
                    case "/":
                        setResult("/");
                        break;
                    case "AC":
                        setResult("AC");
                        break;
                    case ".":
                        setResult(".");
                        break;
                    case "=":
                        setResult("=");
                        break;



                }
            }
        }

    }

    function setResult(value) {
        document.getElementById("result").innerHTML = value;
    }

    function getResult() {
        return (document.getElementById("result").innerHTML);
    }

    function add(key) {

        var result = getResult();
        if (result != "0" || isNaN(key)) setResult(result + key);
        else setResult(key);
    }

    function calc() {
        var result = eval(getResult());
        setResult(result);
    }

    function del() {
        setResult(0);
    }