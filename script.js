/*const metaAulas = 30;
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

const calcularMediaArrow = (n1, n2, n3) => {
    let media = ((n1 + n2 + n3)/3).toFixed(2);
    let status = "reprovado";
    //console.log(`Média das notas: ${media}`);
    if (media >= 7.0) {
        status = "aprovado";
    } 
    formatarMensagem("André", status, media);
}

const formatarMensagem = (nome, status, média) => {
    console.log(`O aluno ${nome}, foi ${status} com a média ${média}`);
}

//const progressoHTML = calcularProgresso(7, 7, 1);
//const progressoCSS = calcularProgresso(5, 7, 1);

//console.log(`HTML: ${progressoHTML}%`);
//console.log(`CSS: ${progressoCSS}%`);

calcularMediaArrow(5, 5, 5);
calcularMediaArrow(6, 8, 8);
calcularMediaArrow(6, 5, 5);

const assuntos = ["HTML", "CSS", "Javascript"];
assuntos.push("Flexbox");
assuntos.push("Grid");
console.log(assuntos.includes("Javascript"));
assuntos.forEach(function(assunto, indice) {
    console.log(`${indice}: ${assunto}`);
});
assuntos.pop();
console.log(assuntos);

const projeto = {
    nome: "Site para Web",
    descricao: "Aulas para treinamento e aprendizado de programação web",
    tecnologias: ["JS", "HTML", "CSS"],
    concluido: false
}

console.log(`Nome do curso ${projeto.nome} e descrição ${projeto.descricao}`);
projeto.tecnologias.push("React");
projeto.concluido = true;
console.log(projeto)

projeto.tecnologias.forEach(function(tecnologia) {
    console.log(tecnologia)
});
projeto["tecnologias"].forEach(function(tecnologia) {
    console.log(tecnologia)
});*/

// Selecionando elementos individuais com querySelector
const tituloPrincipal = document.querySelector("header h1");
const fotoPerfil = document.querySelector("#foto-perfil");
const primeiroCard = document.querySelector(".card-projeto");

// Selecionando múltiplos elementos com querySelectorAll
const linksHeader = document.querySelectorAll("header nav ul li a");

// Imprimindo os elementos no console para inspeção
console.log("Título Principal:", tituloPrincipal);
console.log("Foto de Perfil:", fotoPerfil);
console.log("Primeiro Card:", primeiroCard);
console.log("Lista de Links do Header:", linksHeader);

tituloPrincipal.textContent = "Portfólio interativo da Web";
primeiroCard.classList.add("card-destaque");
const primeiroCardText = primeiroCard.querySelector("p");
primeiroCardText.textContent = "Este projeto teve seu texto atualizado dinamicamente com JavaScript!";
//tituloPrincipal.style.color = "#27ae60";
//tituloPrincipal.classList.add("destaque-titulo")
