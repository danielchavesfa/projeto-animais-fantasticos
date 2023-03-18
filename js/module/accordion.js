export default function initAccordion(){
    const dts = document.querySelectorAll('.js [data-anima="accordion"] > dt');
    const ativo = 'ativo';
    
    if(dts.length) {
        dts[0].classList.add(ativo);
        dts[0].nextElementSibling.classList.add(ativo);
    
        dts.forEach(dt => {
            dt.addEventListener('click', adicionarAtivo);
        });
    
        function adicionarAtivo(e) {
            e.target.classList.toggle(ativo);
            e.target.nextElementSibling.classList.toggle(ativo);
        }
    }
}