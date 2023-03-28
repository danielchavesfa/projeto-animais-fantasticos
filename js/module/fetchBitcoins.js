export default function initFetchBitcoins() {

}

const url = 'https://blockchain.info/ticker';

async function fetchBitcoins(url) {
    try {
        const responseBitcoins = await fetch(url);
        const BitcoinsJSON = await responseBitcoins.json();
        const btcReais = pegarValorBitcoinEmReais(BitcoinsJSON.BRL.sell);
        adicionarBitcoinNoDom(btcReais);
        
    } catch(error) {
        console.log(new Error('Um erro inesperado aconteceu. \n' + error));
    }
}

function pegarValorBitcoinEmReais(bitcoin) {
    return (1000 / bitcoin).toFixed(4);
}

function adicionarBitcoinNoDom(bitcoin) {
    const btcValor = document.querySelector('.btc-valor');
    btcValor.textContent = bitcoin;
}

fetchBitcoins(url);