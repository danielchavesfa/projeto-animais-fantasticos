import ScrollSuave from './module/scroll-suave.js';
import Accordion from './module/accordion.js';
import TabMenu from './module/tab-menu.js';
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

const accordionList = new Accordion('.js [data-anima="accordion"] > dt');
accordionList.init();

const tabMenu = new TabMenu('.js [data-animais="galeria"] li', '.js [data-animais="conteudo"] section');
tabMenu.init();

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoins();
initAnimaScroll();
