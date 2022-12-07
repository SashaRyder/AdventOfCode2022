import { readFileSync } from "fs";

const puzzle = readFileSync("puzzle.txt", { encoding: "utf8" });
let columns = puzzle.split(/\r?\n/);

const calculateCharacterValue = (character) => {
  const amtToRemove = character === character.toUpperCase() ? 38 : 96;
  return character.charCodeAt(0) - amtToRemove;
}

//Part 1

const result = columns.map((column) => {
  const first = column.slice(0, column.length / 2);
  const second = [...column.slice(column.length / 2)];
  const priority = second.filter((value) => first.includes(value));
  return calculateCharacterValue(priority[0]);
});

console.log(result.reduce((a,b) => a + b, 0));

//Part 2

const groupSize = 3;
let partTwoResult = 0;

for (let i = 0; i < columns.length; i += groupSize) {
    const [first, second, third] = columns.slice(i, i + groupSize);
    const chars = [...first].filter(char => second.includes(char) && third.includes(char));
    partTwoResult += calculateCharacterValue(chars[0]);
}

console.log(partTwoResult);