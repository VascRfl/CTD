// Ex. 01

function loopDePares(x) {
    for (let i = 0; i < 100; i++) {
        if ((x + i) % 2 == 0) {
            console.log("O número " + (i + x) + " é par");
        } else {
            console.log(i);
        }
    }
};

// console.log(loopDePares(3));

// Ex. 02

function loopDePares(x, y) {
    for (let i = 0; i < 100; i++) {
        if ((x + i) % 2 != 0) {
            console.log(y);
        } else {
            console.log(i);
        }
    }
};

// console.log(loopDePares(3, "ximbica"));

// Ex. 3

function soma(x) {
    let result = 0;

    for (let i = x; i > 0; i--) {
        result += i;
    }

    return result;
}

// console.log(soma(3));

// Ex. 4

function newArray(x) {
    let array = [];

    for (let i = 1; i <= x; i++) {
        array.push(i);
    }

    return array;
}

// console.log(newArray(5));

// Ex. 5

function split(x) {
    let arrayPalavra = [];

    for (let i = 0; i < x.length; i++) {
        arrayPalavra.push(x[i]);
    }

    return arrayPalavra;
}

//  console.log(split("rafael"));

// Ex. 6

function moverZeros(x) {
    let arrZero = [];
    let aux;

    for (let i = 0; i < x.length; i++) {
        if (x[i] === 0) {
            aux = x[i];
            x.splice(i, 1);
            arrZero.push(aux);
        }
    }
    return x.concat(arrZero);
}

//  console.log(moverZeros([1,2,0,1,0,1,0,3,0,1]));

// Ex. 7

function arrayHandler(x, y) {
    for (let i = 0; i < x.length; i++) {
        console.log("Eu sou " + x[i] + " e eu sou " + y[i]);
    }
}

// arrayHandler([1,2,3], ['o','l','á']);

// Ex. 8

function arrayObjects(x) {
    let array = [];

    for (let i = 1; i <= x; i++) {
        array.push({valor:[i]});
    }

    return array;
}

// console.log(arrayObjects(5));

// Ex. 9

function arrayObjectsTwo(x, y) {
    let array = [];

    for (let i = 1; i <= x; i++) {
        array.push({ [y] :[i]});
    }

    return array;
}

// console.log(arrayObjectsTwo(5, 'olá'));