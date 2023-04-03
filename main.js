/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,n)=>{var r=n(698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),s=new A(r||[]);return a(i,"_invoke",{value:k(t,n,s)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var v={};function p(){}function m(){}function y(){}var g={};h(g,c,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(j([])));w&&w!==n&&i.call(w,c)&&(g=w);var L=y.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,a,s,c){var u=d(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==r(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function k(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=M(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=d(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function M(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,M(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=d(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=y,a(L,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:m,configurable:!0}),m.displayName=h(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,h(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},x(E.prototype),h(E.prototype,u,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new E(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),h(L,l,"Generator"),h(L,c,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=j,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,n)=>{var r=n(61)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(i=o.key,a=void 0,a=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),"symbol"===e(a)?a:String(a)),o)}var i,a}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var i=function(){function e(n,r){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===r?{behavior:"smooth",block:"start"}:r,this.scrollToSection=this.scrollToSection.bind(this)}return o(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.target.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),e}(),a=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.ativo="ativo"}return o(e,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.ativo),t.nextElementSibling.classList.toggle(this.ativo)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}]),e}(),s=function(){function e(n,r){t(this,e),this.galeriaAnimais=document.querySelectorAll(n),this.animaisConteudo=document.querySelectorAll(r),this.activeClass="ativo"}return o(e,[{key:"addEventTabMenu",value:function(){var t=this;this.galeriaAnimais.forEach((function(e,n){e.addEventListener("click",(function(){t.tabMenu(n)}))}))}},{key:"tabMenu",value:function(t){var e=this;this.animaisConteudo.forEach((function(t){return t.classList.remove(e.activeClass)})),this.animaisConteudo[t].classList.add(this.activeClass)}},{key:"init",value:function(){return this.galeriaAnimais.length&&this.animaisConteudo.length&&(this.tabMenu(0),this.addEventTabMenu()),this}}]),e}(),c=function(){function e(n,r){t(this,e),this.btnLogin=document.querySelector(n),this.mainContainer=document.querySelector(r),this.newModal=document.createElement("section")}return o(e,[{key:"criarModal",value:function(){return this.newModal.dataset.modal="container",this.newModal.classList.add("modal-container"),this.newModal.innerHTML='<div class="modal">\n                                  <button class="btn-fechar">X</button>\n                                  <form action="./" class="modal-form">\n                                    <label for="email">Email</label>\n                                    <input type="email" name="email" id="email">\n                                    <label for="senha">Senha</label>\n                                    <input type="password" name="senha" id="senha">\n                                    <button type="submit" class="btn-entrar">Entrar</button>\n                                  </form>\n                                </div>',this.mainContainer.appendChild(this.newModal)}},{key:"addEventModal",value:function(){var t=this;this.btnLogin.addEventListener("click",(function(e){e.preventDefault(),t.criarModal()})),window.addEventListener("click",(function(e){e.target!==t.newModal&&"btn-fechar"!==e.target.className||t.newModal.remove()}))}},{key:"init",value:function(){return this.btnLogin&&this.mainContainer&&this.addEventModal(),this}}]),e}(),u=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return o(e,[{key:"criarTooltip",value:function(t){var e=document.createElement("div");e.classList.add("tooltip"),e.innerText=t.getAttribute("aria-label"),document.body.appendChild(e),this.tooltipBox=e}},{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+8,"px"),t.pageX+288>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX-288,"px"):this.tooltipBox.style.left="".concat(t.pageX+8,"px")}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"onMouseOver",value:function(t){this.criarTooltip(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave)}},{key:"addTooltipsEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipsEvent(),this}}]),e}();function l(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){l(i,r,o,a,s,"next",t)}function s(t){l(i,r,o,a,s,"throw",t)}a(void 0)}))}}var f=n(687),d=n.n(f),v=function(){function e(n,r,o){t(this,e),this.numeros=document.querySelectorAll(n),this.observerTarget=document.querySelector(r),this.observerClass=o,this.handleMutation=this.handleMutation.bind(this)}return o(e,[{key:"animaNumeros",value:function(){var t=this;this.numeros.forEach((function(e){return t.constructor.incrementarNumero(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}],[{key:"incrementarNumero",value:function(t){var e=+t.innerText,n=Math.floor(e/100),r=0,o=setInterval((function(){r+=n,t.innerText=r,r>=e&&(t.innerText=e,clearInterval(o))}),50*Math.random())}}]),e}();function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var m=function(){function e(n){t(this,e),this.sections=document.querySelectorAll(n),this.windowHeight=.6*window.innerHeight,this.checkDistance=this.checkDistance.bind(this)}return o(e,[{key:"getDistance",value:function(){var t,e=this;this.distance=(t=this.sections,function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var n=t.offsetTop;return{element:t,offset:Math.floor(n-e.windowHeight)}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),e}();function y(t,e,n){var r=document.documentElement,o="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((function(t){r.removeEventListener(t,i)})),n())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){return r.addEventListener(t,i)}))})),t.setAttribute(o,""))}new i('.js [data-top="menu"] a[href^="#"]').init(),new a('.js [data-anima="accordion"] > dt').init(),new s('.js [data-animais="galeria"] li','.js [data-animais="conteudo"] section').init(),new c('[data-btn="login"]','[data-main="container"]').init(),new u("[data-tooltip]").init(),new m('.js [data-anima="scroll"]').init(),function(t,e){var n=document.querySelector(".numeros-grid");function r(t){var e=function(t){var e=document.createElement("div");return e.classList.add("numeros-animal"),e.innerHTML="<h3>".concat(t.especie,"</h3>\n    <span data-numero>").concat(t.total,"</span>"),e}(t);n.appendChild(e)}function o(){return(o=h(d().mark((function t(){var e;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("./assets/animaisapi.json");case 3:return e=t.sent,t.next=6,e.json();case 6:t.sent.forEach((function(t){return r(t)})),new v("[data-numero]",".animal-num","ativo").init(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(new Error("Um erro inesperado ocorreu: ".concat(t.t0)));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}!function(){o.apply(this,arguments)}()}(),function(t,e){function n(t){document.querySelector(e).textContent=t}function r(){return(r=h(d().mark((function e(){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:n((1e3/e.sent.BRL.sell).toFixed(4)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(new Error("Um erro inesperado aconteceu:\n".concat(e.t0)));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}(t)}("https://blockchain.info/ticker",".btc-valor"),function(){var t=document.querySelectorAll('[data-top="dropdown"]');function e(t){var e=this;t.preventDefault(),this.classList.add("showDropdown"),y(this,["touchstart","click"],(function(){e.classList.remove("showDropdown")}))}t&&t.forEach((function(t){["touchstart","click"].forEach((function(n){t.addEventListener(n,e)}))}))}(),function(){var t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]'),n=["click","touchstart"];function r(){e.classList.add("active"),t.classList.add("active"),t.setAttribute("aria-expanded","true"),y(e,n,(function(){e.classList.remove("active"),t.classList.remove("active"),t.setAttribute("aria-expanded","false")}))}t&&n.forEach((function(e){return t.addEventListener(e,r)}))}(),function(){var t=document.querySelector("[data-semana]");if(t){var e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),r=new Date,o=r.getDay(),i=r.getHours(),a=-1!==e.indexOf(o);i>n[0]&&i<n[1]&&a&&t.classList.add("aberto")}}()})()})();