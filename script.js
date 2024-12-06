document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos principais
    const sideNav = document.getElementById('sideNav');
    const menuButton = document.getElementById('menuButton');

    // Alternar menu lateral (abrir/fechar)
    menuButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita o fechamento do menu ao clicar no botão
        sideNav.classList.toggle('open'); // Alterna a classe 'open' para abrir/fechar o menu
    });

    // Fechar o menu ao clicar fora do menu ou botão
    document.addEventListener('click', (e) => {
        // Verifica se o clique foi fora do menu e do botão
        if (!sideNav.contains(e.target) && !menuButton.contains(e.target) && sideNav.classList.contains('open')) {
            sideNav.classList.remove('open'); // Remove a classe 'open' para fechar o menu
        }
    });

    // Rolar suavemente até a seção de código
    const links = document.querySelectorAll('a[href^="#codeSection"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Previne o comportamento padrão do link
            const targetId = e.target.getAttribute('href').substring(1); // Pega o ID da seção de código
            const targetSection = document.getElementById(targetId); // Encontra a seção correspondente
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Fechar o menu automaticamente após a navegação
            if (sideNav.classList.contains('open')) {
                sideNav.classList.remove('open'); // Fecha o menu quando o link é clicado
            }
        });
    });

    // Copiar código para a área de transferência
    const copyButtons = document.querySelectorAll('.copyButton'); // Agora pegamos todos os botões com a classe .copyButton

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const codeBox = button.previousElementSibling; // Pega o textarea correspondente ao botão
            navigator.clipboard.writeText(codeBox.value) // Copia o texto da caixa de código
                .then(() => {
                    alert('Code copied to clipboard!'); // Alerta de sucesso
                })
                .catch(err => {
                    console.error('Failed to copy text:', err); // Log de erro
                });
        });
    });
});
