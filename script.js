document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formCadastro");
    const tabelaAlunos = document.getElementById("tabelaAlunos").getElementsByTagName("tbody")[0];

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const nota1 = parseFloat(document.getElementById("nota1").value);
        const nota2 = parseFloat(document.getElementById("nota2").value);

        // Validação dos campos
        if (!nome || isNaN(nota1) || isNaN(nota2)) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        // Calculando a média
        const media = (nota1 + nota2) / 2;
        const status = media >= 6 ? "Aprovado" : "Reprovado";
        const statusClass = media >= 6 ? "aprovado" : "reprovado";

        // Adicionando o aluno na tabela
        const row = tabelaAlunos.insertRow();
        row.classList.add(statusClass);

        row.innerHTML = `
            <td>${nome}</td>
            <td>${nota1}</td>
            <td>${nota2}</td>
            <td>${media.toFixed(1)}</td>
            <td>${status}</td>
        `;

        // Limpando os campos do formulário
        form.reset();
    });
});