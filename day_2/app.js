import { readFileSync } from "fs";

const puzzle = readFileSync("puzzle.txt", { encoding: "utf8" });
const turns = puzzle.split(/\r?\n/);

const playerMapping = { X: 1, Y: 2, Z: 3 };
const GAME_WIN_BONUS = 6;
const GAME_DRAW_BONUS = 3;

const gameResultsPartOne = turns.map((turn) => {
  const [opp, player] = turn.split(" ");
  const playerValue = playerMapping[player];
  switch (opp) {
    case "A":
      return player === "X"
        ? playerValue + GAME_DRAW_BONUS
        : player === "Z"
          ? playerValue
          : playerValue + GAME_WIN_BONUS;
    case "B":
      return player === "Y"
        ? playerValue + GAME_DRAW_BONUS
        : player === "X"
          ? playerValue
          : playerValue + GAME_WIN_BONUS;
    case "C":
      return player === "Z"
        ? playerValue + GAME_DRAW_BONUS
        : player === "Y"
          ? playerValue
          : playerValue + GAME_WIN_BONUS;
  }
});

console.log(gameResultsPartOne.reduce((a, b) => a + b, 0));

//Part 2
const oppMapping = { A: 1, B: 2, C: 3 };

const gameResultsPartTwo = turns.map((turn) => {
  const [opp, player] = turn.split(" ");
  switch (player) {
    case "X":
      return opp === "A"
        ? playerMapping["Z"]
        : opp === "B"
          ? playerMapping["X"]
          : playerMapping["Y"]
    case "Y":
      return oppMapping[opp] + GAME_DRAW_BONUS;
    case "Z":
      return opp === "A"
        ? playerMapping["Y"] + GAME_WIN_BONUS
        : opp === "B"
          ? playerMapping["Z"] + GAME_WIN_BONUS
          : playerMapping["X"] + GAME_WIN_BONUS
  }
});

console.log(gameResultsPartTwo.reduce((a, b) => a + b, 0));