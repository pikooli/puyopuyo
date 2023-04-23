import { Board } from "@/types";

export interface PuyoPuyoState {
  board: Board;
  setBoard?: (board: Board) => void;
}
