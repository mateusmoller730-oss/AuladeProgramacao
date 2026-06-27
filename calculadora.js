// //Atividade Avaliativa
// //desenvolver uma calculadora


// // Calculadora básica em JavaScript




// let readline = require("readline-sync");



// for (;;) {

//                                                          // Entrada de dados
//   let numero1 = Number(readline.question("Digite o primeiro numero: "));
  
//   let operador = readline.question(
//     "Digite a operacao (+, -, *, /): "
//   );

//   let numero2 = Number(readline.question("Digite o segundo numero: "));

//   let resultado;

//                                                     // Estrutura condicional
//   switch (operador) {

//     case "+":
//       resultado = numero1 + numero2;
//       break;

//     case "-":
//       resultado = numero1 - numero2;
//       break;

//     case "*":
//       resultado = numero1 * numero2;
//       break;

//     case "/":

//       if (numero2 == 0) {
//         resultado = "Erro: divisao por zero!";
//       } else {
//         resultado = numero1 / numero2;
//       }

//       break;

//     default:
//       resultado = "Operacao invalida!";
//   }

//                                                              // Saída de dados
//   console.log("Resultado: " + resultado);

//                                                                  // Pergunta para continuar
//   let continuar = readline.question(
//     "Deseja continuar? (s/n): "
//   );

//   if (continuar == "n") {
//     console.log("Calculadora encerrada!");
//     break;
//   }

// }














//                                                   // O loop vai repetir 5 vezes (i de 0 até 4)
// for (let i = 0; i < 5; i++) {

//   // Entrada do primeiro número pelo usuário
//   let numero1 = Number(readline.question("Digite o primeiro numero: "));

//   // Entrada do operador matemático
//   let operador = readline.question("Digite a operacao (+, -, x, /): ");

//     // Entrada do segundo número pelo usuário
//   let numero2 = Number(readline.question("Digite o segundo numero: "));

//                                                   // Variável que vai armazenar o resultado da operação
//   let resultado;

//                                          // Estrutura de decisão para escolher a operação correta
//   switch (operador) {

//     case "+":
//       resultado = numero1 + numero2;    // soma
//       break;

//     case "-":
//       resultado = numero1 - numero2;            // subtração
//       break;

//     case "x":
//       resultado = numero1 * numero2;                 // multiplicação
//       break;

//     case "/":
//                  // Verifica divisão por zero
//       if (numero2 == 0) {
//         resultado = "Erro (divisao por zero)";
//       } else {
//         resultado = numero1 / numero2;      // divisão normal
//       }
//       break;

//     default:
//       resultado = "Operacao invalida";                      // caso o usuário digite algo errado
//   }

//             // Mostra o resultado no formato: 16 x 3 = 48
//   console.log(numero1 + " " + operador + " " + numero2 + " = " + resultado);
// }

//                                    // Mensagem final após terminar todas as repetições
// console.log("Fim da calculadora");
































































































































































































































//
















