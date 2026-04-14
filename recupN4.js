// ============================================================
// RECUPERAÇÃO – ATIVIDADE AVALIATIVA N4
// ============================================================
//
//  Instruções Gerais:
//  • NÃO utilize funções (function) nem laços de repetição (for, while, do/while), nem estruturas de controle (if/else, switch/case).
//  • Utilize readline-sync para entrada de dados.
//  • O código deve ser elaborado individualmente. Códigos identicos serão considerados plágio (nota 0).
//
// ============================================================


// Você vai criar a estrutura de dados de uma loja de games.
// Todos os dados dos passos A e B devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A: Variáveis da loja
//   • Colete os dados para as seguintes variáveis/constantes:
//       - "nomeLoja"        (string)  → nome da loja
//       - "anoDeAbertura"   (number)  → ano de abertura
//       - "capacidadeJogos" (number)  → quantidade máxima de jogos no estoque
//       - "lojaAberta"      (boolean) → true ou false
//   • Exiba todas usando template literal em uma única frase descritiva.
//
// PASSO B: Catálogo de jogos (array de objetos)
//   • Crie um array chamado "catalogo" com 3 objetos de jogos.
//     Cada jogo deve ter:
//       - titulo      (string)
//       - plataforma  (string)   ex: "PS5", "Xbox", "PC"
//       - preco       (number)
//       - avaliacao   (number)   nota de 0 a 10
//       - emEstoque   (boolean)
//
// PASSO C: Acessando o catálogo
//   • Exiba o título do 1º jogo.
//   • Exiba a plataforma do 2º jogo.
//   • Exiba o preço do 3º jogo.
//   • Exiba a quantidade total de jogos no catálogo (.length).
//
// PASSO D: Alterando o catálogo
//   • Marque o 2º jogo como fora de estoque (emEstoque = false).
//   • Atualize o preço do 1º jogo para um novo valor.
//   • Adicione um 4º jogo ao array "catalogo" usando push(),
//     criando o objeto diretamente dentro do push (sem necessidade de coletar esse dado via terminal).
//
// PASSO E: Plataformas disponíveis (array de strings)
//   • Crie um array "plataformas" com: "PS5", "Xbox Series X", "Nintendo Switch", "PC".
//   • Exiba a primeira e a última plataforma.
//   • Adicione "Mobile" ao final de "plataformas".
//   • Remova a primeira plataforma de "plataformas".
//   • Exiba o array "plataformas".
//
// PASSO F: Relatório final
//   • Usando template literals, exiba um relatório/frase com:
//       - Nome e ano de abertura da loja
//       - Quantidade de jogos no catálogo
//       - Quantidade de plataformas disponíveis
//       - Título, plataforma e preço de CADA jogo do catálogo (um jogo por linha)

// → Seu código aqui:



let readline = require('readline-sync');

//A

let nomeLoja = readline.question("Digite o nome da loja: ");
let anoDeAbertura = readline.questionInt("Digite o ano de abertura: ");
let capacidadeJogos = readline.questionInt("Digite a capacidade maxima de jogos: ");
let lojaAberta = readline.keyInYN("A loja esta aberta? ");

console.log(`A loja ${nomeLoja}, fundada em ${anoDeAbertura}, possui capacidade para ${capacidadeJogos} jogos e atualmente esta ${lojaAberta ? "aberta" : "fechada"}.`);


//B

let catalogo = [
  {
    titulo: "God of War",
    plataforma: "PS5",
    preco: 199.90,
    avaliacao: 9.5,
    emEstoque: true
  },
  {
    titulo: "Halo Infinite",
    plataforma: "Xbox Series X",
    preco: 149.90,
    avaliacao: 8.5,
    emEstoque: true
  },
  {
    titulo: "Minicraft",
    plataforma: "PC",
    preco: 79.90,
    avaliacao: 10,
    emEstoque: true
  }
];


// C

console.log("Titulo do jogo 1:", catalogo[0].titulo);
console.log("Plataforma do jogo 2:", catalogo[1].plataforma);
console.log("Preco do jogo 3:", catalogo[2].preco);
console.log("Quantidade total de jogos:", catalogo.length);


//D

catalogo[1].emEstoque = false;
catalogo[0].preco = readline.questionFloat("Novo preco para o jogo 1: ");

catalogo.push({
  titulo: "Jogo Bonus",
  plataforma: "PC",
  preco: 99.99,
  avaliacao: 8,
  emEstoque: true
});


//E

let plataformas = ["PS5", "Xbox Series X", "Nintendo Switch", "PC"];

console.log("Primeira plataforma:", plataformas[0]);
console.log("Ultima plataforma:", plataformas[plataformas.length - 1]);

plataformas.push("Mobile");
plataformas.shift();

console.log("Plataformas:", plataformas);


//F

console.log(`
Relatorio Final:
Loja: ${nomeLoja} (aberta em ${anoDeAbertura})
Total de jogos: ${catalogo.length}
Total de plataformas: ${plataformas.length}

Jogo 1: ${catalogo[0].titulo} - ${catalogo[0].plataforma} - R$ ${catalogo[0].preco}
Jogo 2: ${catalogo[1].titulo} - ${catalogo[1].plataforma} - R$ ${catalogo[1].preco}
Jogo 3: ${catalogo[2].titulo} - ${catalogo[2].plataforma} - R$ ${catalogo[2].preco}
Jogo 4: ${catalogo[3].titulo} - ${catalogo[3].plataforma} - R$ ${catalogo[3].preco}
`);