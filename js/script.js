import ScrollSuave from './module/scroll-suave.js';
import initAccordion from './module/accordion.js';
import initTabMenu from './module/tab-menu.js';
import initModal from './module/modal.js';
import initTooltip from './module/tooltip.js';
import initDropdownMenu from './module/dropdown-menu.js';
import initMenuMobile from './module/menu-mobile.js';
import initFuncionamento from './module/funcionamento.js';
import initFetchAnimais from './module/fetchAnimais.js';
import initFetchBitcoins from './module/fetchBitcoins.js';
import initAnimaScroll from './module/scroll-animacao.js';

const scrollSuave = new ScrollSuave('.js [data-top="menu"] a[href^="#"]');
scrollSuave.init();

initAccordion();
initTabMenu();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoins();
initAnimaScroll();
