// https://www.beecrowd.com.br/judge/pt/problems/view/1397

var input = require("fs").readFileSync("1397/stdin", "utf8");

const lines = input.split("\n");

let firstRound = true;
let pointsA = 0;
let pointsB = 0;

lines.forEach((line) => {
  const value = line.split(" ");

  if (value.length === 1 && !firstRound) {
    console.log(`${pointsA} ${pointsB}`);
    pointsA = 0;
    pointsB = 0;
  } else if (value.length === 2) {
    const valueA = parseInt(value[0], 10);
    const valueB = parseInt(value[1], 10);

    if (valueA > valueB) pointsA++;
    else if (valueB > valueA) pointsB++;
  }

  firstRound = false;
});
