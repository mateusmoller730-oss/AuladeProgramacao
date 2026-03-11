// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//    

//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================

let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:
console.log("Iniciando o programa...")
console.info("Aula de Input e Output")
console.warn("usuário sempre precisa iniciar o programa com node e o nome do arquivo.")
console.error("Algo nao esta certo");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:
//let lerTeclado = require('readline-sync');

//const Mateus = lerTeclado.question('Digite seu nome:');
//const idadedeMateus = lerTeclado.questionInt('Digite sua idade:');
//console.log(`Olá, ${Mateus}! Idade: ${idadedeMateus}`);





// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:


//let nome = lerTeclado.question("Digite seu nome:");
//let idade = lerTeclado.question("Digite sua idade:");
//let cidade = lerTeclado.question("Digite sua cidade:");


//let ficha = {
 // nome: nome,
 // idade: idade,
 // cidade: cidade
//};

//console.table(ficha);


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:
//const pergunta01 = lerTeclado.keyInYN('Voce gosta de programar? (s/n) ');
//onst pergunta02 = lerTeclado.keyInYN('Voce gosta de jogar tenis? (s/n) ')

//console.log("Resposta 1:", gostaDeProgramar);
///console.log("Resposta 2:", gostaDeJogos);

//console.log(`Voce gosta de programar? ${pergunta01} ,eu gosto de programar`);
//console.log(`Voce gosta de jogar tenis? ${pergunta02} ,eu nao gosto de jogar`)

//const pergunta01 = lerTeclado.keyInYN('Voce gosta de programar? (s/n) ');
//const pergunta02 = lerTeclado.keyInYN('Voce gosta de jogar tenis? (s/n) ');

//console.log("Resposta 1:", pergunta01);
//console.log("Resposta 2:", pergunta02);

//console.log(`Voce gosta de programar? ${pergunta01}, eu gosto de programar`);
//console.log(`Voce gosta de jogar tenis? ${pergunta02}, eu nao gosto de jogar`);

// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:
//let comida1 = lerTeclado.question("Digite sua primeira comida favorita: ");
//let comida2 = lerTeclado.question("Digite sua segunda comida favorita: ");
//let comida3 = lerTeclado.question("Digite sua terceira comida favorita: ");

//let comidasFavoritas = [comida1, comida2, comida3];

//console.table(comidasFavoritas);


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:

//let nome = lerTeclado.question("Digite seu nome:");
//let profissao = lerTeclado.question("Digite sua profissao:");
//let cidade = lerTeclado.question("Digite sua cidade:");

//let cadastroPessoal = {
  //  nome: nome,
  //  profissao: profissao,
   // cidade: cidade
//}

//console.log(`Me chamo ${cadastroPessoal.nome}. Profissão: ${cadastroPessoal.profissao} e moro na cidade de: ${cadastroPessoal.cidade}.`);

    


// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazene os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:
 //usuario1
 //let n_user1 = lerTeclado.question("Digite seu nome:")
 //let i_user1 = lerTeclado.question("Digite sua idade:")
 //let city_user1 = lerTeclado.question("Digite sua cidade")
 //let r_user1 = lerTeclado.question("Digite sua rua")
 //let c_user1 = lerTeclado.question("Digite sua casa")

//let user1 = {
  //  nome: n_user1,
   // idade: i_user1,
   // cidade: c_user1,
   // rua: r_user1,
   // casa: c_user1
//}


 ///let n_user2 = lerTeclado.question("Digite seu nome:")
 ///let i_user2 = lerTeclado.question("Digite sua idade:")
//// let city_user2 = lerTeclado.question("Digite sua cidade")
 ////let r_user2 = lerTeclado.question("Digite sua rua")
// let c_user2 = lerTeclado.question("Digite sua casa")

 //let user2 = {
  //  nome: n_user2,
  //  idade: i_user2,
   // cidade: c_user2,
  //  rua: r_user2,
  //  casa: c_user2
// }

//let n_user3 = lerTeclado.question("Digite seu nome:")
//let i_user3 = lerTeclado.question("Digite sua idade:")
//let city_user3 = lerTeclado.question("Digite sua cidade")
//let r_user3 = lerTeclado.question("Digite sua rua")
//let c_user3 = lerTeclado.question("Digite sua casa")
   
//let user3 = {
 //   nome: n_user3,
 //   idade: i_user3,
  //  endereco: {
  //      cidade: c_user3,
  //      rua: r_user3,
  //      casa: c_user3
  //  }
 //}

// Array com os usuários
//let listaDeUsuarios = [user1, user2, user3]
 
// d) Mostrar tabela
//console.table(listaDeUsuarios)

// e) Nome e idade do 2º usuário
//console.log(user2.nome, user2.idade)

// f) Endereço completo do 3º usuário
//console.table(user3.endereco)

// g) nome e rua user 1
//console.log(user1.nome, user1.rua)

// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:
let aluno01 = lerTeclado.question("Nome do Aluno")
let n01_aluno01 = lerTeclado.question(`Nota 1 do aluno ${aluno01}:`)
let n02_aluno01 = lerTeclado.question(`Nota 2 do aluno ${aluno01}:`)
let n03_aluno01 = lerTeclado.question(`Nota 3 do aluno ${aluno01}:`)

let aluno02 = lerTeclado.question("Nome do Aluno")
let n01_aluno02 = lerTeclado.question(`Nota 1 do aluno ${aluno02}:`)
let n02_aluno02 = lerTeclado.question(`Nota 2 do aluno ${aluno02}:`)
let n03_aluno02 = lerTeclado.question(`Nota 3 do aluno ${aluno02}:`)


let aluno03 = lerTeclado.question("Nome do Aluno")
let n01_aluno03 = lerTeclado.question(`Nota 1 do aluno ${aluno03}:`)
let n02_aluno03 = lerTeclado.question(`Nota 2 do aluno ${aluno03}:`)
let n03_aluno03 = lerTeclado.question(`Nota 3 do aluno ${aluno03}:`)

let estudante01 = {
    nome: aluno01,
    nota1:n01_aluno01,
    nota2:n02_aluno01,
    nota3:n03_aluno01
}

let estudante02 = {
    nome: aluno02,
    nota1:n01_aluno02,
    nota2:n02_aluno02,
    nota3:n03_aluno02
}

let estudante03 = {
    nome: aluno03,
    nota1:n01_aluno03,
    nota2:n02_aluno03,
    nota3:n03_aluno03
}

let turma = [estudante01, estudante02, estudante03]

console.table(turma)
console.log(estudante02.nome, estudante01.nota1)
console.log(estudante03.nome, estudante01.nota2)
console.log(estudante01.nome, estudante01.nota3) 



// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:
let nome = lerTeclado.question("Nome:")
let categoria = lerTeclado.question("Categoria:")
let preco = lerTeclado.question("Preco:")
let quantidadeestoque = lerteclado.question("estoque")

//console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.
