import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(btnMenu, menuList, events) {
    this.btnMenu = document.querySelector(btnMenu);
    this.menuList = document.querySelector(menuList);

    this.activeClass = 'active';

    this.mostrarMenu = this.mostrarMenu.bind(this);

    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
  }

  mostrarMenu() {
    this.menuList.classList.add(this.activeClass);
    this.btnMenu.classList.add(this.activeClass);
    this.btnMenu.setAttribute('aria-expanded', 'true');
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.btnMenu.classList.remove(this.activeClass);
      this.btnMenu.setAttribute('aria-expanded', 'false');
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((userEvent) => this.btnMenu.addEventListener(userEvent, this.mostrarMenu));
  }

  init() {
    if (this.btnMenu && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
