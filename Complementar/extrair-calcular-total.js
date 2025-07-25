const produtos = [
  { nome: "Camiseta", preco: 50, emPromocao: true },
  { nome: "Calça", preco: 100, emPromocao: false },
  { nome: "Tênis", preco: 200, emPromocao: true },
];

// 1. Use filter para pegar apenas os produtos em promoção
// 2. Use map para pegar apenas os preços
// 3. Use reduce para somar o total dos preços


const apenasPromocao = produtos.filter((promocao)=> promocao.emPromocao === true);
 
console.log('Os produtos em promoção são',apenasPromocao);

const apenasPrecos = produtos.map((preco)=> preco.preco);
 
console.log(`Os preços dos produtos: ${apenasPrecos}.`);

const somaPrecos = apenasPrecos.reduce((preco, posicao)=> preco+posicao,0);

console.log(`A soma dos preços dos produtos é: R$${somaPrecos},00.`);

