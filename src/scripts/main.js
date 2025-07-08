document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector('.hero__container');
    const alturaHero = heroSection ? heroSection.clientHeight : 0;

    // Efeito do header ao rolar
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;
        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    });

    // Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);

            escondeTodasAbas();
            if (aba) {
                aba.classList.add('shows__list--is-active');
            }

            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        });
    }

    // Seção de FAQ, perguntas e respostas
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }

    // Menu hamburguer
    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.querySelector('.header__links').classList.toggle('active');
    });

    // Flip do card ao clicar
    document.querySelectorAll('.card-content').forEach(card => {
        card.addEventListener('click', function () {
            card.classList.toggle('flipped');
        });
    });
});

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

  // Reinicia a página ao carregar (força reload do cache)
    window.onload = function() {
        if (!window.location.hash.includes('reloaded')) {
            window.location.hash = 'reloaded';
            window.location.reload();
        }
    }
