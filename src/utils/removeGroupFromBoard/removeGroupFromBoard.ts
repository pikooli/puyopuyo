import { Board } from "@/types";

interface RemoveGroupFromBoard {
  board: Board;
  indexes: number[];
}

export function removeGroupFromBoard({
  board,
  indexes,
}: RemoveGroupFromBoard): Board {
  for (let i = 0; i < indexes.length; i++) {
    board[indexes[i]] = "";
  }

  return board;
}
