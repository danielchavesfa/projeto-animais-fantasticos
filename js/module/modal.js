export default function initModal() {
  const newModal = document.createElement('section');
  const mainContainer = document.querySelector('[data-main="container"]');
  const btnLogin = document.querySelector('[data-btn="login"]');

  function removerModal() {
    newModal.remove();
  }

  function criarModal() {
    newModal.dataset.modal = 'container';
    newModal.classList.add('modal-container');
    newModal.innerHTML = `<div class="modal">
                                  <button class="btn-fechar">X</button>
                                  <form action="./" class="modal-form">
                                      <label for="email">Email</label>
                                      <input type="email" name="email" id="email">
                                      <label for="senha">Senha</label>
                                      <input type="password" name="senha" id="senha">
                                      <button type="submit" class="btn-entrar">Entrar</button>
                                  </form>
                                </div>`;

    return mainContainer.appendChild(newModal);
  }

  window.addEventListener('click', (e) => {
    if (e.target === newModal || e.target.className === 'btn-fechar') {
      removerModal();
    }
  });

  if (btnLogin || mainContainer) {
    btnLogin.addEventListener('click', (e) => {
      e.preventDefault();
      criarModal();
    });
  }
}
