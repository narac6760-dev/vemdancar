
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formMatricula');
    const mensagemSucesso = document.getElementById('mensagemSucesso');

    form.addEventListener('submit', (e) => {
        // Impede a página de recarregar
        e.preventDefault();

        // Captura os dados inseridos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const ritmo = document.getElementById('ritmoSelect').value;

        // Aqui você integraria com um banco de dados ou API futuramente
        console.log('Inscrição Recebida:', { nome, email, ritmo });

        // Exibe o feedback positivo para o usuário
        mensagemSucesso.classList.remove('hidden');
        
        // Limpa os campos preenchidos do formulário
        form.reset();

        // Rola a tela suavemente para a mensagem de sucesso
        mensagemSucesso.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
