import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-top="dropdown"]');

  function handleClick(e) {
    e.preventDefault();
    this.classList.add('showDropdown');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('showDropdown');
    });
  }

  if (dropdownMenus) {
    dropdownMenus.forEach((dropdownMenu) => {
      ['touchstart', 'click'].forEach((thisEvent) => {
        dropdownMenu.addEventListener(thisEvent, handleClick);
      });
    });
  }
}
