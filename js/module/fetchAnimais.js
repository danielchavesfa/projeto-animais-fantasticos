import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
    const url = './assets/animaisapi.json';
    const animaisGrid = document.querySelector('.numeros-grid');
    
    if(url && animaisGrid) {
        async function fetchAnimais(url) {
            try {
                const animaisResponse = await fetch(url);
                const animaisJSON = await animaisResponse.json();
            
                animaisJSON.forEach(animal => {
                    const animalContent = criarContainerAnimal(animal);
                    animaisGrid.appendChild(animalContent);
                });
                initAnimaNumeros();
            } catch(error) {
                console.log(new Error('Um erro inesperado aconteceu.\n' + error));
            }
        }
        
        function criarContainerAnimal(animal) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('numeros-animal');
            newDiv.innerHTML = `<h3>${animal.especie}</h3>
                                <span data-numero>${animal.total}</span>`;
            return newDiv;
        }    
    
        fetchAnimais(url);
    }
}