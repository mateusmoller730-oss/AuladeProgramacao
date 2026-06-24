

let lerTeclado = require('readline-sync');

let m = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"]
];

let venceu = false;

for (let jogada = 0; jogada < 9; jogada++) {

  console.table(m);

  let jogador;

  if (jogada % 2 == 0) {
    jogador = "X";
  } else {
    jogador = "O";
  }

  console.log("Jogador:", jogador);

  let linha = Number(lerTeclado.question("Linha: "));
  let coluna = Number(lerTeclado.question("Coluna: "));

  while (
    linha < 0 || linha > 2 ||
    coluna < 0 || coluna > 2
  ) {
    console.log("Posicao invalida!");

    linha = Number(lerTeclado.question("Linha: "));
    coluna = Number(lerTeclado.question("Coluna: "));
  }

  while (m[linha][coluna] != "-") {

    console.log("Posicao ocupada!");

    linha = Number(lerTeclado.question("Linha: "));
    coluna = Number(lerTeclado.question("Coluna: "));
  }

  m[linha][coluna] = jogador;

                            // verificar linhas
  for (let i = 0; i < 3; i++) {

    if (
      m[i][0] == jogador &&
      m[i][1] == jogador &&
      m[i][2] == jogador
    ) {
      venceu = true;
    }
  }

                                                              //// verificar colunas
  for (let i = 0; i < 3; i++) {

    if (
      m[0][i] == jogador &&
      m[1][i] == jogador &&
      m[2][i] == jogador
    ) {
      venceu = true;
    }
  }

                            // diagonais
  if (
    m[0][0] == jogador &&
    m[1][1] == jogador &&
    m[2][2] == jogador
  ) {
    venceu = true;
  }

  if (
    m[0][2] == jogador &&
    m[1][1] == jogador &&
    m[2][0] == jogador
  ) {
    venceu = true;
  }

  // vitória
  if (venceu == true) {
    console.table(m);
    console.log("Jogador " + jogador + " venceu!");
    break;
  }
}
if (venceu == false) {
    console.table(m);
    console.log("Empate!");
  }


























































  