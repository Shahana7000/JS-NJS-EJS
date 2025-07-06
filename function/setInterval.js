let myVar = setInterval(myTimer, 500);

        function myTimer() {
            document.getElementById("gfg")
                .innerHTML += "<button>click me!</button>";
        }