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
let lerTeclado = require('readline-sync');
//
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

// let a = true && true
// console.log(`true && true >=${a}`);

// let b = true && false
// console.log(`true && false >=${b}`);

// let c = false && true
// console.log(`true && false >=${c}`);

// let d = false && false
// console.log(`true && false >=${d}`);


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

// let a = true || true;
// console.log(`true || true >= ${a}`);

// let b = true || false
// console.log(`true || false >= ${b}`);

// let c = false || true
// console.log(`false || true >= ${b}`);

// let d = false || false
// console.log(`false || false >= ${b}`);


// ------------------------------------------------------------
// EXERCÍCIO 3 – Operador ! (NOT)
// ------------------------------------------------------------
// a) Declare "sistemaAtivo" com valor true.
// b) Declare "modoManutencao" atribuindo o valodo de "sr invertiistemaAtivo" (usando !).
// c) Declare "lugarVago" com valor false.
// d) Declare "lugarOcupado" com o valor invertido de "lugarVago" (usando !).
// e) Exiba todas as 4 variáveis com template literal mostrando seus valores.

// → Seu código aqui:

// let sistemaAtivo = true
// let modoManutencao = !sistemaAtivo;
// let lugarVago = false;
// let lugarOcupado = !lugarVago

// console.log(`Sistema ativo: ${sistemaAtivo}`);
// console.log(`Modo manutenção: ${modoManutencao}`);
// console.log(`Lugar vago: ${lugarVago}`);
// console.log(`Lugar ocupado: ${lugarOcupado}`);


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

// let usuario = {
//     peso:lerTeclado.questionFloat("Qual o seu peso?"),
//     altura:lerTeclado.questionFloat("Qual a sua altura?")
// }

// usuario.imc = usuario.peso / (usuario.altura ** 2);

// let imcAbaixoDoPeso = usuario.imc < 18.5;
// let imcNormal = usuario.imc >= 18.5 && usuario.imc <= 24.9;
// let imcAcimaDoPeso = usuario.imc >= 25 && usuario.imc <= 29.9

// console.log(`IMC : ${usuario.imc}`)
// console.log(`Abaixo do peso? ${imcAbaixoDoPeso}`);
// console.log(`Normal? ${imcNormal}`)
// console.log(`Acima do peso? ${imcAcimaDoPeso}`)

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

// let notaFinal = 4.8
// let precisaRecuperacao = notaFinal >= 4 && notaFinal < 6
// let reprovado =  notaFinal < 4
// let precisaDeAjuda = precisaRecuperacao || reprovado

// console.log(`Nota final: ${notaFinal}`);
// console.log(`Precisa de recuperacao? ${precisaRecuperacao}`);
// console.log(`Reprovado? ${reprovado}`)
// console.log(`Precisa de ajuda? ${precisaDeAjuda}`)


// ------------------------------------------------------------
// EXERCÍCIO 6 – Operador ternário
// ------------------------------------------------------------
// a) Declare "temperatura" com valor 38.2.
// b) Usando o operador ternário, armazene em "diagnostico":
//    Se temperatura >= 37.6 → "Febre detectada"
//    Caso contrário → "Temperatura normal"
// c) Exiba a variável "diagnostico" com template literal mostrando a temperatura e o resultado do diagnóstico.

// → Seu código aqui:

// let temperatura = 38.2
// let diagnostico = ( temperatura >= 37.6 ? "Febre detectada" : "temperatura normal" )

// console.log(`A temperatura é ${temperatura}°C. Resultado: ${diagnostico}.`)



// ------------------------------------------------------------
// EXERCÍCIO 7 – Operador ternário
// ------------------------------------------------------------
// a) Declare "velocidade" com valor 110 e "limiteVelocidade" com valor 100.
// c) Usando o operador ternário, armazene em "statusMulta":
//    Se velocidade > limiteVelocidade → "Multa aplicada"
//    Caso contrário                    → "Velocidade regular"
// c) Exiba a variável "statusMulta" com template literal mostrando a velocidade e o resultado da multa.

// → Seu código aqui:

// let velocidade = 110
// let limiteVelocidade = 100
// let statusMulta = (velocidade > limiteVelocidade ? "Multa aplicada" : "Velocidade regular")

// console.log(`A velocidade é ${velocidade} km/h. Status: ${statusMulta}.`)


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

// let ehEstudante = lerTeclado.keyInYN("Você é bolsista?");
// let pagaMais = lerTeclado.keyInYN("Estudante paga mais que R$ 1000,00 mensais pelo curso?");
// let mensagem =(ehEstudante && pagaMaisDe1000)  ? "Desconto aplicado!"  : "Desconto não aplicado.";
// console.log(`Situação do aluno: Bolsista? ${ehEstudante}, Paga mais que R$ 1000,00? ${pagaMais}. ${mensagem}`);

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


console.log("_______________________________");
