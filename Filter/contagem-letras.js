const palavras = ["gato", "elefante", "sol", "girassol"];

// Use .filter para obter apenas as palavras com mais de 5 letras.

const contaPalavras = palavras.filter((palavra)=>palavra.length > 5);

console.log(contaPalavras);