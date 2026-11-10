const botao = document.querySelector("#buscar");
const mural = document.querySelector("#mural");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", async function () {
   try {
    // Faz a requisição para a API
    const resposta = await fetch (
        "https://jsonplaceholder.typicode.com/posts"
    );
    // Verficia se a resposta foi bem-sucedida
    if (!resposta.ok) {
        throw new Error("Não foi possível consultar a API.");
    }
    //Converte a resposta para um objeto Javascript
    const dados = await resposta.json();
    console.log(dados);
    mural.innerHTML = "";
    //Apresentado na página
    dados.forEach(element => {
        const artigo = document.createElement("article");
        const id = document.createElement("small");
        const titulo = document.createElement("h2");
        const conteudo = document.createElement("p");
        id.textContent = element.id;
        titulo.textContent = element.title;
        conteudo.textContent = element.body;
        artigo.appendChild(id);
        artigo.appendChild(titulo);
        artigo.appendChild(conteudo);
        mural.appendChild(artigo);
    });
   } catch (erro) {
    //Apresenta uma mensagem caso ocorra algum problema
        mensagem.textContent = erro.message;
   } 
});
