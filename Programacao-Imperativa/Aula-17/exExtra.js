let producao = [
    {nome:"alface", precoKilo:30,qtdVend:5},
    {nome:"tomate", precoKilo:70,qtdVend:15},
    {nome:"limao", precoKilo:20,qtdVend:1},
    {nome:"soja", precoKilo:90,qtdVend:8}
];

let lucroTotal = (array) => {
    let produto = array.filter(array.nome == "alface");
}

console.log(lucroTotal(producao));