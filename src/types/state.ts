import React from "react";
import { Board, PlayerSet } from "./boardGame";

export interface ContextValue {
  board: Board;
  setBoard: React.Dispatch<React.SetStateAction<Board>>;
  playerSet: PlayerSet;
  setPlayerSet: React.Dispatch<React.SetStateAction<PlayerSet>>;
}
