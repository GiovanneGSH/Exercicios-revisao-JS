//Giovanne Silveira Henrique

const numeros = [10, 50, 30, 90, 20];

// Use .reduce para encontrar o maior número.

const numeroMaior = numeros.reduce((numero, numeroatual)=>{return numero > numeroatual? numero:numeroatual;},0);

console.log(numeroMaior);

