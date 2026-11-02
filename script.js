const metaAulas = 30;
let aulasConcluidas = 17;

const aulasRestantes = metaAulas - aulasConcluidas;
const percentual = (aulasConcluidas/metaAulas) * 100;
const passouDaMetade = aulasConcluidas > metaAulas / 2;
const concluiuCurso = aulasConcluidas === metaAulas;

console.log(`Faltam ${aulasRestantes} aulas.`);
console.log(`Progresso: ${percentual}%`);

if (percentual == 100) {
    console.log("Parabéns! Voce concluiu o curso!");
} else if (percentual >= 50) {
    console.log("Voce já passou da metade do curso!");
} else if (percentual > 0 ) {
    console.log("Continue estudando!");
} else {
    console.log("Vamos começar a estudar?");
}
