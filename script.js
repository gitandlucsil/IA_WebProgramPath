const metaAulas = 30;
let aulasConcluidas = 15;

const aulasRestantes = metaAulas - aulasConcluidas;
const percentual = (aulasConcluidas/metaAulas) * 100;
const passouDaMetade = aulasConcluidas > metaAulas / 2;
const concluiuCurso = aulasConcluidas === metaAulas;

console.log(`Faltam ${aulasRestantes} aulas.`);
console.log(`Progresso: ${percentual}%`);
console.log(`Passou da metade? ${passouDaMetade}`);
console.log(`Concluiu o curso? ${concluiuCurso}`);