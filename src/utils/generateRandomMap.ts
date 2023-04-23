const numRows = 6;
const numCols = 12;
const letters = [""];
const gameBoard = [];

for (let i = 0; i < numRows * numCols; i++) {
  const letterIndex = Math.floor(Math.random() * letters.length);
  gameBoard.push(letters[letterIndex]);
}

console.log(gameBoard);
