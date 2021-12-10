function criaAluno(nome, qtdeFaltas, notas) {
    this.nome = nome,
    this.qtdeFaltas = qtdeFaltas,
    this.notas = notas,
    this.calcularMedia = () => {
        let somaNotas = 0;
        this.notas.forEach(nota => {
            somaNotas += nota;
        });

        let qtdNotas = this.notas.length;

        return somaNotas/qtdNotas;
    },
    this.faltas = () => {
        this.qtdeFaltas += 1;
        return this.qtdeFaltas;
    }
}

module.exports = criaAluno;