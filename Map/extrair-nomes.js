//Giovanne Silveira Henrique

const usuarios = [
  { nome: "Ana", idade: 20 },
  { nome: "João", idade: 25 },
  { nome: "Carlos", idade: 30 }
];

// Use .map para criar um array apenas com os nomes.

const apenasNomes = usuarios.map((nome)=>nome.nome);

console.log(apenasNomes);