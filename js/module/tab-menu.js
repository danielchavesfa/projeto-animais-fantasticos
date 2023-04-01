export default function initTabMenu() {
  const galeriaAnimais = document.querySelectorAll('.js [data-animais="galeria"] li');
  const animaisConteudo = document.querySelectorAll('.js [data-animais="conteudo"] section');

  function tabMenu(index) {
    animaisConteudo.forEach((section) => section.classList.remove('ativo'));
    animaisConteudo[index].classList.add('ativo');
  }

  if (galeriaAnimais.length && animaisConteudo.length) {
    animaisConteudo[0].classList.add('ativo');
    galeriaAnimais.forEach((li, index) => {
      li.addEventListener('click', () => {
        tabMenu(index);
      });
    });
  }
}
