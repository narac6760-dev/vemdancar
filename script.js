// Aguarda o carregamento do documento
document.addEventListener('DOMContentLoaded', () => {
    const botoesFiltro = document.querySelectorAll('.btn-filtro');
    const linhasAgenda = document.querySelectorAll('.item-agenda');

    // Sistema Dinâmico de Filtros para a Tabela
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', () => {
            // Remove classe ativa de todos os botões
            botoesFiltro.forEach(b => b.classList.remove('active'));
            // Adiciona classe ativa ao botão clicado
            botao.classList.add('active');

            const categoriaFiltro = botao.getAttribute('data-filter');

            linhasAgenda.forEach(linha => {
                const tipoLinha = linha.getAttribute('data-tipo');

                if (categoriaFiltro === 'todos' || tipoLinha === categoriaFiltro) {
                    linha.style.display = ''; // Mostra a linha (padrão)
                } else {
                    linha.style.display = 'none'; // Esconde a linha
                }
            });
        });
    });
});
