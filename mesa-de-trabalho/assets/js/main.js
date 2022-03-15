// Utilize esse documento para implementar seu algorítimo...

var documento = document.body;
var telaInicio = document.querySelector("#telaInicial");

var coordenada1 = document.querySelector("#linha-1_coluna-1");
var coordenada2 = document.querySelector("#linha-1_coluna-2");
var coordenada3 = document.querySelector("#linha-1_coluna-3");
var coordenada4 = document.querySelector("#linha-2_coluna-1");
var coordenada5 = document.querySelector("#linha-2_coluna-2");
var coordenada6 = document.querySelector("#linha-2_coluna-3");
var coordenada7 = document.querySelector("#linha-3_coluna-1");
var coordenada8 = document.querySelector("#linha-3_coluna-2");
var coordenada9 = document.querySelector("#linha-3_coluna-3");

documento.addEventListener("keydown", function (event) {
    if (event.key == " ") {
        telaInicio.remove();
    } else if (event.key == "Escape") {
        document.location.reload(true);
    }
});

coordenada1.addEventListener("click", function (evento) {
    evento.target.innerText = "X";
});
coordenada1.addEventListener("dblclick", function (evento) {
    evento.target.innerText = "O";
});

coordenada2.addEventListener("click", function (evento) {
    evento.target.innerText = "X";
});
coordenada2.addEventListener("dblclick", function (evento) {
    evento.target.innerText = "O";
});

coordenada3.addEventListener("click", function (evento) {
    evento.target.innerText = "X";
});
coordenada3.addEventListener("dblclick", function (evento) {
    evento.target.innerText = "O";
});

coordenada4.addEventListener("click", function (evento) {
    evento.target.innerText = "X";
});
coordenada4.addEventListener("dblclick", function (evento) {
    evento.target.innerText = "O";
});

coordenada5.addEventListener("click", function (evento) {
    evento.target.innerText = "X";
});
coordenada5.addEventListener("dblclick", function (evento) {
    evento.target.innerText = "O";
});

coordenada6.addEventListener("click", function (evento) {
    evento.target.innerText = "X";
});
coordenada6.addEventListener("dblclick", function (evento) {
    evento.target.innerText = "O";
});

coordenada7.addEventListener("click", function (evento) {
    evento.target.innerText = "X";
});
coordenada7.addEventListener("dblclick", function (evento) {
    evento.target.innerText = "O";
});

coordenada8.addEventListener("click", function (evento) {
    evento.target.innerText = "X";
});
coordenada8.addEventListener("dblclick", function (evento) {
    evento.target.innerText = "O";
});

coordenada9.addEventListener("click", function (evento) {
    evento.target.innerText = "X";
});
coordenada9.addEventListener("dblclick", function (evento) {
    evento.target.innerText = "O";
});