const texto = document.querySelector("#input-cep");
const botao = document.querySelector("#btn-buscar");
const resultadoEndereco = document.querySelector("#resultado-endereco");

botao.addEventListener("click", async() => {
    const inputCep = texto.value.trim();
    if (inputCep !== "") {
        const url = `https://viacep.com.br/ws/${inputCep}/json/`
        const resposta = await fetch(url);
        const dados = await resposta.json();
        console.log(`Endereço: ${dados.logradouro}, ${dados.bairro}`);
        resultadoEndereco.innerHTML = `
            <p><strong>Rua:</strong> ${dados.logradouro}</p>
            <p><strong>Bairro:</strong> ${dados.bairro}</p>
            <p><strong>Cidade:</strong> ${dados.localidade} - ${dados.uf}</p>
        `;
    }
});