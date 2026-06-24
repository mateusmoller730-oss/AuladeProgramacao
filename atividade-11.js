// ============================================================
//   ATIVIDADE 11 – Interrompendo Laços (break / continue / return)
// ============================================================

let readline = require('readline-sync');

console.log("\n_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 1 – Break simples
// ------------------------------------------------------------
// a) Use um for de 1 a 100.
// b) Exiba cada número.
// c) Quando o número for divisível por 7 E maior que 30, exiba:
//    "Primeiro múltiplo de 7 acima de 30: <número>" e encerre o laço com break.

for (let i = 1; i <= 100; i++) {
  console.log(i);

  if (i % 7 === 0 && i > 30) {
    console.log(`Primeiro múltiplo de 7 acima de 30: ${i}`);
    break;
  }
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Continue: filtrando vogais
// ------------------------------------------------------------
// a) Utilizando o array:
//    const letras = ['a', 'b', 'c', 'e', 'f', 'i', 'k', 'o', 'p', 'u'];
// b) Usando for e continue, exiba apenas as consoantes
// c) Ao final, exiba: "Consoantes exibidas: <quantidade>"

const letras = ['a', 'b', 'c', 'e', 'f', 'i', 'k', 'o', 'p', 'u'];

let contador = 0;

for (let i = 0; i < letras.length; i++) {
    let letra = letras[i];

    if (
        letra === 'a' ||
        letra === 'e' ||
        letra === 'i' ||
        letra === 'o' ||
        letra === 'u'
    ) {
        continue;
    }

    console.log(letra);
    contador++;
}

console.log(`Consoantes exibidas: ${contador}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Return: verificar aprovação
// ------------------------------------------------------------
// a) Dado o array de notas:
// b) Percorra com for.
//    Se encontrar nota menor que 5, retorne mensagem.
// c) Se nenhuma nota for menor que 5, retorne "Aprovado!"

const notasAlunoA = [8, 7, 6.2, 9, 5, 7.5, 9, 8.9, 2.2, 10, 7.4];
const notasAlunoB = [8, 4.5, 6.3, 9];

function verificarAprovacao(notas) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 5) {
            return `Reprovado na nota ${notas[i]} (índice ${i})`;
        }
    }
    return "Aprovado!";
}

console.log(verificarAprovacao(notasAlunoA));
console.log(verificarAprovacao(notasAlunoB));

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Break com input: adivinhe a palavra
// ------------------------------------------------------------
// a) Defina uma palavra secreta.
// b) Use while(true) e break.
// c) Conte tentativas.

let palavraSecreta = "javascript";
let tentativas = 0;

while (true) {
    let palavra = readline.question("Digite a palavra: ");
    tentativas++;

    if (palavra === palavraSecreta) {
        console.log("Parabens! Voce acertou!");
        break;
    }

    console.log("Errou! Tente novamente.");
}

console.log("Voce precisou de " + tentativas + " tentativa(s).");

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Continue com input: somando positivos
// ------------------------------------------------------------
// a) Peça números até digitar 0.
// b) Ignore negativos.
// c) Some positivos e conte.

let soma = 0;
let quantidade = 0;

while (true) {
    let numero = readline.questionInt("Digite um numero (0 para sair): ");

    if (numero === 0) {
        break;
    }

    if (numero < 0) {
        console.log("Ignorando numero negativo.");
        continue;
    }

    soma += numero;
    quantidade++;
}

console.log("Soma dos positivos: " + soma);
console.log("Quantidade de positivos: " + quantidade);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Return: busca em array de objetos
// ------------------------------------------------------------
// a) Dado o array de alunos:
// b) Retorne o primeiro aluno com nota < 5 ou null.

let alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carlos", nota: 9.2 },
  { nome: "Diana", nota: 4.8 },
  { nome: "Eva", nota: 7.1 },
  { nome: "Fernando", nota: 3.8 }
];

function buscarAluno(alunos) {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nota < 5) {
            return alunos[i];
        }
    }
    return null;
}

console.log(buscarAluno(alunos));

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Continue: relatório de vendas
// ------------------------------------------------------------
// a) -1 representa venda cancelada
// b) Ignore com continue
// c) Some válidas e conte
// d) Exiba média

let vendas = [320, -1, 150, -1, 80, 410, -1, 200];

let total = 0;
let quantidadeVendas = 0;

for (let i = 0; i < vendas.length; i++) {
    if (vendas[i] === -1) {
        continue;
    }

    total += vendas[i];
    quantidadeVendas++;
}

let media = total / quantidadeVendas;

console.log("Vendas válidas: " + quantidadeVendas);
console.log("Total arrecadado: R$ " + total);
console.log("Ticket médio: R$ " + media);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Break + continue juntos
// ------------------------------------------------------------
// a) For de 1 a 50
// b) Pule múltiplos de 5
// c) Pare quando soma passar de 200
// d) Exiba progresso

let soma2 = 0;
let iFinal = 0;

for (let i = 1; i <= 50; i++) {

    if (i % 5 === 0) {
        continue;
    }

    soma2 += i;

    console.log(`Somando: ${i} | Acumulado: ${soma2}`);

    if (soma2 > 200) {
        iFinal = i;
        break;
    }
}

console.log(`Laço encerrado em i = ${iFinal} | Soma final: ${soma2}`);

console.log("_______________________________");