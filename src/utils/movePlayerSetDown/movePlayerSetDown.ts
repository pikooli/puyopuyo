import { NUM_ROWS } from "@/constants";
import { Board, PlayerSet } from "@/types";

interface MovePlayerSetDown {
  board: Board;
  playerSet: PlayerSet;
}

export function movePlayerSetDown(props: MovePlayerSetDown): PlayerSet | null {
  const { board, playerSet } = props;
  const slim1 = playerSet[0];
  const slim2 = playerSet[1];

  if (
    slim1.position + NUM_ROWS < board.length &&
    slim2.position + NUM_ROWS < board.length &&
    !board[slim2.position + NUM_ROWS] &&
    !board[slim1.position + NUM_ROWS]
  ) {
    slim2.position = slim2.position + NUM_ROWS;
    slim1.position = slim1.position + NUM_ROWS;
    return [slim1, slim2];
  }
  return null;
}
