// ============================================================
// ATIVIDADE 14 – Funções Simples
// ============================================================
//
// IMPORTANTE: nesta atividade, NÃO use parâmetros nem return.
// As funções devem apenas executar um bloco de código.
//
// ============================================================
let lerTeclado = require("readline-sync");

// ------------------------------------------------------------
// EXERCÍCIO 1 – Primeira função
// ------------------------------------------------------------
// a) Crie uma função 'saudacao' que exibe 3 linhas no console:
//    "Olá!"
//    "Bem-vindo(a) ao curso de JavaScript."
//    "Bons estudos!"
// b) Chame a função 2 vezes.

// → Seu código aqui:

// function saudacao() {
//     console.log("Olá!");
//     console.log("Bem-vindo(a) ao curso de JavaScript.");
//     console.log("Bons estudos!");
//   }
  
//   saudacao();
//   saudacao();
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função que organiza
// ------------------------------------------------------------
// a) Crie uma função 'linha' que exibe:
//    "----------------------------------------"
// b) Crie uma função 'titulo' que exibe:
//    "         RELATÓRIO MENSAL              "
// c) Crie uma função 'cabecalho' que CHAMA, em ordem:
//    linha(), titulo(), linha().
// d) Chame cabecalho() uma vez.

// → Seu código aqui:

// function linha() {
//     console.log("----------------------------------------");
//   }
  
//   function titulo() {
//     console.log("         RELATÓRIO MENSAL          ");
//   }
  
//   function cabecalho() {
//     linha();
//     titulo();
//     linha();
//   }
  
//   cabecalho();


// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculadora de informações
// ------------------------------------------------------------
// a) Crie uma função 'meusDados' que pergunta ao usuário:
//    - Nome
//    - Idade
//    - Cidade
// b) Crie uma função 'exibirDados' que recebe exibe os dados e exibe um cartão no formato:
//    -------------------------
//    Nome:   <nome>
//    Idade:  <idade>
//    Cidade: <cidade>
//    -------------------------
// c) Pergunte os dados de 2 usuários e os guarde em um objeto.
// d) Exiba os dados dos 2 usuários.
//
// ATENÇÃO: APÓS CRIADA, DIGITAR/CHAMAR A FUNÇÃO APENAS UMA VEZ
// PENSE EM UMA LÓGICA QUE EVITE DIGITAR A FUNÇÃO MAIS DE UMA VEZ
// Após finalizar, me chame para eu verificar a lógica - questão importante

// → Seu código aqui:


// let usuarios = [];

// function meusDados() {

//     for (let i = 0; i < 2; i++) {

//         let usuario = {
//             nome: lerTeclado.question("Digite o nome: "),
//             idade: lerTeclado.questionInt("Digite a idade: "),
//             cidade: lerTeclado.question("Digite a cidade: ")
//         };

//         usuarios.push(usuario);
//     }

//     exibirDados();
// }

// function exibirDados() {

//     for (let i = 0; i < usuarios.length; i++) {

//         console.log("-------------------------");
//         console.log("Nome:   " + usuarios[i].nome);
//         console.log("Idade:  " + usuarios[i].idade);
//         console.log("Cidade: " + usuarios[i].cidade);
//         console.log("-------------------------");
//     }
// }

// meusDados();
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Sorteio de número
// ------------------------------------------------------------
// a) Crie uma função 'sortear' que:
//    - Gera um número aleatório de 1 a 100
//      (Math.floor(Math.random() * 100) + 1).
//    - Exibe: "Número sorteado: <n>"
// b) Execute a função 5 vezes - tente fazer sem digitar a função 5 vezes.

// → Seu código aqui:

// function sortear() {
//     let numero = Math.floor(Math.random() * 100) + 1;
//     console.log("Numero sorteado:"  + numero);
// }

//     for(let i = 0; i < 5 ;i++) 
//     {
//     sortear()
//     }



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Tabela de multiplicação
// ------------------------------------------------------------
// a) Crie uma função 'tabuadaDoCinco' que exibe a tabuada do 5 inteira:
// (pense em uma lógica para não precisar digitar todos os valores)
//    5 x 1 = 5
//    5 x 2 = 10
//    ...
//    5 x 10 = 50
// b) Crie uma função 'tabuadaDoSete' análoga, para o 7.
// c) Chame as duas funções.

// → Seu código aqui:

// function tabuadaDoCinco(){                                          
//     for (let i = 1; i <= 10; i++) {
//         console.log("5" + " x " + i + " = " + (5 * i));
//     }
// }

// function tabuadaDoSete(){
//     for (let i = 1; i <= 10; i++) {
//         console.log("7" + " x " + i + " = " + (7 * i));
//     }
// }

// tabuadaDoCinco();

// tabuadaDoSete();


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Conversão fixa
// ------------------------------------------------------------
// a) Crie uma função 'converterTemperatura' que:
//    - Pergunta uma temperatura em Celsius.
//    - Calcula em Fahrenheit: F = C * 1.8 + 32.
//    - Exibe: "<C>°C equivalem a <F>°F".
// b) Chame a função 3 vezes.

