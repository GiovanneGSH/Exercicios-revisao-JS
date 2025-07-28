//Giovanne Silveira Henrique

const numeros = [10, 20, 30, 40];

// Use .reduce para somar todos os números do array.


const somaNumeros = numeros.reduce((numero, numeroatual)=> numero + numeroatual,0);

console.log(somaNumeros);