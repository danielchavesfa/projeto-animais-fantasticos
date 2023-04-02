export default class Modal {
  constructor(btnAbrir, containerModal) {
    this.btnLogin = document.querySelector(btnAbrir);
    this.mainContainer = document.querySelector(containerModal);
    this.newModal = document.createElement('section');
  }

  criarModal() {
    this.newModal.dataset.modal = 'container';
    this.newModal.classList.add('modal-container');
    this.newModal.innerHTML = `<div class="modal">
                                  <button class="btn-fechar">X</button>
                                  <form action="./" class="modal-form">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" id="email">
                                    <label for="senha">Senha</label>
                                    <input type="password" name="senha" id="senha">
                                    <button type="submit" class="btn-entrar">Entrar</button>
                                  </form>
                                </div>`;

    return this.mainContainer.appendChild(this.newModal);
  }

  addEventModal() {
    this.btnLogin.addEventListener('click', (e) => {
      e.preventDefault();
      this.criarModal();
    });

    window.addEventListener('click', (e) => {
      if (e.target === this.newModal || e.target.className === 'btn-fechar') {
        this.newModal.remove();
      }
    });
  }

  init() {
    if (this.btnLogin && this.mainContainer) {
      this.addEventModal();
    }
    return this;
  }
}
