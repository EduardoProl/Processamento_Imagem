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

    // Inicializando o CodeMirror para cada textarea
    const textareas = document.querySelectorAll('.codeBox');
    const editors = Array.from(textareas).map((textarea) => 
        CodeMirror.fromTextArea(textarea, {
            lineNumbers: true,
            mode: "python", // Defina o modo de sintaxe (exemplo: Python)
            theme: "dracula", // Escolha um tema (exemplo: dracula)
            readOnly: true, // Torna o editor somente leitura
        })
    );

    // Copiar código para a área de transferência
    const copyButtons = document.querySelectorAll('.copyButton'); // Agora pegamos todos os botões com a classe .copyButton

    copyButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const code = editors[index].getValue(); // Pega o valor do editor correspondente
            navigator.clipboard.writeText(code) // Copia o texto do editor
                .then(() => {
                    alert('Copiado!'); // Alerta de sucesso
                })
                .catch(err => {
                    console.error('Erro a copiar:', err); // Log de erro
                });
        });
    });
});


    // Evitar que links internos sejam adicionados ao histórico
    const noHistoryLinks = document.querySelectorAll('a[href^="#"]'); // Selecionar todos os links com âncoras
    noHistoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impedir o comportamento padrão do link
            const targetId = link.getAttribute('href'); // Obter o destino do link
            const targetElement = document.querySelector(targetId); // Selecionar o elemento de destino
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Rolar suavemente até o destino
            }
            
            // Atualizar a URL sem adicionar ao histórico
            history.replaceState(null, '', targetId);
        });
    });
