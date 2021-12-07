let pessoas = [];

function Pessoas(nome, sexo, altura) {
    this.nome = nome,
        this.sexo = sexo,
        this.altura = altura
};

function mediaAlturaMulher(x) {
    let a = x.filter((s) => {
        return s.sexo == "F";
    });

    let media = 0;

    a.forEach(e => {
        media += e.altura
    });

    return (media / a.length).toFixed(2);
};

function qtdePorSexo(arr, sex) {
    let a = arr.filter((x) => {
        return x.sexo == sex;
    });

    return a.length;
};

pessoas.push(new Pessoas("Rafael Vasconcelos", "M", 1.82));
pessoas.push(new Pessoas("Beatriz Esponton", "F", 1.70));
pessoas.push(new Pessoas("Alexandre de Vasconcelos", "M", 1.35));
pessoas.push(new Pessoas("Kerli Vasconcelos", "F", 1.62));
pessoas.push(new Pessoas("Gael Vasconcelos", "M", 1.12));
pessoas.push(new Pessoas("Jorge Pinheiro", "M", 1.74));
pessoas.push(new Pessoas("Antonia Benedita", "F", 1.48));
pessoas.push(new Pessoas("Felipe Fraga", "M", 1.82));
pessoas.push(new Pessoas("Carolina Ribeiro", "F", 1.92));
pessoas.push(new Pessoas("Rita Lee", "F", 1.56));
pessoas.push(new Pessoas("Jhonny Boy", "M", 1.87));
pessoas.push(new Pessoas("Tabata Batata", "F", 1.42));
pessoas.push(new Pessoas("Luizinho Linguiça", "M", 1.94));
pessoas.push(new Pessoas("Maga Maravilha", "F", 2.04));
pessoas.push(new Pessoas("Gato Lindomar", "M", 1.65));

pessoas.sort(function (a, b) {
    if (a.altura > b.altura) {
        return 1;
    }
    if (a.altura < b.altura) {
        return -1;
    }
    return 0;
});

console.log("A menor pessoa é: " + pessoas[0].nome + ", e a maior é a: " + pessoas[pessoas.length - 1].nome);
console.log("A média alutra das mulheres: " + mediaAlturaMulher(pessoas));
console.log("A quantidade de homens e: " + qtdePorSexo(pessoas, "M"));

function Espectador(idade, opiniao) {
    this.idade = idade,
    this.opiniao = opiniao
};

let espectadores = [];

espectadores.push(new Espectador(18, 2));
espectadores.push(new Espectador(25, 1));
espectadores.push(new Espectador(41, 3));
espectadores.push(new Espectador(32, 3));
espectadores.push(new Espectador(19, 3));
espectadores.push(new Espectador(23, 2));
espectadores.push(new Espectador(29, 2));
espectadores.push(new Espectador(38, 1));
espectadores.push(new Espectador(31, 1));
espectadores.push(new Espectador(27, 3));
espectadores.push(new Espectador(62, 3));
espectadores.push(new Espectador(12, 2));
espectadores.push(new Espectador(19, 1));
espectadores.push(new Espectador(35, 1));
espectadores.push(new Espectador(35, 1));

function mediaOtimo(x) {
    let a = x.filter((s) => {
        return s.opiniao == 3;
    });

    let media = 0;

    a.forEach(e => {
        media += e.idade
    });

    return (media / a.length).toFixed(0);
};

function qtdeRegular(arr, reg) {
    let a = arr.filter((x) => {
        return x.opiniao == reg;
    });

    return a.length;
};

function porcentagemNotas(totalPessoas, qtdeNotas) {
    return ((qtdeNotas*100) / totalPessoas).toFixed(2);
}

console.log("A média de idade de quem votou Ótimo é: " + mediaOtimo(espectadores));
console.log("A quantidade de pessoas que votaram regular foi: " + qtdeRegular(espectadores, 2));
console.log(porcentagemNotas(espectadores.length, qtdeRegular(espectadores, 2)) + "% votaram que o filme é Bom.");