let carro = {
    marca: "Honda",
    modelo: "Civic",
    desempenho: function () {
        return "O melhor!!!"
    }
}

console.log (carro);
console.log (carro.desempenho());

function Carro (marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

let carroNovo = "";
carroNovo = new Carro("Honda", "Civic R Type");

console.log(carroNovo);

let arrayCarro = [];

arrayCarro = [
    new Carro("Ford", "Mustang"),
    new Carro("Chevrolet", "Saveiro"),
    new Carro("Honda", "HRV")
]

console.log(arrayCarro);

let dadosCarro = {
    "cor": "azul",
    "marca": "Civic",
    "placa": "COL-0083",
    "qtdePortas": 4
}

console.log(dadosCarro);