// → Seu código aqui:

// function converterTemperatura(){    

// let celsius = Number(lerTeclado.question("Digite a temperatura em Celsius: "));
// console.log("Temperatura: " + celsius + "°C");

// let Fahrenheit = celsius * 1.2 + 32

// console.log(celsius + "°C equivalem a " + Fahrenheit + "°F");


// }
// converterTemperatura()
// converterTemperatura()
// converterTemperatura()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Listando informações
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const filmes = ["Matrix", "Interestelar", "Origem", "Senhor dos Anéis"];
// b) Crie a função 'listarFilmes' que percorre o vetor 'filmes' com for
//    e exibe cada um no formato: "<i+1> - <filme>".
// c) Chame listarFilmes() duas vezes.

// → Seu código aqui:
    

// function listarFilmes() {
//     for (let i = 0; i < filmes.length; i++) {
//         console.log((i + 1) + " - " + filmes[i]);
//     }
// }

// listarFilmes();

// listarFilmes();

console.log("_______________________________");

//
// ------------------------------------------------------------
// EXERCÍCIO 8 – Dividindo um programa em partes
// ------------------------------------------------------------
// Vamos criar um "mini sistema de boas-vindas" composto por 4 funções:
//
// a) 'limparTela'      → exibe 30 linhas em branco (console.log("")).
// b) 'banner'          → exibe um banner com 3 linhas (exiba qualquer informação dentro de "-----------").
// c) 'pedirNome'       → pergunta o nome do usuário e exibe "Olá, <nome>!".
// d) 'rodape'          → exibe "Sistema desenvolvido por <seu nome>".
//
// Em seguida, monte o programa principal (outra função) chamando, em ordem:
//    limparTela(); banner(); pedirNome(); rodape();
// E chame a função principal.

// → Seu código aqui:

// function limparTela() {
//     for (let i = 0; i < 30; i++) {
//         console.log("");
//     }
// }

// function banner() {
//     console.log("--------------------");
//     console.log(" MINI SISTEMA ");
//     console.log("--------------------");
// }

// function pedirNome() {
//     let nome = lerTeclado.question("Digite seu nome:");
//     console.log("Olá, " + nome + "!");
// }

// function rodape() {
//     console.log("Sistema desenvolvido por Mateus Möller");
// }

// function funcaoPrincipal(){
//     limparTela(); 
//     banner(); 
//     pedirNome(); 
//     rodape();

// }

// funcaoPrincipal()


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Menu organizado em funções
// ------------------------------------------------------------
// Você vai criar um menu onde CADA opção é uma função separada.
//
// a) Crie as funções:
//    - 'opcaoSomar'       → pede 2 números e exibe a soma.
//    - 'opcaoSubtrair'    → pede 2 números e exibe a subtração.
//    - 'opcaoMultiplicar' → pede 2 números e exibe a multiplicação.
//    - 'opcaoDividir'     → pede 2 números, trata divisão por zero e exibe o resultado.
//    - 'exibirMenu'       → exibe as opções no console.
//
// b) Usando do...while + switch, monte o menu chamando a função
//    correspondente em cada case. Encerre quando o usuário digitar 0.

// → Seu código aqui:
function opcaoSomar() {
    let n1 = Number(lerTeclado.question("Digite o primeiro número: "));
    let n2 = Number(lerTeclado.question("Digite o segundo número: "));
    console.log("Soma = " + (n1 + n2));
}

function opcaoSubtrair() {
    let n1 = Number(lerTeclado.question("Digite o primeiro número: "));
    let n2 = Number(lerTeclado.question("Digite o segundo número: "));
    console.log("Subtração = " + (n1 - n2));
}

function opcaoMultiplicar() {
    let n1 = Number(lerTeclado.question("Digite o primeiro número: "));
    let n2 = Number(lerTeclado.question("Digite o segundo número: "));
    console.log("Multiplicação = " + (n1 * n2));
}

function opcaoDividir() {
    let n1 = Number(lerTeclado.question("Digite o primeiro número: "));
    let n2 = Number(lerTeclado.question("Digite o segundo número: "));

    if (n2 == 0) {
        console.log("Erro: divisão por zero!");
    } else {
        console.log("Divisão = " + (n1 / n2));
    }
}

function exibirMenu() {
    console.log("===== MENU =====");
    console.log("1 - Somar");
    console.log("2 - Subtrair");
    console.log("3 - Multiplicar");
    console.log("4 - Dividir");
    console.log("0 - Sair");
}

let opcao;

do {
    exibirMenu();

    opcao = Number(lerTeclado.question("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            opcaoSomar();
            break;

        case 2:
            opcaoSubtrair();
            break;

        case 3:
            opcaoMultiplicar();
            break;

        case 4:
            opcaoDividir();
            break;

        case 0:
            console.log("Programa encerrado.");
            break;

        default:
            console.log("Opção inválida!");
    }

} while (opcao != 0);


console.log("_______________________________");
