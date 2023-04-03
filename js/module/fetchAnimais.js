import AnimaNumeros from './anima-numeros';

export default function initFetchAnimais() {
  const animaisGrid = document.querySelector('.numeros-grid');

  function criarContainerAnimal(animal) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('numeros-animal');
    newDiv.innerHTML = `<h3>${animal.especie}</h3>
                            <span data-numero>${animal.total}</span>`;
    return newDiv;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach((animal) => {
        const animalContent = criarContainerAnimal(animal);
        animaisGrid.appendChild(animalContent);
      });
      const animaNumeros = new AnimaNumeros('[data-numero]', '.animal-num', 'ativo');
      animaNumeros.init();
    } catch (error) {
      console.log(new Error(`Um erro inesperado ocorreu: ${error}`));
    }
  }

  fetchAnimais('./assets/animaisapi.json');
}
