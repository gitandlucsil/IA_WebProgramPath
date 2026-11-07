//Objeto com os dados do projeto
const projeto = {
    nome: "Document Object Mode",
    descricao: "É a representalção da página HTML em uma estrutura de objetos que o JS consegue acessar e modificar",
    tecnologias: ["JS", "HTML", "CSS"]
}
//Seleciona os elementos HTML
const titulo = document.querySelector("#titulo");
const descricao = document.querySelector("#descricao");
const lista = document.querySelector("#lista-tecnologias");
//Insere os dados do objeto na página
titulo.textContent = projeto.nome;
descricao.textContent = projeto.descricao;
// Percorre o array de tecnologias
projeto.tecnologias.forEach(function(tecnologia){
    // Cria um novo elemento <li>
    const item = document.createElement("li");
    // Define o texto do elemento
    item.textContent = tecnologia;
    // Adiciona o <li> dentro da lista <ul>
    lista.appendChild(item);
});
//Adiciona uma classe CSS ao titulo
titulo.classList.add("destaque");