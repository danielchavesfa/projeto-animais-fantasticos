export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.date = new Date();
    this.diaSemanaAtual = this.date.getDay();
    this.horaAtual = this.date.getUTCHours() - 3;
  }

  estaAberto() {
    const diaAberto = this.diasSemana.indexOf(this.diaSemanaAtual) !== -1;
    const horarioAberto = this.horaAtual > this.horarioSemana[0]
      && this.horaAtual < this.horarioSemana[1];

    return diaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
