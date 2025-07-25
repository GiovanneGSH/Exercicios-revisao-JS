const pessoas = [
  { nome: "Ana", idade: 17 },
  { nome: "João", idade: 21 },
  { nome: "Carlos", idade: 16 },
  { nome: "Mariana", idade: 25 }
];

// 1. Use filter para pegar quem tem 18 ou mais
// 2. Use map para extrair as idades
// 3. Use reduce para somar e calcular a média


const maioresDeIdade = pessoas.filter((pessoa)=> pessoa.idade >= 18);
 
console.log("Os maiores de idade são:",maioresDeIdade);
 
const somenteIdade = pessoas.map((idade)=> idade.idade);
 
console.log(`As idades das pessoas são: ${somenteIdade}.`);
 
const mediaIdades = somenteIdade.reduce((idade, posicao)=> (idade+posicao) / 4,0);
 
console.log(`A média das idades é: ${mediaIdades.toFixed(2)}`);