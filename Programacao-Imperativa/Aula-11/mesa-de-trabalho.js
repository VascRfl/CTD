let filmes = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vidas es bella'];
let filmes2 = ['toy story', 'nemo', 'dori', 'lego'];

console.log (filmes);

for (let i = 0; i < filmes.length; i++) {
    filmes[i] = filmes[i].toUpperCase();
}

console.log (filmes);

function passarElementos(filmes, filmes2) {
    while (filmes2.length > 0) {
        filmes.push(filmes2.pop().toLocaleUpperCase());
    }
    return filmes
}

console.log (passarElementos(filmes, filmes2));
console.log (filmes2);

const asiaScore = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScore = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones(asia, europa) {
    let comparacionesAsiaEuropa = [];
    for (i = 0; i < asia.length; i++) {
        comparacionesAsiaEuropa[i] = asia[i] === europa[i];
    }
    return comparacionesAsiaEuropa;
}

console.log (compararCalificaciones(asiaScore, euroScore));