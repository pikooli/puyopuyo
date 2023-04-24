import { NUM_ROWS } from "@/constants";
import { Board, PlayerSet } from "@/types";

interface MovePlayerSetDown {
  board: Board;
  playerSet: PlayerSet;
}

export function movePlayerSetDown(props: MovePlayerSetDown): {
  newBoard: Board;
  newPlayerSet: PlayerSet;
} {
  const { board, playerSet } = props;
  const slim1 = playerSet[0];
  const slim2 = playerSet[1];
  const outOfHeight = slim2.position + NUM_ROWS > board.length;

  if (!outOfHeight && !board[slim2.position + NUM_ROWS]) {
    board[slim2.position] = "";
    board[slim1.position] = "";
    slim2.position = slim2.position + NUM_ROWS;
    slim1.position = slim1.position + NUM_ROWS;
    board[slim2.position] = slim2.color;
    board[slim1.position] = slim1.color;
  }

  return { newBoard: board, newPlayerSet: [slim1, slim2] };
}
