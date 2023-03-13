const galeriaAnimais = document.querySelectorAll('.js .js-animais-galeria li');
const animaisConteudo = document.querySelectorAll('.js .js-animais-conteudo section');
animaisConteudo[0].classList.add('ativo');

if(galeriaAnimais.length && animaisConteudo.length) {
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