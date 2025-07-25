const letras = ['a', 'b', 'a', 'c', 'b', 'a'];

// Use .reduce para retornar um objeto com a contagem de cada letra.
// Ex: { a: 3, b: 2, c: 1 }

const contaLetra = letras.reduce((conta, letra) => {
    conta[letra] = conta[letra] ? conta[letra] + 1 : 1;
    return conta;
  },{});
   
  console.log(contaLetra);

