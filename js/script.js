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