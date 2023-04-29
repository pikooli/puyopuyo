import { NUM_ROWS } from "@/constants";
import { Board } from "@/types";

interface DetectGameOver {
  board: Board;
}

export function detectGameOver(props: DetectGameOver) {
  const { board } = props;

  for (let i = 0; i < NUM_ROWS; i++) {
    if (board[i]) {
      return true;
    }
  }

  return false;
}
