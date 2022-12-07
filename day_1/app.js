import { readFileSync } from "fs";

const puzzle = readFileSync("puzzle.txt", { encoding: "utf8" });
const elves = puzzle.split(/\r?\n/).reduce(
  (prev, curr) => {
    return curr === ""
      ? [...prev, 0]
      : [...prev.slice(0, -1), prev[prev.length - 1] + parseInt(curr)];
  },
  [0]
).sort((a,b) => b - a);

// Part 1 Answer
console.log(elves[0]);

// Part 2 Answer
console.log(elves.slice(0, 3).reduce((a,b) => a + b, 0));