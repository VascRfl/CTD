let numeros = [2,4,6,8];

let impares = numeros.map(function (i) {
    return i + 1;
});

console.log(impares);

let nomes = ['maria','rafael','beatriz','maria','rose'];

let marias = nomes.filter(function (i) {
    return i == 'maria';
});

console.log(marias);

let novoNumeros = numeros.reduce(function (i, j) {
    return i + ' - ' + j;
});

console.log(novoNumeros);

let animals = ['cachorro','gato','girafa','peixe','pássaro'];

animals.forEach((i) => {
    console.log("O animal é " + i);
});