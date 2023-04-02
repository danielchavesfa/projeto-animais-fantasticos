export default class TabMenu {
  constructor(galeriaAnimais, animaisConteudo) {
    this.galeriaAnimais = document.querySelectorAll(galeriaAnimais);
    this.animaisConteudo = document.querySelectorAll(animaisConteudo);
    this.activeClass = 'ativo';
  }

  addEventTabMenu() {
    this.galeriaAnimais.forEach((li, index) => {
      li.addEventListener('click', () => {
        this.tabMenu(index);
      });
    });
  }

  tabMenu(index) {
    this.animaisConteudo.forEach((section) => section.classList.remove(this.activeClass));
    this.animaisConteudo[index].classList.add(this.activeClass);
  }

  init() {
    if (this.galeriaAnimais.length && this.animaisConteudo.length) {
      this.tabMenu(0);
      this.addEventTabMenu();
    }
  }
}
