import ScrollSuave from './module/scroll-suave.js';
import Accordion from './module/accordion.js';
import TabMenu from './module/tab-menu.js';
import Modal from './module/modal.js';
import Tooltip from './module/tooltip.js';
import fetchAnimais from './module/fetchAnimais.js';
import fetchBitcoins from './module/fetchBitcoins.js';
import ScrollAnima from './module/scroll-anima.js';
import DropdownMenu from './module/dropdown-menu.js';
import MenuMobile from './module/menu-mobile.js';
import Funcionamento from './module/funcionamento.js';
import { SlideNav } from './module/slide.js';

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

const scrollAnima = new ScrollAnima('.js [data-anima="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-top="dropdown"]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

fetchAnimais('./assets/animaisapi.json', '.numeros-grid');

fetchBitcoins('https://blockchain.info/ticker', '.btc-valor');

const slide = new SlideNav('.slide-wrapper', '.slide');
slide.init();
slide.addControl('.custom-controls');
slide.onResize();
