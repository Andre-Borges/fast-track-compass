// https://www.beecrowd.com.br/judge/pt/problems/view/2455

// Joãozinho acaba de mudar de escola e a primeira coisa que percebeu na nova escola é que a gangorra do parquinho não é simétrica, uma das extremidades é mais longa que a outra. Após brincar algumas vezes com um amigo de mesmo peso, ele percebeu que quando está em uma extremidade, a gangorra se desequilibra para o lado dele (ou seja, ele fica na parte de baixo, e o amigo na parte de cima), mas quando eles trocam de lado, a gangorra se desequilibra para o lado do amigo. Sem entender a situação, Joãozinho pediu ajuda a outro amigo de outra série, que explicou que o comprimento do lado interfere no equilíbrio da gangorra, pois a gangorra estará equilibrada quando

// P1 ∗ C1 = P2 ∗ C2

// onde P1 e P2 são os pesos da criança no lado esquerdo e direito, respectivamente, e C1 e C2 são os comprimentos da gangorra do lado esquerdo e direito, respectivamente.

// Entrada
// A primeira e única linha da entrada contém 4 inteiros, P1, C1, P2 e C2, (10 ≤ P1, C1, P2 e C2 ≤ 100) nesta ordem.

// Saída
// Se a gangorra estiver equilibrada, imprima ‘0’. Se ela estiver desequilibrada de modo que a criança esquerda esteja na parte de baixo, imprima ‘-1’, senão, imprima ‘1’.

var input = require("fs").readFileSync("2455/stdin", "utf8");
var lines = input.split(/\s/);

function calcular(lines) {
  const peso1 = lines[0];
  const comprimento1 = lines[1];

  const peso2 = lines[2];
  const comprimento2 = lines[3];

  if (peso1 * comprimento1 == peso2 * comprimento2) {
    console.log("0");
  } else if (peso1 * comprimento1 < peso2 * comprimento2) {
    console.log("1");
  } else {
    console.log("-1");
  }
}

calcular(lines);
