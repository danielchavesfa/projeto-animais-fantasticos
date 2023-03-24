export default function initAnimaNumeros() {
    function animaNumeros() {
        const numeros = document.querySelectorAll('[data-numero]');
        let contador = 0;
        
        numeros.forEach(num => {
            const valueNumeros = +num.innerText;
            let incremento = Math.floor(valueNumeros / 100);
            
            const timer = setInterval(() => {
                contador += incremento;
                num.innerText = contador;
                if(contador >= valueNumeros) {
                    num.innerText = valueNumeros;
                    clearInterval(timer);
                }
            }, 50 * Math.random());
        });
    }
    
    
    const targetObservado = document.querySelector('.animal-num');
    const observador = new MutationObserver(mutacao);
    observador.observe(targetObservado, {attributes: true});
    
    function mutacao(mutation) {
        if(mutation[0].target.classList.contains('ativo'))
            animaNumeros();
            observador.disconnect();
    }
}
