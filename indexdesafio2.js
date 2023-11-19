function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivelJogador;

    if (vitorias < 10) {
        nivelJogador = "Ferro";
    } else if (vitorias <= 20) {
        nivelJogador = "Bronze";
    } else if (vitorias <= 50) {
        nivelJogador = "Prata";
    } else if (vitorias <= 80) {
        nivelJogador = "Ouro";
    } else if (vitorias <= 90) {
        nivelJogador = "Diamante";
    } else if (vitorias <= 100) {
        nivelJogador = "Lendário";
    } else {
        nivelJogador = "Imortal";
    }

    return {
        saldoVitorias: saldoVitorias,
        nivel: nivelJogador
    };
}

let resultado = calcularNivel(100, 50); 

console.log("O Herói tem um saldo de " + resultado.saldoVitorias + " está no nível de " + resultado.nivel);