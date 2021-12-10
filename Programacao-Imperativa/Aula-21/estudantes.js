let criaAlunos = require('./aluno');

let listaAlunos = [];

listaAlunos.push(new criaAlunos("rafael vasconcelos", 1, [10, 8, 7]));
listaAlunos.push(new criaAlunos("glauber silva", 2, [7, 8, 5]));
listaAlunos.push(new criaAlunos("michel nunes", 1, [9, 6, 3]));
listaAlunos.push(new criaAlunos("juliane lima", 2, [4, 3, 6]));
listaAlunos.push(new criaAlunos("lucas johann", 1, [5, 7, 10]));
listaAlunos.push(new criaAlunos("pablo gonçalves", 2, [8, 8, 9]));

module.exports = listaAlunos;