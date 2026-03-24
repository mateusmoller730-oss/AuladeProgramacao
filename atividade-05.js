// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let lerTeclado = require('readline-sync');
// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:

// let comparacao01 = 10 == 10
// console.log(comparacao01)

// let comparacao02 = 10 === 10
// console.log(comparacao02)

// let comparacao03 = 10 == "10"
// console.log(comparacao03)

// let comparacao04 = 10 === "10"
// console.log(comparacao04)

// let comparacao05 =  0 == false
// console.log(comparacao05)

// let comparacao06 =  0 === false
// console.log(comparacao06)

// let comparacao07 = null == undefined
// console.log(comparacao07)

// let comparacao08 = null === undefined
// console.log(comparacao08)

// let comparacao09 = "JS" == "JS"
// console.log(comparacao09)

// let comparacao10 = "JS" === "JS"
// console.log(comparacao10)

// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:

// let comparacao01 = 5 != 5
// console.log(comparacao01)

// let comparacao02 = 5 !== 5
// console.log(comparacao02)

// let comparacao03 = 5 != "5"
// console.log(comparacao03)

// let comparacao04 = 5 !== "5"
// console.log(comparacao04)

// let comparacao05 =  7 != 3
// console.log(comparacao05)

// let comparacao06 =  7 !== 3
// console.log(comparacao06)

// let comparacao07 = true != 1
// console.log(comparacao07)

// let comparacao08 = true !== 1
// console.log(comparacao08)





console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:

// let salarioA = 3500

// let salarioB = 4200

// let comparacao01 = salarioA > salarioB
// let comparacao02 = salarioA < salarioB
// let comparacao03 = salarioA >= salarioB
// let comparacao04 = salarioA <= salarioB
// let comparacao05 = salarioA === salarioB

// console.log(`Salario A (3500) > Salario B (4200): ${comparacao01}`);


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:

// let estoque = 0
// let temEstoque = estoque > 0
// let estoqueZerado = estoque === 0
// let temperatura = 36.5
// let febre = temperatura >= 37.6


// console.log(`valor do estoque: ${estoque}`);
// console.log(`tem estoque? ${temEstoque ? "sim" : "nao"}`);
// console.log(`estoque esta zerado? ${estoqueZerado ? "sim" : "nao"}`)
// console.log(`Hoje esta fazendo ${temperatura} °C`)
// console.log(`Bruno esta com febre? ${febre ? "sim" : "nao"}`)

// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:

// let num1 = lerTeclado.questionFloat("Digite algum numero: ")
// let num2 = lerTeclado.questionFloat("Digite mais um numero: ")


// let maior = num1 > num2;
// let menor = num1 < num2;
// let igual = num1 === num2;
// let maiorOuIgual = num1 >= num2;

// console.log(`num1 > num2: ${maior}`)
// console.log(`num1 < num2: ${menor}`);
// console.log(`num1 === num2: ${igual}`);
// console.log(`num1 >= num2: ${maiorOuIgual}`);

// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:

// let preco = lerTeclado.questionFloat("Precifique o chocolate: ")
// const precoMaximo = 50

// let estaDentroDoOrcamento = preco <= precoMaximo
// let esteItemEhCaro = preco > precoMaximo

// console.log(`Preço informado: R$ ${preco}`);
// console.log(`Dentro do orçamento (≤ R$ ${precoMaximo})? : ${estaDentroDoOrcamento ? "Sim" : "Não"}`);
// console.log(`Item mais caro que (> R$ ${precoMaximo})? : ${esteItemEhCaro ? "Sim" : "Não"}`);



// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:

// let nome1= lerTeclado.question("Digite seu nome: ")
// let idade1= lerTeclado.question("Digite sua idade: ")
// let nome2= lerTeclado.question("Digite seu nome: ")
// let idade2= lerTeclado.question("Digite sua idade: ")

// let cadastro = [
//     usuario1 = {
//     nome: nome1,
//     idade: idade1  
// },

//     usuario2 = {
//     nome: nome2,
//     idade: idade2
// }
// ]

// let resultados = {
//     maior: idade1 > idade2,
//     igual: idade1 === idade2,
//     usuario1MaiorDeIdade: idade1 >= 18,
//     usuario2MaiorDeIdade: idade2 >= 18
//   };
//   console.log(`A idade de ${nome1} é ${idade1} e ela é ${idade1 >= 18 ? "maior de idade" : "menor de idade"}.`);
//   console.log(`A idade de ${nome2} é ${idade2} e ela é ${idade2 >= 18 ? "maior de idade" : "menor de idade"}.`);


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:
let nomeAluno1 = lerTeclado.question("Digite o nome do aluno 1: ");
let nota1Aluno1 = lerTeclado.questionFloat("Digite a nota 1 do aluno 1: ");
let nota2Aluno1 = lerTeclado.questionFloat("Digite a nota 2 do aluno 1: ");
let nota3Aluno1 = lerTeclado.questionFloat("Digite a nota 3 do aluno 1: ");

let nomeAluno2 = lerTeclado.question("Digite o nome do aluno 2: ");
let nota1Aluno2 = lerTeclado.questionFloat("Digite a nota 1 do aluno 2: ");
let nota2Aluno2 = lerTeclado.questionFloat("Digite a nota 2 do aluno 2: ");
let nota3Aluno2 = lerTeclado.questionFloat("Digite a nota 3 do aluno 2: ");

let alunos = [
  
  aluno1 = {
  nota1: nota1Aluno1,
  nota2: nota2Aluno1,
  nota3: nota3Aluno1,
  
},

  aluno2 = {
  nota1: nota1Aluno2,
  nota2: nota2Aluno2,
  nota3: nota3Aluno2,
}
]

let mediaAluno1 = (nota1Aluno1+nota2Aluno1+nota3Aluno1)

let mediaAluno2 = (nota1Aluno2+nota2Aluno2+nota3Aluno2)

console.log(`Aluno com maior média: ${mediaAluno1 === mediaAluno2? "Empate": mediaAluno1 > mediaAluno2? nomeAluno1: nomeAluno2}`)

console.log(`Aluno com primeira maior nota: ${nota1Aluno1 > nota1Aluno2 ? nomeAluno1 : nomeAluno2}`)