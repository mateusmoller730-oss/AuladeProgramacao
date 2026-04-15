// ============================================================
//   ATIVIDADE 01 – Variáveis e Tipos Primitivos em JavaScript
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


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Boolean
// ------------------------------------------------------------
// a) Declare "maiorDeIdade" como true se você tem 18 anos ou mais, false caso contrário.
// b) Declare "temCNH" com um valor booleano que represente se você tem carteira de motorista.
// c) Exiba as duas variáveis e seus tipos (typeof).

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Undefined e Null
// ------------------------------------------------------------
// a) Declare uma variável "apelido" sem atribuir nenhum valor.
// b) Declare uma variável "enderecoAtual" e atribua null intencionalmente.
// c) Exiba as duas variáveis e seus respectivos tipos (typeof).
// d) Explique (em um comentário) por que typeof null retorna "object".

// → Seu código aqui:


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








// 1
// //a
// var meuNome = 'mateus'     
// //b
// let naousarVar = 'Não se deve usar var em JavaScript porque ele tem escopo de função e sofre hoisting, o que pode causar comportamentos inesperados e bugs no código.'
// //c
// let minhaIdade = 16
// //d
// const  ANO_NASCIMENTO = 2009
// //e
// console.log (`Meu nome e: ${meuNome}\nporque nao usar var? ${naousarVar}\nminha idade? ${minhaIdade}\nano que nasceu?${ANO_NASCIMENTO}`)



// 2
// //a
// let cidade = 'Jaragua do sul'
// //b
// let pais = 'Brasil'
// //c
// let fraseMoradia = `minha cidade é? ${cidade}\nmeu pais é? ${pais}`
// //d
// console.log(fraseMoradia)
// console.log(typeof fraseMoradia);


// 3
// //a
// let maiorDeIdade = 'false'
// //b
// let temCNH = 'true'
// //c
// console.log(typeof maiorDeIdade)
// console.log(typeof temCNH)


// 4
// //a
// let apelido = null
// //b
// let enderecoAtual = null
// //c
// console.log(typeof apelido)
// console.log(typeof enderecoAtual)
// //d
// console.log ('retorna object por causa de um bug histórico do JavaScript que foi mantido para não quebrar códigos antigos')



// 5
// //a
// console.log(typeof 42)
// //b
// console.log(typeof "texto")
// //c
// console.log(typeof true)
// //d
// console.log(typeof undefined)
// //f
// console.log(typeof null)
// //g
// console.log(typeof 3.14)



// 6
// let nome = 'mateus'
// let idade = '16'
// let altura = '180'
// let cidae = 'jaragua do sul'
// let estudandoJS = true
// let minhavida = `Ola meu nome é ${nome}\n,tenho ${idade}\n anos,moro em ${cidade}\n meco  ${altura}\n e estou ${estudandoJS}`
// console.log(minhavida);