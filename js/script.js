import ScrollSuave from './module/scroll-suave.js';
import Accordion from './module/accordion.js';
import TabMenu from './module/tab-menu.js';
import Modal from './module/modal.js';
import Tooltip from './module/tooltip.js';
import fetchAnimais from './module/fetchAnimais.js';
import fetchBitcoins from './module/fetchBitcoins.js';
import initDropdownMenu from './module/dropdown-menu.js';
import initMenuMobile from './module/menu-mobile.js';
import initFuncionamento from './module/funcionamento.js';
import initAnimaScroll from './module/scroll-animacao.js';

const scrollSuave = new ScrollSuave('.js [data-top="menu"] a[href^="#"]');
scrollSuave.init();

const accordionList = new Accordion('.js [data-anima="accordion"] > dt');
accordionList.init();

const tabMenu = new TabMenu('.js [data-animais="galeria"] li', '.js [data-animais="conteudo"] section');
tabMenu.init();

const modal = new Modal('[data-btn="login"]', '[data-main="container"]');
modal.init();

const toolTip = new Tooltip('[data-tooltip]');
toolTip.init();

fetchAnimais('./assets/animaisapi.json', '.numeros-grid');

fetchBitcoins('https://blockchain.info/ticker', '.btc-valor');

initDropdownMenu();
initMenuMobile();
initFuncionamento();
initAnimaScroll();
