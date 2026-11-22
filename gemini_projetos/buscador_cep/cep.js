const texto = document.querySelector("#input-cep");
const botao = document.querySelector("#btn-buscar");
const resultadoEndereco = document.querySelector("#resultado-endereco");

botao.addEventListener("click", async() => {
    try {
        const inputCep = texto.value.trim();
        if (inputCep.length !== 8) {
            resultadoEndereco.textContent = "Digite um CEP válido com 8 números";
            resultadoEndereco.style.color = "#e74c3c";
            return;
        } else {
            resultadoEndereco.textContent = "Buscando endereço...";
            resultadoEndereco.style.color = "inherit";
            const url = `https://viacep.com.br/ws/${inputCep}/json/`
            const resposta = await fetch(url);
            if (!resposta.ok) {
                throw new Error("Falha na conexão com o servidor.");
            }
            const dados = await resposta.json();
            if (dados.erro) {
                throw new Error("CEP não encontrado na base de dados.");
            }
            console.log(`Endereço: ${dados.logradouro}, ${dados.bairro}`);
            resultadoEndereco.innerHTML = `
                <p><strong>Rua:</strong> ${dados.logradouro}</p>
                <p><strong>Bairro:</strong> ${dados.bairro}</p>
                <p><strong>Cidade:</strong> ${dados.localidade} - ${dados.uf}</p>
            `;
        }
    } catch (erro) {
        resultadoEndereco.textContent = `Atenção: ${erro.message}`;
        resultadoEndereco.style.color = "#e74c3c";
    } 
});