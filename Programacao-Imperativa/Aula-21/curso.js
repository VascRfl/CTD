let criaAlunos = require('./aluno');
let listaAlunos = require("./estudantes");

let curso = {
    nomeCurso: "CTD",
    notaAprov: 6,
    faltaMax: 3,
    alunos: listaAlunos,
    addAluno: function (nome, faltas, notas) {
        let novo = new criaAlunos(nome, faltas, notas);
        listaAlunos.push(novo);
    },
    aprovado: function (aluno) {
        for (let i = 0; i < listaAlunos.length; i++) {
            if (aluno == listaAlunos[i].nome) {

                let qtdFaltas = listaAlunos[i].qtdeFaltas;
                let mediaAluno = listaAlunos[i].calcularMedia();

                if ((mediaAluno >= this.notaAprov) && (qtdFaltas < this.faltaMax)) {
                    return true;
                } else if (qtdFaltas == this.faltaMax) {
                    if (mediaAluno >= (this.notaAprov / 10) + this.notaAprov) {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            }
        }
    },
    resultadoAlunos: () => {
        return listaAlunos.map((item) => {
            return (
                (item.calcularMedia() >= this.notaAprov && item.qtdeFaltas < this.faltaMax) && 
                (item.qtdeFaltas === this.faltaMax && item.calcularMedia() >= this.notaAprov * 1.1)
            );
        });
    }
}


curso.addAluno("joao", 7, [10, 10, 10]);
console.log(curso.aprovado("rafael vasconcelos"));
console.log(curso.resultadoAlunos());