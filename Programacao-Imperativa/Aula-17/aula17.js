let numero = [2, 4, 6];

let dobro = numero.map(function (i) {
    return i * 2;
});

console.log(dobro);

let idades = [12, 16, 17, 19, 23];

let maiorIdade = idades.filter(function (i) {
    return i > 18;
});

console.log(maiorIdade);

let nome = "rafael";

let nomeArray = nome.split('', nome.length).reduce(function (i, j) {
    console.log("A array original é: " + nome + ", o acumulador está em: " + i + ", e o array original está assim: " + j);
    return i + j;
});

console.log(nomeArray);

numero.forEach(function (i) {
    console.log("Item: " + i)
});