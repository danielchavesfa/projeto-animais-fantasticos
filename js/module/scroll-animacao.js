export default function initAnimaScroll() {
    const sections = document.querySelectorAll('.js [data-anima="scroll"]');

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
            } else if(section.classList.contains('ativo')) {
                
                //remove a classe ativo quando a section passar de 0px do top
                section.classList.remove('ativo');
            }
        });
    }
}