// ============================================================
//   ATIVIDADE 12 – Estruturas de Dados: Vetor (Array)
// ============================================================

let readline = require("readline-sync");

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo e exibindo um vetor
// ------------------------------------------------------------
// a) Declare um vetor com 5 cidades de sua escolha.
// b) Exiba a lista de cidades utilizando for().
// c) Exiba a primeira e a última cidade; a última utilizando .length.
// d) Exiba a quantidade total de cidades.

let cidades = ["Jaraguá do Sul", "Joinville", "Blumenau", "Curitiba", "Florianópolis"];

for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i]);
}

console.log("Primeira cidade:", cidades[0]);
console.log("Última cidade:", cidades[cidades.length - 1]);
console.log("Quantidade total de cidades:", cidades.length);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Soma e média
// ------------------------------------------------------------
// a) Utilizando o vetor:
// b) Calcule a SOMA de todos os números.
// c) Calcule a MÉDIA (soma / quantidade).
// d) Exiba: "Soma: <soma> | Média: <média>"

const numeros = [12, 7, 25, 3, 18, 9, 31, 14];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

let media = soma / numeros.length;

console.log("Soma: " + soma + " | Média: " + media.toFixed(2));

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor
// ------------------------------------------------------------
// a) Utilizando o vetor:
// b) Encontre a MAIOR e a MENOR temperatura.
// c) Exiba: "Maior: <maior>°C | Menor: <menor>°C"

const temperaturas = [22.5, 19.0, 27.3, 18.7, 30.1, 25.4, 21.8];

let maior = temperaturas[0];
let menor = temperaturas[0];

for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }
    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }
}

console.log("Maior: " + maior + "°C | Menor: " + menor + "°C");

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Pares e ímpares
// ------------------------------------------------------------
// a) Conte quantos números são pares e ímpares.
// b) Crie dois vetores: pares[] e impares[].
// c) Exiba:
//    "Pares (<qtd>): <pares>"
//    "Ímpares (<qtd>): <impares>"

const listaNumeros = [4, 7, 10, 13, 16, 19, 22, 25, 28];

let pares = [];
let impares = [];

for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] % 2 === 0) {
        pares.push(listaNumeros[i]);
    } else {
        impares.push(listaNumeros[i]);
    }
}

console.log(`Pares (${pares.length}): ${pares}`);
console.log(`Ímpares (${impares.length}): ${impares}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Inversão de vetor
// ------------------------------------------------------------
// a) Utilize o vetor:
// b) Crie um novo vetor em ordem reversa usando for().
// c) Exiba os dois vetores.
// d) Inverta usando função de array (.reverse()).

const vetorOriginal = ["A", "B", "C", "D", "E"];

let vetorInvertido = [];

for (let i = vetorOriginal.length - 1; i >= 0; i--) {
    vetorInvertido.push(vetorOriginal[i]);
}

let vetorInvertido2 = vetorOriginal.slice().reverse();

console.log("Original:", vetorOriginal);
console.log("Invertido:", vetorInvertido);
console.log("Invertido2:", vetorInvertido2);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Cadastro dinâmico
// ------------------------------------------------------------
// a) Crie um vetor vazio.
// b) Pergunte quantos produtos deseja cadastrar.
// c) Use for() para adicionar nomes.
// d) Exiba todos os produtos e a quantidade.

let produtos = [];

let qtd = readline.questionInt("Quantos produtos deseja cadastrar? ");

for (let i = 0; i < qtd; i++) {
    let nome = readline.question("Nome do produto: ");
    produtos.push(nome);
}

for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}

console.log(`${produtos.length} produtos cadastrados.`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Busca em vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
// b) Pergunte um nome.
// c) Use for e break para buscar.
// d) Exiba se encontrou ou não.

const alunos = ["Ana", "Bruno", "Carla", "Diego", "Eva"];

let nome = readline.question("Digite o nome do aluno: ");

let encontrado = false;

for (let i = 0; i < alunos.length; i++) {
    if (alunos[i] === nome) {
        console.log(`${nome} está matriculado(a) (índice ${i}).`);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log(`${nome} não foi encontrado(a).`);
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Vetor de objetos
// ------------------------------------------------------------
// a) Exiba com console.table().
// b) Calcule total e média de páginas.
// c) Encontre o livro com MAIS páginas.

const livros = [
    { titulo: "Dom Casmurro", paginas: 256 },
    { titulo: "O Cortiço", paginas: 304 },
    { titulo: "Memórias Póstumas", paginas: 208 },
    { titulo: "Capitães da Areia", paginas: 280 }
];

console.table(livros);

let totalPaginas = 0;
let maiorLivro = livros[0];

for (let i = 0; i < livros.length; i++) {
    totalPaginas += livros[i].paginas;

    if (livros[i].paginas > maiorLivro.paginas) {
        maiorLivro = livros[i];
    }
}

let mediaPaginas = totalPaginas / livros.length;

console.log("Total de páginas:", totalPaginas);
console.log("Média de páginas:", mediaPaginas.toFixed(2));
console.log("Livro com mais páginas:", maiorLivro.titulo);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Filtro com push
// ------------------------------------------------------------
// a) Separe menores e adultos.
// b) Use push().
// c) Exiba quantidades e listas.

const idades = [12, 17, 21, 15, 30, 45, 9, 67, 19, 8];

let menores = [];
let adultos = [];

for (let i = 0; i < idades.length; i++) {
    if (idades[i] < 18) {
        menores.push(idades[i]);
    } else {
        adultos.push(idades[i]);
    }
}

console.log(`Menores (${menores.length}): ${menores}`);
console.log(`Adultos (${adultos.length}): ${adultos}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de notas
// ------------------------------------------------------------
// a) Crie um vetor vazio.
// b) Use do...while e switch.
// c) Implemente menu completo.
// d) Ao sair, exiba total de notas.

let notas = [];
let opcao;

do {
    console.log("\nMENU");
    console.log("1 - Adicionar nota");
    console.log("2 - Listar notas");
    console.log("3 - Estatísticas");
    console.log("4 - Remover última");
    console.log("5 - Limpar todas");
    console.log("0 - Sair");

    opcao = readline.questionInt("Escolha: ");

    switch (opcao) {
        case 1:
            let nota = readline.questionFloat("Digite a nota: ");
            notas.push(nota);
            break;

        case 2:
            console.log(notas);
            break;

        case 3:
            let somaNotas = 0;
            for (let i = 0; i < notas.length; i++) {
                somaNotas += notas[i];
            }
            console.log("Quantidade:", notas.length);
            console.log("Média:", (somaNotas / notas.length).toFixed(2));
            break;

        case 4:
            notas.pop();
            break;

        case 5:
            notas = [];
            break;
    }

} while (opcao !== 0);

console.log("Encerrando. Total de notas registradas: " + notas.length);

console.log("_______________________________");