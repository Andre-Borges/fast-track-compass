// https://www.beecrowd.com.br/judge/pt/problems/view/1437

var input = require("fs").readFileSync("1437/stdin", "utf8");

const lines = input.split("\n");
const directions = [
  {
    position: 0,
    name: "N",
  },
  {
    position: 1,
    name: "L",
  },
  {
    position: 2,
    name: "S",
  },
  {
    position: 3,
    name: "O",
  },
];

let firstRound = true;
let direction = directions[0];

const moveDirection = (right) => {
  if (right) {
    if (direction.position === 3) direction = directions[0];
    else direction = directions[direction.position + 1];
  } else {
    if (direction.position === 0) direction = directions[3];
    else direction = directions[direction.position - 1];
  }
};

lines.forEach((line) => {
  const stringValue = line.split(" ");
  const numberInput = parseInt(stringValue, 10);

  if (!isNaN(numberInput) && !firstRound) {
    console.log(direction.name);
    direction = directions[0];
  } else if (isNaN(numberInput)) {
    const positions = stringValue[0].split("");

    positions.forEach((position) => {
      if (position === "D") moveDirection(true);
      else if (position === "E") moveDirection(false);
    });
  }

  firstRound = false;
});
