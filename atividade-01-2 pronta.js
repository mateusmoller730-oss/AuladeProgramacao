
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:
//const nome = `Mateus`
//let idade = 16
//let hobby = `volei`
//let apresentacao = `me chamo ${nome} tenho ${idade} anos e gosto de jogar ${hobby}`


//console.log(apresentacao)



// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:
//let cidade = `Jaragua do Sul`
//let temperatura = 21
//let noticia = `Hoje na cidade de ${cidade} esta fazendo ${temperatura}°C perfeito para ficar em casa fazendo nada:):)`

//console.log(noticia);

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:
//let string = "Olá, mundo!";      // string
//let number = 10;                // number
//let boolean = true;            // boolean
//let undefined;                 // undefined
//let nulo = null;                // null

//console.log(`Valor: ${string} | Tipo: ${typeof string}`);
//console.log(`Valor: ${number} | Tipo: ${typeof number}`);
//console.log(`Valor: ${boolean} | Tipo: ${typeof boolean}`);
//console.log(`Valor: ${undefined} | Tipo: ${typeof undefined}`);
//console.log(`Valor: ${null} | Tipo: ${typeof null}`);

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
let personagem = 'Homem Aranha'
let idade = '26'
let cidade = 'Nova York'
let missao = 'fazer a mj lembrar dele'
let template = `O personagem ${personagem} tem ${idade} anos, mora em ${cidade} e sua missão é ${missao}`
console.log(template)
// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:
let meunome = 'Mateus'
let objetivo = 'ganhar conhecimento nessa area'
let esseano = `Meu nome é ${meunome} e meu objetivo é ${objetivo}.`
console.log(esseano)

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:


console.log(`
|        SISTEMA DO USUÁRIO           |
========================================

1  - Ver Perfil
2  - Editar Perfil
3  - Configurações
4  - Notificações
5  - Relatórios
6  - Ajuda
7  - Sobre o Sistema
0  - Sair

========================================
Digite o número da opção desejada
========================================`);
