import { NUM_ROWS, NUM_COLS } from "@/constants";
import { Board } from "@/types";

export function moveElementsDown(board: Board) {
  console.log("inside moveElementsDown");
  const newBoard = board.map((el) => el);
  for (let col = 0; col < NUM_COLS; col++) {
    for (let row = 0; row < NUM_ROWS; row++) {
      if (
        newBoard[row + col * NUM_ROWS] &&
        col != NUM_COLS - 1 &&
        !newBoard[row + (col + 1) * NUM_ROWS]
      ) {
        newBoard[row + (col + 1) * NUM_ROWS] = newBoard[row + col * NUM_ROWS];
        newBoard[row + col * NUM_ROWS] = "";
      }
    }
  }
  // Return the modified board
  return newBoard;
}
