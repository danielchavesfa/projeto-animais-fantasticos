import AnimaNumeros from './anima-numeros';

export default function fetchAnimais(url, target) {
  function criarContainerAnimal(animal) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('numeros-animal');
    newDiv.innerHTML = `<h3>${animal.especie}</h3>
    <span data-numero>${animal.total}</span>`;
    return newDiv;
  }

  const animaisGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const animalContent = criarContainerAnimal(animal);
    animaisGrid.appendChild(animalContent);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.animal-num', 'ativo');
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (error) {
      console.log(new Error(`Um erro inesperado ocorreu: ${error}`));
    }
  }

  return criarAnimais();
}
