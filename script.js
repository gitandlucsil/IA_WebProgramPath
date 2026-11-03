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

let valor = 3;
let resultado = 0;
for (let i = 1; i<=10; i++)
{
    resultado = valor*i;
    console.log(`${valor} x ${i} = ${resultado}`);
    if (resultado % 2 == 0)
    {
        console.log(`${resultado} é par!`);
    }
}