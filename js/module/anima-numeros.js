export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementarNumero(numero) {
    const valueNumeros = +numero.innerText;
    const incremento = Math.floor(valueNumeros / 100);
    let contador = 0;

    const timer = setInterval(() => {
      contador += incremento;
      numero.innerText = contador;
      if (contador >= valueNumeros) {
        numero.innerText = valueNumeros;
        clearInterval(timer);
      }
    }, 50 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((num) => this.constructor.incrementarNumero(num));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
