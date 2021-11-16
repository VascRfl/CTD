for (let i = 1; i <= 5; i++) {
    console.log("Olá Mundo!");
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log("O número " + i + " é ímpar.");
    }
}

for (let i = 0; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        let resultado = 0;
        resultado = i * j;
        console.log(i + " x " + j + " = " + resultado);
    }
}

let nr = 0
while (nr <= 100) {
    if (nr % 2 != 0) {
        console.log("O número " + nr + " é ímpar.");
    }
    nr++;
}

let nr2 = 0
while (nr2 <= 100) {
    if (nr2 % 2 == 0) {
        console.log("O número " + nr2 + " é par.");
    }
    nr2++;
}