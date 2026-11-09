const formulario = document.querySelector("form");
const nome = document.querySelector("#nome");
const mensagem = document.querySelector("#mensagem");
const mensagemResultado = document.querySelector("#mensagem-resultado");

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //Impede o recarregamento automático da página
    const valorNome = nome.value.trim();
    const mensagemValor = mensagem.value.trim();
    mensagemResultado.style.color = "#800000";
    if (valorNome === "") {
        mensagemResultado.textContent = "Erro: O campo nome não pode estar vazio!"
    } else if (mensagemValor.length < 15) {
        mensagemResultado.textContent = "A mensagem deve conter mais que 15 chars!";
    } else {
        mensagemResultado.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
        mensagemResultado.style.color = "#27ae60";
        formulario.reset();
    }
});