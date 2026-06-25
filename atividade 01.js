// ============================================================
//   ATIVIDADE 01 – 

// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Declaração de variáveis
// ------------------------------------------------------------
// a) Declare uma variável com "var" chamada "meuNome" e atribua o seu nome.
// b) Declare uma variável com "var" chamada "naoUsarVar" e no valor, atribua a explicação de porque não é recomendado utilizar 'var'.
// c) Declare uma variável com "let" chamada "minhaIdade" e atribua a sua idade.
// d) Declare uma variável com "const" chamada "ANO_NASCIMENTO" e atribua o ano em que você nasceu.
// e) Exiba as quatro variáveis no console.

// → Seu código aqui:

var meuNome = 'mateus'

var naoUsarVar = 'Não é recomendado usar var porque ele tem escopo de função, sofre hoisting e pode causar comportamentos inesperados no código.'

let minhaIdade = 16

const ANO_NASCIMENTO = 2009

console.log(`Meu nome é: ${meuNome}
Porque não usar var? ${naoUsarVar}
Minha idade: ${minhaIdade}
Ano de nascimento: ${ANO_NASCIMENTO}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Strings e template literals
// ------------------------------------------------------------
// a) Declare uma variável "cidade" com o nome da cidade onde você mora.
// b) Declare uma variável "pais" com o nome do seu país.
// c) Usando um template literal, crie a frase:
//    "Eu moro em <cidade>, no <pais>." e armazene em "fraseMoradia".
// d) Exiba "fraseMoradia" e seu tipo (typeof) no console.

// → Seu código aqui:

let cidade = 'Jaraguá do Sul'
let pais = 'Brasil'

let fraseMoradia = `Eu moro em ${cidade}, no ${pais}.`

console.log(fraseMoradia)
console.log(typeof fraseMoradia)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Boolean
// ------------------------------------------------------------
// a) Declare "maiorDeIdade" como true se você tem 18 anos ou mais, false caso contrário.
// b) Declare "temCNH" com um valor booleano que represente se você tem carteira de motorista.
// c) Exiba as duas variáveis e seus tipos (typeof).

// → Seu código aqui:

let maiorDeIdade = false // (16 anos)
let temCNH = false

console.log(maiorDeIdade)
console.log(typeof maiorDeIdade)

console.log(temCNH)
console.log(typeof temCNH)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Undefined e Null
// ------------------------------------------------------------
// a) Declare uma variável "apelido" sem atribuir nenhum valor.
// b) Declare uma variável "enderecoAtual" e atribua null intencionalmente.
// c) Exiba as duas variáveis e seus respectivos tipos (typeof).
// d) Explique (em um comentário) por que typeof null retorna "object"...

// → Seu código aqui:

let apelido

let enderecoAtual = null

console.log(apelido)
console.log(typeof apelido)

console.log(enderecoAtual)
console.log(typeof enderecoAtual)

// d) retorna "object" por um bug histórico do JavaScript que foi mantido por compatibilidade

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Identificando tipos (typeof)
// ------------------------------------------------------------
// Para cada valor abaixo, use typeof e exiba o resultado no console.
// Tente adivinhar o resultado ANTES de executar!

// 42
// "texto"
// true
// undefined
// null
// 3.14

// → Seu código aqui:

console.log(typeof 42)
console.log(typeof "texto")
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof 3.14)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – DESAFIO: Mini perfil
// ------------------------------------------------------------
// Usando tudo que aprendeu, crie variáveis para armazenar:
//   • nome, idade, altura (número decimal), cidade, estudandoJS (boolean)
// Em seguida, exiba no console uma mensagem completa usando template literal:
//   "Olá! Meu nome é <nome>, tenho <idade> anos, moro em <cidade>,
//    meço <altura>m e estou estudando JavaScript: <estudandoJS>."

// → Seu código aqui:

let nome = 'Mateus'
let idade = 16
let altura = 1.80
let cidadePessoa = 'Jaraguá do Sul'
let estudandoJS = true

let minhavida = `Olá! Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidadePessoa},
meço ${altura}m e estou estudando JavaScript: ${estudandoJS}.`

console.log(minhavida)