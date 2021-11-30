function somar(a,b) {
    return a + b;
}

let somarArrow = (a,b) => a + b;

console.log(somar(2,5));
console.log(somarArrow(5,3));

let dobro = a => "O dobro de " + a + " é " + a * 2;

console.log(dobro(4));

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ':' + data.getMinutes();
}

console.log(horaAtual());

setTimeout( function() {
    console.log('Olá mundo!')
} , 1000);

function nomeCompleto(nome, sobrenome) {
    return nome + ' ' + sobrenome;
}

function bomDia(nome, sobrenome, callback) {
    return 'Olá ' + callback(nome, sobrenome);
}

console.log(bomDia('Rafael', 'Vasconcelos', nomeCompleto));