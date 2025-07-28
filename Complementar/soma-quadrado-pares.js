//Giovanne Silveira Henrique


const numeros = [1, 2, 3, 4, 5, 6];

// 1. Use filter para pegar os pares
// 2. Use map para elevar cada um ao quadrado
// 3. Use reduce para somar tudo


const numerosPares = numeros.filter((numero)=> numero % 2 == 0);
 
console.log(`Os números pares são: ${numerosPares}.`);
 
const elevados = numerosPares.map((numero)=> numero * numero);
 
console.log(`Números pares elevados ao quadrado: ${elevados}`);
 
const somaTudo = elevados.reduce((numero,posicao)=> numero + posicao,0);
 
console.log(`A soma de todos os números ao quadrado é: ${somaTudo}`);
 