export default function fetchBitcoins(url, target) {
  function pegarValorBitcoinEmReais(bitcoin) {
    return (1000 / bitcoin).toFixed(4);
  }

  function adicionarBitcoinNoDom(bitcoin) {
    const btcValor = document.querySelector(target);
    btcValor.textContent = bitcoin;
  }

  async function getFetchBitcoins() {
    try {
      const responseBitcoins = await fetch(url);
      const BitcoinsJSON = await responseBitcoins.json();
      const btcReais = pegarValorBitcoinEmReais(BitcoinsJSON.BRL.sell);
      adicionarBitcoinNoDom(btcReais);
    } catch (error) {
      console.log(new Error(`Um erro inesperado aconteceu:\n${error}`));
    }
  }

  getFetchBitcoins(url);
}
