const pessoas = [
  { nome: "Ana", idade: 17 },
  { nome: "João", idade: 21 },
  { nome: "Carlos", idade: 16 },
  { nome: "Mariana", idade: 25 }
];

// Use .filter para retornar apenas as pessoas com 18 anos ou mais.

const maiorIdade = pessoas.filter((maior)=>maior.idade>=18);

console.log(maiorIdade);