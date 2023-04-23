import { Board } from "./boardGame";

export interface PuyoPuyoState {
  board: Board;
  setBoard?: (board: Board) => void;
}
