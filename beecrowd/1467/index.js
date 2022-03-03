// https://www.beecrowd.com.br/judge/pt/problems/view/1467

// Todos devem conhecer o jogo Zerinho ou Um (em algumas regiões também conhecido como Dois ou Um), utilizado para determinar um ganhador entre três ou mais jogadores. Para quem não conhece, o jogo funciona da seguinte maneira. Cada jogador escolhe um valor entre zero ou um; a um comando (geralmente um dos competidores anuncia em voz alta “Zerinho ou... Um!”), todos os participantes mostram o valor escolhido, utilizando uma das mãos: se o valor escolhido foi um, o competidor mostra o dedo indicador estendido; se o valor escolhido foi zero, mostra a mão com todos os dedos fechados. O ganhador é aquele que tiver escolhido um valor diferente de todos os outros; se não há um jogador com valor diferente de todos os outros (por exemplo todos os jogadores escolhem zero, ou um grupo de jogadores escolhe zero e outro grupo escolhe um), não há ganhador. Alice, Beto e Clara são grandes amigos e jogam Zerinho a toda hora: para determinar quem vai comprar a pipoca durante a sessão de cinema, quem vai entrar na piscina primeiro, etc. Jogam tanto que resolveram fazer um plugin no Facebook para jogar Zerinho. Como não sabem programar, dividiram as tarefas entre amigos que sabem, inclusive você. Dados os três valores escolhidos por Alice, Beto e Clara, cada valor zero ou um, escreva um programa que determina se há um ganhador, e nesse caso determina quem é o ganhador.

// Entrada
// A entrada é composta por vários casos de teste. Cada caso de teste consiste de uma única linha, que contém três inteiros A, B e C (A,B,C só podem ser 0 ou 1), indicando respectivamente os valores escolhidos por Alice, Beto e Clara. O final da entrada é determinado por EOF (End of File).

// Saída
// Para cada caso de teste, seu programa deve produzir uma única linha, contendo um único caractere. Se o vencedor é Alice o caractere deve ser ‘A’, se o vencedor é Beto o caractere deve ser ‘B’, se o vencedor é Clara o caractere deve ser ‘C’ e se não há vencedor o caractere deve ser ‘*’ (asterisco)..

var input = require("fs").readFileSync("1467/stdin", "utf8");
const rounds = input.split("\n");

for (let index = 0; index < rounds.length; index++) {
  const plays = rounds[index].split(" ");

  if (plays && plays.length === 3) {
    const alice = plays[0].trim();
    const beto = plays[1].trim();
    const clara = plays[2].trim();

    if (alice === beto && beto === clara) console.log("*");
    else if (alice !== beto && alice !== clara) console.log("A");
    else if (beto !== alice && beto !== clara) console.log("B");
    else console.log("C");
  }
}
