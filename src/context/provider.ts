import { createContext } from "react";
import { defaultBoard, defaultPlayerSet } from "./defaultState";
import { ContextValue } from "@/types";

export const PuyoPuyoContext = createContext<ContextValue>({
  board: defaultBoard,
  playerSet: defaultPlayerSet,
  setBoard: () => {},
  setPlayerSet: () => {},
});
