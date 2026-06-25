// ============================================================
//   ATIVIDADE 06 – Operadores Lógicos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-06.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Tabela verdade do &&
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true && true → <resultado>"
//
// Combinações:
//   a) true && true
//   b) true && false
//   c) false && true
//   d) false && false

// → Seu código aqui:

let a1 = true && true;
let a2 = true && false;
let a3 = false && true;
let a4 = false && false;

console.log(`true && true = ${a1}`);
console.log(`true && false = ${a2}`);
console.log(`false && true = ${a3}`);
console.log(`false && false = ${a4}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Tabela verdade do ||
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true || false → <resultado>"
//
// Combinações:
//   a) true || true
//   b) true || false
//   c) false || true
//   d) false || false

// → Seu código aqui:

let b1 = true || true;
let b2 = true || false;
let b3 = false || true;
let b4 = false || false;

console.log(`true || true = ${b1}`);
console.log(`true || false = ${b2}`);
console.log(`false || true = ${b3}`);
console.log(`false || false = ${b4}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Operador ! (NOT)
// ------------------------------------------------------------
// a) Declare "sistemaAtivo" com valor true.
// b) Declare "modoManutencao" atribuindo o valor invertido de "sistemaAtivo" (usando !).
// c) Declare "lugarVago" com valor false.
// d) Declare "lugarOcupado" com o valor invertido de "lugarVago" (usando !).
// e) Exiba todas as 4 variáveis com template literal mostrando seus valores.

// → Seu código aqui:

let sistemaAtivo = true;
let modoManutencao = !sistemaAtivo;

let lugarVago = false;
let lugarOcupado = !lugarVago;

console.log(`sistemaAtivo = ${sistemaAtivo}`);
console.log(`modoManutencao = ${modoManutencao}`);
console.log(`lugarVago = ${lugarVago}`);
console.log(`lugarOcupado = ${lugarOcupado}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Combinando && com operadores relacionais
// ------------------------------------------------------------
// a) Pergunte ao usuário seu peso e altura. Armazene os valores em um objeto.
// b) Calcule o IMC: peso / (altura ** 2). Armazene em "imc" (dentro do objeto usuário).
// c) Armazene em "imcAbaixoDoPeso" o resultado de: imc < 18.5
// c) Armazene em "imcNormal" o resultado de: imc >= 18.5 && imc <= 24.9
// d) Armazene em "imcAcimaDoPeso" o resultado de: imc >= 25 && imc <= 29.9
// e) Exiba o IMC e os três resultados booleanos com template literal. Cada imc em um console.log() individual.

// → Seu código aqui:

const lerTeclado = require('readline-sync');

let usuario = {
  peso: Number(lerTeclado.question("Digite seu peso: ")),
  altura: Number(lerTeclado.question("Digite sua altura: "))
};

usuario.imc = usuario.peso / (usuario.altura ** 2);

let imcAbaixoDoPeso = usuario.imc < 18.5;
let imcNormal = usuario.imc >= 18.5 && usuario.imc <= 24.9;
let imcAcimaDoPeso = usuario.imc >= 25 && usuario.imc <= 29.9;

console.log(`IMC = ${usuario.imc}`);
console.log(`Abaixo do peso = ${imcAbaixoDoPeso}`);
console.log(`Normal = ${imcNormal}`);
console.log(`Acima do peso = ${imcAcimaDoPeso}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Combinando || com operadores relacionais
// ------------------------------------------------------------
// a) Declare "notaFinal" com valor 4.8.
// b) Armazene em "precisaRecuperacao" o resultado de:
//    notaFinal >= 4 && notaFinal < 6
// c) Armazene em "reprovado" o resultado de:
//    notaFinal < 4
// d) Armazene em "precisaDeAjuda" o resultado de:
//    precisaRecuperacao || reprovado
// e) Exiba todos os resultados com template literal.

// → Seu código aqui:

let notaFinal = 4.8;

let precisaRecuperacao = notaFinal >= 4 && notaFinal < 6;
let reprovado = notaFinal < 4;
let precisaDeAjuda = precisaRecuperacao || reprovado;

console.log(`notaFinal = ${notaFinal}`);
console.log(`precisaRecuperacao = ${precisaRecuperacao}`);
console.log(`reprovado = ${reprovado}`);
console.log(`precisaDeAjuda = ${precisaDeAjuda}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Operador ternário
// ------------------------------------------------------------
// a) Declare "temperatura" com valor 38.2.
// b) Usando o operador ternário, armazene em "diagnostico":
//    Se temperatura >= 37.6 → "Febre detectada"
//    Caso contrário → "Temperatura normal"
// c) Exiba a variável "diagnostico" com template literal mostrando a temperatura e o resultado do diagnóstico.

// → Seu código aqui:

let temperatura = 38.2;

let diagnostico = temperatura >= 37.6
  ? "Febre detectada"
  : "Temperatura normal";

console.log(`temperatura = ${temperatura}`);
console.log(`diagnostico = ${diagnostico}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Operador ternário
// ------------------------------------------------------------
// a) Declare "velocidade" com valor 110 e "limiteVelocidade" com valor 100.
// c) Usando o operador ternário, armazene em "statusMulta":
//    Se velocidade > limiteVelocidade → "Multa aplicada"
//    Caso contrário → "Velocidade regular"
// c) Exiba a variável "statusMulta" com template literal mostrando a velocidade e o resultado da multa.

// → Seu código aqui:

let velocidade = 110;
let limiteVelocidade = 100;

let statusMulta = velocidade > limiteVelocidade
  ? "Multa aplicada"
  : "Velocidade regular";

console.log(`velocidade = ${velocidade}`);
console.log(`statusMulta = ${statusMulta}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Operador ternário e questionamento
// ------------------------------------------------------------
// a) Pergunte ao usuário se ele é bolsista (keyInYN()). Armazene em "ehEstudante".
// b) Pergunte ao usuário se ele paga mais que R$ 1000,00 mensais pelo curso.
// b) Usando o operadores ternários, armazene em "mensagem":
//    Se é bolsista e paga mais que R$ 1000,00 → "Desconto aplicado!"
//    Caso contrário → "Desconto não aplicado."
// c) Exiba a variável "mensagem" com template literal.

// → Seu código aqui:

let ehEstudante = lerTeclado.keyInYN("É bolsista? ");
let pagaMaisMil = lerTeclado.questionFloat("Paga mais que R$1000? ");

let mensagem = (ehEstudante && pagaMaisMil > 1000)
  ? "Desconto aplicado!"
  : "Desconto não aplicado.";

console.log(`mensagem = ${mensagem}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Verificação de acesso com input
// ------------------------------------------------------------
// a) Peça ao usuário e armazene os dados em um objeto:
//    - Sua idade (questionInt()).
//    - Se possui ingresso (keyInYN()).
//    - Se é associado ao clube (keyInYN()).
// b) Armazene e exiba os resultados das seguintes verificações em outro objeto:
//    - "podeEntrarNormal": (idade maior ou igual a 18 e possuiIngresso) ou ehAssociado
//    - "podeEntrarSocio": possuiIngresso e ehAssociado
//    - "precisaAcompanhante": idade menor que 18
//    - "naoPodeEntrar": não possuiIngresso e não ehAssociado
// c) Exiba a mensagem final usando ternário:
//    Se podeEntrarNormal ou podeEntrarSocio → "Entrada liberada!"
//    Caso contrário → "Entrada negada."

// → Seu código aqui:

let pessoa = {
  idade: lerTeclado.questionInt("Idade: "),
  possuiIngresso: lerTeclado.keyInYN("Possui ingresso? "),
  ehAssociado: lerTeclado.keyInYN("e associado? ")
};

let acesso = {
  podeEntrarNormal: (pessoa.idade >= 18 && pessoa.possuiIngresso) || pessoa.ehAssociado,
  podeEntrarSocio: pessoa.possuiIngresso && pessoa.ehAssociado,
  precisaAcompanhante: pessoa.idade < 18,
  naoPodeEntrar: !pessoa.possuiIngresso && !pessoa.ehAssociado
};

let mensagemAcesso =
  (acesso.podeEntrarNormal || acesso.podeEntrarSocio)
    ? "Entrada liberada!"
    : "Entrada negada.";

console.log(`mensagem = ${mensagemAcesso}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Verificação de estoque com objeto
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do produto.
//    - Quantidade em estoque.
//    - Se o produto está ativo no sistema (keyInYN()).
// b) Armazene os dados em um objeto chamado "produto".
// c) Crie as seguintes verificações booleanas:
//    - "temEstoque": quantidade maior que 0
//    - "produtoDisponivel": temEstoque e está ativo
//    - "produtoIndisponivel": não temEstoque || não está ativo
// d) Exiba os resultados com template literal.

// → Seu código aqui:

let produto = {
  nome: lerTeclado.question("Nome do produto: "),
  quantidade: lerTeclado.questionInt("Quantidade: "),
  ativo: lerTeclado.keyInYN("Produto ativo? ")
};

let temEstoque = produto.quantidade > 0;
let produtoDisponivel = temEstoque && produto.ativo;
let produtoIndisponivel = !temEstoque || !produto.ativo;

console.log(`temEstoque = ${temEstoque}`);
console.log(`produtoDisponivel = ${produtoDisponivel}`);
console.log(`produtoIndisponivel = ${produtoIndisponivel}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 11 – Verificação de permissões
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se ele é administrador (keyInYN())
//    - Se ele está logado (keyInYN())
//    - Se a conta está ativa (keyInYN())
// b) Armazene as respostas em um objeto chamado "usuario".
// c) Crie as seguintes verificações:
//    - "acessoSistema": logado e contaAtiva
//    - "acessoAdmin": acessoSistema e ehAdmin
//    - "acessoNegado": não logado ou não contaAtiva
// d) Exiba todos os resultados.

// → Seu código aqui:

let usuarioSistema = {
  ehAdmin: lerTeclado.keyInYN("É admin? "),
  logado: lerTeclado.keyInYN("Está logado? "),
  contaAtiva: lerTeclado.keyInYN("Conta ativa? ")
};

let acessoSistema = usuarioSistema.logado && usuarioSistema.contaAtiva;
let acessoAdmin = acessoSistema && usuarioSistema.ehAdmin;
let acessoNegado = !usuarioSistema.logado || !usuarioSistema.contaAtiva;

console.log(`acessoSistema = ${acessoSistema}`);
console.log(`acessoAdmin = ${acessoAdmin}`);
console.log(`acessoNegado = ${acessoNegado}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Sistema simples de login
// ------------------------------------------------------------
// a) Crie um objeto "credenciaisSistema" contendo:
//    usuario: "admin"
//    senha: "1234"
// b) Pergunte ao usuário:
//    - usuário
//    - senha
// c) Crie as verificações:
//    - "usuarioCorreto": usuarioDigitado estritamente igual a usuario
//    - "senhaCorreta": senhaDigitada estritamente igual a senha
//    - "loginValido": usuarioCorreto e senhaCorreta
// d) Usando ternário, exiba:
//    Se loginValido → "Login realizado com sucesso!"
//    Caso contrário → "Usuário ou senha incorretos."

// → Seu código aqui:

let credenciaisSistema = {
  usuario: "admin",
  senha: "1234"
};

let usuarioDigitado = lerTeclado.question("Usuário: ");
let senhaDigitada = lerTeclado.question("Senha: ");

let usuarioCorreto = usuarioDigitado === credenciaisSistema.usuario;
let senhaCorreta = senhaDigitado === credenciaisSistema.senha;
let loginValido = usuarioCorreto && senhaCorreta;

let resultadoLogin = loginValido
  ? "Login realizado com sucesso!"
  : "Usuário ou senha incorretos.";

console.log(`resultadoLogin = ${resultadoLogin}`);