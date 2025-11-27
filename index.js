// Script, site DouglasTech aaaaaa
document.addEventListener('DOMContentLoaded', function() {
    // Menu responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link (mobile)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });

    // Formulário de contato
    const formContato = document.getElementById('form-contato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            if (nome && email && mensagem) {
                // Simulação de envio
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                formContato.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }

    // Botões "Saiba mais" dos produtos
    const botoesSaibaMais = document.querySelectorAll('.btn-saiba-mais');
    botoesSaibaMais.forEach(botao => {
        botao.addEventListener('click', function() {
            const produtoNome = this.closest('.produto-card').querySelector('h3').textContent;
            alert(`Você clicou em "Saiba mais" para o produto: ${produtoNome}`);
        });
    });

    // Efeito de scroll suave para links internos
    const linksInternos = document.querySelectorAll('a[href^="#"]');
    linksInternos.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste para o header fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});