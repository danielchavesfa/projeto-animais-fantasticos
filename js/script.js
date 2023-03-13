/* TAB MENU */

function initTabMenu() {
    const galeriaAnimais = document.querySelectorAll('.js .js-animais-galeria li');
    const animaisConteudo = document.querySelectorAll('.js .js-animais-conteudo section');
    
    if(galeriaAnimais.length && animaisConteudo.length) {
        animaisConteudo[0].classList.add('ativo');
        galeriaAnimais.forEach((li, index) => {
            li.addEventListener('click', () => {
                tabMenu(index);
            });
        });
        
        function tabMenu(index) {
            animaisConteudo.forEach(section => section.classList.remove('ativo'));
            animaisConteudo[index].classList.add('ativo');
        }    
    }
}
initTabMenu();

/* ACCORDION LIST */

function initAccordion(){
    const dts = document.querySelectorAll('.js .js-accordion > dt');
    const ativo = 'ativo';
    
    if(dts.length) {
        dts[0].classList.add(ativo);
        dts[0].nextElementSibling.classList.add(ativo);
    
        dts.forEach(dt => {
            dt.addEventListener('click', adicionarAtivo);
        });
    
        function adicionarAtivo(e) {
            e.target.classList.toggle(ativo);
            e.target.nextElementSibling.classList.toggle(ativo);
        }
    }
}
initAccordion();

/* SCROLL SUAVE */

function scrollSuave(){
    const linksInternos = document.querySelectorAll('.js .js-menu a[href^="#"]');
    
    if(linksInternos.length) {
        linksInternos.forEach(link => {
            link.addEventListener('click', scrollToSection);
        });
        
        function scrollToSection(event) {
            event.preventDefault();
            const linkId = event.target.getAttribute('href');
            const section = document.querySelector(linkId);
        
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }
}
scrollSuave();

/* ANIMAÇÃO DO SCROLL */
const sections = document.querySelectorAll('.js .js-scroll');

animaScroll();
window.addEventListener('scroll', animaScroll);

function animaScroll() {
    sections.forEach(section => {

        //pega a distância de cada section para o top do window
        const sectionTop = section.getBoundingClientRect().top;

        //pega 60% da altura da janela que em um monitor 1920x1080
        //daria uma distância de 929px, 60% disso da 557.4px
        const windowHeight = window.innerHeight * 0.6;

        //faz um calculo entre a distância da section para o top
        //menos 60% do tamanho da janela, e verifica ao atingir o
        //limite de 0px
        const verificarAtivacao = sectionTop - windowHeight < 0;
        if(verificarAtivacao) {

            //add classe ativo quando a section passar de -1px do top
            section.classList.add('ativo');
        } else {
            
            //remove a classe ativo quando a section passar de 0px do top
            section.classList.remove('ativo');
        }
    });
}