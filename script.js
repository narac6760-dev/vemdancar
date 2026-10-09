
// MENU MOBILE RESPONSIVO
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('open');
});

// FECHAR MENU AO CLICAR EM UM LINK
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// FORMULÁRIO DE AGENDAMENTO INTERATIVO
const formAgendamento = document.getElementById('form-agendamento');
const msgSucesso = document.getElementById('msg-sucesso');

if (formAgendamento) {
    formAgendamento.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Exibe mensagem de confirmação
        msgSucesso.classList.remove('hidden');
        
        // Limpa o formulário após 4 segundos
        setTimeout(() => {
            formAgendamento.reset();
            msgSucesso.classList.add('hidden');
        }, 4000);
    });
}
