const formulario = document.querySelector("#form-tarefa");
const inputTarefa = document.querySelector("#input-tarefa");
const listaTarefas = document.querySelector("#lista-tarefas");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const textoTarefa = inputTarefa.value.trim();
    if (textoTarefa !== "") {
        // Cria novo elemento na lista
        const novoItem = document.createElement("li");
        novoItem.textContent = textoTarefa;
        novoItem.classList.add("tarefa-item");
        //Se clicar no <li> inteiro, alterna a classe que risca o texto
        novoItem.addEventListener("click", () => {
            novoItem.classList.toggle("tarefa-concluida");
        })
        // Cria o botao para excluir esse novo item da lista
        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.addEventListener("click", (evento) => {
            // O stopPropagation evita que o clique no botão ative também o clique do <li>,
            evento.stopPropagation();
            novoItem.remove();
        })
        novoItem.appendChild(botaoExcluir);
        listaTarefas.appendChild(novoItem);
        inputTarefa.value = "";
        inputTarefa.focus();
    }
});