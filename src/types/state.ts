import { Board, PlayerSet } from "./boardGame";

export interface PuyoPuyoState {
  board: Board;
  setBoard?: (board: Board) => void;
  playerSet: PlayerSet;
  setPlayerSet?: (playerSet: PlayerSet) => void;
}
