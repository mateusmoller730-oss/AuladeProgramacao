
// if (erros == 0) {
//     console.log(" +---+");
//     console.log(" |   |");
//     console.log("     |");
//     console.log("     |");
//     console.log("     |");
//     console.log("=======");
// }

// if (erros == 1) {
//     console.log(" +---+");
//     console.log(" |   |");
//     console.log(" O   |");
//     console.log("     |");
//     console.log("     |");
//     console.log("=======");
// }

// if (erros == 2) {
//     console.log(" +---+");
//     console.log(" |   |");
//     console.log(" O   |");
//     console.log(" |   |");
//     console.log("     |");
//     console.log("=======");
// }

// if (erros == 3) {
//     console.log(" +---+");
//     console.log(" |   |");
//     console.log(" O   |");
//     console.log("/|   |");
//     console.log("     |");
//     console.log("=======");
// }

// if (erros == 4) {
//     console.log(" +---+");
//     console.log(" |   |");
//     console.log(" O   |");
//     console.log("/|\\  |");
//     console.log("     |");
//     console.log("=======");
// }

// if (erros == 5) {
//     console.log(" +---+");
//     console.log(" |   |");
//     console.log(" O   |");
//     console.log("/|\\  |");
//     console.log("/    |");
//     console.log("=======");
// }

// if (erros == 6) {
//     console.log(" +---+");
//     console.log(" |   |");
//     console.log(" O   |");
//     console.log("/|\\  |");
//     console.log("/ \\  |");
//     console.log("=======");
// }
// }


const lerTeclado = require("readline-sync");

const palavras = [
    "abacaxi", "janela", "computador", "elefante", "montanha",
    "escola", "bicicleta", "futebol", "girassol", "cachorro",
    "guitarra", "oceano", "castelo", "chocolate", "aviao",
    "floresta", "telefone", "biblioteca", "sorvete", "tartaruga",
    "relogio", "universo", "camiseta", "diamante", "helicoptero",
    "pipoca", "foguete", "parque", "lanterna", "espelho",
    "tempestade", "coelho", "pintura", "xadrez", "caderno",
    "arcoiris", "violino", "mochila", "praia", "travesseiro",
    "satelite", "girafa", "ambulancia", "coruja", "borboleta",
    "escada", "martelo", "panqueca", "astronauta", "pinguim",
    "farol", "labirinto", "serpente", "abelha", "fogueira",
    "tesoura", "colher", "mercado", "fazenda", "canguru",
    "tijolo", "engrenagem", "fantasma", "bussola", "crocodilo",
    "torneira", "morcego", "geladeira", "baleia", "vulcao",
    "amendoim", "dragao", "meteoro", "escorregador", "piramide",
    "camaleao", "teclado", "ferrovia", "joaninha", "sanfona",
    "carrossel", "jacare", "abacate", "poltrona", "cereja",
    "escultura", "planeta", "termometro", "margarida", "tornado",
    "peneira", "capacete", "dinossauro", "formigueiro", "almofada",
    "microfone", "chuveiro", "aquarela", "ferradura"
];

function sortear() {
    return palavras[Math.floor(Math.random() * palavras.length)];
}

function criarOculta(palavra) {
    let oculta = [];
    for (let i = 0; i < palavra.length; i++) {
        oculta.push("_");
    }
    return oculta;
}

function mostrar(vetor) {
    let texto = "";
    for (let i = 0; i < vetor.length; i++) {
        texto += vetor[i] + " ";
    }
    console.log(" Palavra: " + texto);
}


function ganhou(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] == "_") {
            return false;
        }
    }
    return true;
}

function mostrarLetrasErradas(letrasErradas) {
    let texto = "";
    for (let i = 0; i < letrasErradas.length; i++) {
        texto += letrasErradas[i] + " ";
    }
    console.log("Letras erradas: " + texto);
}


function verificarLetra(palavra, oculta, letra) {
    let achou = false;

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == letra) {
            oculta[i] = letra;
            achou = true;
        }
    }

    return achou;
}

function jogar() {
    let palavra = sortear();
    let oculta = criarOculta(palavra);

    let erros = 0;
    let letrasErradas = [];

    while (erros < 6 && !ganhou(oculta)) {

        console.clear();

        console.log("Erros: " + erros);

        mostrar(oculta);

        mostrarLetrasErradas(letrasErradas);

        let letra = lerTeclado.question("Digite uma letra: ");

        let achou = verificarLetra(palavra, oculta, letra);

        if (!achou) {
            erros++;
            letrasErradas.push(letra);
        }
    }

    if (ganhou(oculta)) {
        console.log("\nVocê ganhou!");
    } else {
        console.log("\nVocê perdeu!");
    }

    console.log("A palavra era: " + palavra);
}

jogar();