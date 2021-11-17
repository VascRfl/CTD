const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador (p1, p2) {
    let pontosP1 = 0;
    let pontosP2 = 0;

    for (let i = 0; i < p1.length; i++) {
        if (p1[i] > p2[i]) {
            pontosP1++;
        } else if (p2[i] > p1[i]) {
            pontosP2++;
        }
    }
    if (pontosP1 > pontosP2) {
        return "Participante 01";
    } else if (pontosP1 < pontosP2) {
        return "Participante 02"
    } else {
        return "Empate"
    }
}

console.log("O ganhador é: " + encontrarGanhador(alicia, bob));

function digitalHouse(x, y) {
    for (let i = 1; i <= 100; i++) {
        if (i % x == 0 && i % y == 0) {
            console.log("DigitalHouse");
        } else {
            if (i % x == 0) {
                console.log("Digital");
            } else if (i % y == 0) {
                console.log("House");
            } else {
                console.log(i);
            }
        }
    }
}

console.log(digitalHouse(2, 9));

let numeros = [1, 2, 3];

let result = 0;

for (i = 0; i < numeros.length; i++) {
    result = result + numeros[i];
}

console.log(result);