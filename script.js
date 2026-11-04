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

const nomeDev = "André";
const anoNascimento = 1991;
const anoAtual = 2026;
let idade = anoAtual - anoNascimento;
let gostaDeJS = true;
console.log(`Meu nome é ${nomeDev}, tenho ${idade} anos e meu interesse em Javascript é ${gostaDeJS}`);

function calcularProgresso(concluidas, total, caseDecimais) {
    if (total <= 0) {
        return 0;
    }
    return ((concluidas/total) * 100).toFixed(caseDecimais);
}

function calcularMedia(n1, n2, n3)
{
    let media = ((n1 + n2 + n3)/3).toFixed(2);
    console.log(`Média das notas: ${media}`);
    if (media >= 7) {
        console.log(`Aluno aprovado!`);
    } else {
        console.log(`Aluno reprovado!`);
    }
    
}

//const progressoHTML = calcularProgresso(7, 7, 1);
//const progressoCSS = calcularProgresso(5, 7, 1);

//console.log(`HTML: ${progressoHTML}%`);
//console.log(`CSS: ${progressoCSS}%`);

calcularMedia(5, 5, 5);
calcularMedia(6, 8, 8);
calcularMedia(6, 5, 5);