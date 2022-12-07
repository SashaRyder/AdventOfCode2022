import { readFileSync } from "fs";

const puzzle = readFileSync("puzzle.txt", { encoding: "utf8" });
let columns = puzzle.split(/\r?\n/);

// Part One

const result = columns.reduce((prev, curr) => {
  const splitPairs = curr.split(",");
  const [firstStart, firstEnd] = splitPairs[0].split("-").map(Number);
  const [secondStart, secondEnd] = splitPairs[1].split("-").map(Number);
  const firstPart = Array.from(Array(firstEnd + 1).keys()).slice(firstStart);
  const secondPart = Array.from(Array(secondEnd + 1).keys()).slice(secondStart);
  const isMatch = (
    firstPart.includes(secondStart) && firstPart.includes(secondEnd)) || 
    (secondPart.includes(firstStart) && secondPart.includes(firstEnd)
  );
  return prev + (isMatch ? 1 : 0);
}, 0);

console.log(result);

// Part Two

const resultPartTwo = columns.reduce((prev, curr) => {
  const splitPairs = curr.split(",");
  const [firstStart, firstEnd] = splitPairs[0].split("-").map(Number);
  const [secondStart, secondEnd] = splitPairs[1].split("-").map(Number);
  const firstPart = Array.from(Array(firstEnd + 1).keys()).slice(firstStart);
  const secondPart = Array.from(Array(secondEnd + 1).keys()).slice(secondStart);
  const isMatch = (
    firstPart.includes(secondStart) || firstPart.includes(secondEnd)) || 
    (secondPart.includes(firstStart) || secondPart.includes(firstEnd)
  );
  return prev + (isMatch ? 1 : 0);
}, 0);

console.log(resultPartTwo);