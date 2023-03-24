import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
    const btnMenu = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const events = ['click', 'touchstart'];
    
    if(btnMenu && menuList) {
        function mostrarMenu() {
            menuList.classList.add('active');
            btnMenu.classList.add('active');
            btnMenu.setAttribute('aria-expanded', 'true');
            outsideClick(menuList, events, () => {
                menuList.classList.remove('active');
                btnMenu.classList.remove('active');
                btnMenu.setAttribute('aria-expanded', 'false');
            });
        }

        events.forEach(userEvent => btnMenu.addEventListener(userEvent, mostrarMenu));
    }
}

