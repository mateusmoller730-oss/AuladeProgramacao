
// ============================================================
//   ATIVIDADE 13 – Estruturas de Dados: Matriz
// ============================================================


let lerTeclado = require('readline-sync');

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo uma matriz
// ------------------------------------------------------------
// a) Declare a matriz:
// b) Exiba: número de linhas e número de colunas.
// c) Exiba o elemento central (m[1][1]).
// d) Exiba o canto inferior direito (use .length).

let matriz = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

console.log(`Linhas: ${matriz.length}`);
console.log(`Colunas: ${matriz[0].length}`);
console.log(`Elemento central: ${matriz[1][1]}`);
console.log(`Último elemento: ${matriz[matriz.length - 1][matriz[0].length - 1]}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Percorrendo com for aninhado
// ------------------------------------------------------------
// a) Declare a matriz:
// b) Usando dois for aninhados, exiba cada elemento no formato:
//    "m[i][j] = <valor>"
// c) Calcule e exiba a SOMA de todos os elementos da matriz.

const m2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

let soma = 0;

for (let i = 0; i < m2.length; i++) {
  for (let j = 0; j < m2[i].length; j++) {
    console.log(`m[${i}][${j}] = ${m2[i][j]}`);
    soma += m2[i][j];
  }
}

console.log("Soma total:", soma);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor valor
// ------------------------------------------------------------
// a) Utilizando a matriz:
<<<<<<< HEAD
  //  const m = [
  //    [12,  7, 25],
  //    [ 3, 18,  9],
  //    [31, 14, 22],
  //  ];
=======
>>>>>>> e12fd1bdb71bce9140d0a20fad78669efc514fd9
// b) Usando for aninhado, encontre o MAIOR e o MENOR valor da matriz.
// c) Exiba também a posição (linha, coluna) onde cada um está.

const m = [
  [12, 7, 25, 4],
  [3, 18, 9, 5],
  [31, 14, 22, 99],
];

let maior = m[0][0];
let menor = m[0][0];

let linhaMaior = 0;
let colunaMaior = 0;

let linhaMenor = 0;
let colunaMenor = 0;

<<<<<<< HEAD
// for (let i = 0; i < m.length; i++) {
//   for (let j = 0; j < m[i].length; j++) {
for (let i = 0; i < m.length; i++) {       //linha
  for (let j = 0; j < m[i].length; j++) {         //coluna
    
=======
for (let i = 0; i < m.length; i++) {
  for (let j = 0; j < m[i].length; j++) {
>>>>>>> e12fd1bdb71bce9140d0a20fad78669efc514fd9

    if (m[i][j] > maior) {
      maior = m[i][j];
      linhaMaior = i;
      colunaMaior = j;
    }

    if (m[i][j] < menor) {
      menor = m[i][j];
      linhaMenor = i;
      colunaMenor = j;
    }
  }
}

console.log("Maior:", maior);
console.log("Posição do maior:", linhaMaior, colunaMaior);

console.log("Menor:", menor);
console.log("Posição do menor:", linhaMenor, colunaMenor);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Soma das linhas e das colunas
// ------------------------------------------------------------
// a) Use a mesma matriz do Exercício 3.
// b) Exiba a soma de cada LINHA: "Linha <i>: <soma>"
// c) Exiba a soma de cada COLUNA: "Coluna <j>: <soma>"
// d) Exiba a soma da DIAGONAL principal (m[i][i]).

for (let i = 0; i < m.length; i++) {
  let somaLinha = 0;

  for (let j = 0; j < m[i].length; j++) {
    somaLinha += m[i][j];
  }

  console.log("Linha " + i + ": " + somaLinha);
}

for (let j = 0; j < m[0].length; j++) {
  let somaColuna = 0;

  for (let i = 0; i < m.length; i++) {
    somaColuna += m[i][j];
  }

  console.log("Coluna " + j + ": " + somaColuna);
}

let diagonal = 0;

for (let i = 0; i < m.length; i++) {
  diagonal += m[i][i];
}

console.log("Diagonal principal:", diagonal);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente
// ------------------------------------------------------------
// a) Pergunte ao usuário quantas linhas e quantas colunas terá a matriz.
// b) Usando dois for aninhados, peça cada valor:
//    "Digite m[<i>][<j>]: "
// c) Exiba a matriz final com console.table().

let matrizUser = [];

let qlinhas = lerTeclado.questionInt("Quantas linhas tem a matriz? ");
let qcolunas = lerTeclado.questionInt("Quantas colunas tem a matriz? ");

for (let i = 0; i < qlinhas; i++) {
  matrizUser[i] = [];

  for (let j = 0; j < qcolunas; j++) {
    matrizUser[i][j] = lerTeclado.questionInt(`Digite o valor para [${i}][${j}]: `);
  }
}

console.table(matrizUser);

console.log("_______________________________");