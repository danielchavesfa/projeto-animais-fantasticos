export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]');
    
    if(funcionamento) {
        const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
        const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
        
        const date = new Date();
        const diaSemanaAtual = date.getDay();
        const horaAtual = date.getHours();
        
        const diaAberto = diasSemana.indexOf(diaSemanaAtual) !== -1;
        const horarioAberto = horaAtual > horarioSemana[0] &&  horaAtual < horarioSemana[1];
        const verificacaoAberto = funcionamento.classList.contains('aberto');
        
        if(horarioAberto && diaAberto) {
            verificacaoAberto ? null : funcionamento.classList.add('aberto');
        } else {
            verificacaoAberto ? funcionamento.classList.remove('aberto') : null;
        }
    }
}