const formulario = document.querySelector("#form-tarefa");
const inputTarefa = document.querySelector("#input-tarefa");
const listaTarefas = document.querySelector("#lista-tarefas");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const textoTarefa = inputTarefa.value.trim();
    if (textoTarefa !== "") {
        const novoItem = document.createElement("li");
        novoItem.textContent = textoTarefa;
        listaTarefas.appendChild(novoItem);
        inputTarefa.value = "";
        inputTarefa.focus();
    }
});