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
                alert('Mensagem enviada com sucesso! Nós entraremos em contato em breve.');
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

// Carrossel automático
const slides = document.querySelectorAll('.carrossel-slide');
const indicadores = document.querySelectorAll('.indicador');
let indiceSlide = 0;

function mostrarSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicadores.forEach(ind => ind.classList.remove('active'));
    slides[index].classList.add('active');
    // Se existir indicador correspondente, ativa ele também
    if (indicadores[index]) {
        indicadores[index].classList.add('active');
    }
}

function proximoSlide() {
    indiceSlide++;
    if (indiceSlide >= slides.length) {
        indiceSlide = 0;
    }
    mostrarSlide(indiceSlide);
}

// Armazena o ID do intervalo e torna os indicadores clicáveis para navegar aos slides
let intervaloCarrossel = null;

// Torna os indicadores clicáveis para navegar aos slides
indicadores.forEach((indicador, i) => {
    indicador.addEventListener('click', () => {
        indiceSlide = i;
        mostrarSlide(indiceSlide);
        // Reinicia o intervalo para evitar mudança imediata após o clique
        clearInterval(intervaloCarrossel);
        intervaloCarrossel = setInterval(proximoSlide, 6000);
    });
});

// Troca a cada 8 segundos (armazena o ID para reiniciar quando o usuário interagir)
intervaloCarrossel = setInterval(proximoSlide, 6000);

// Mostrar primeiro slide
mostrarSlide(indiceSlide);
});