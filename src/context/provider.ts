import { createContext } from "react";
import { defaultBoard, defaultPlayerSet } from "./defaultState";
import { PuyoPuyoState } from "@/types";

export const PuyoPuyoContext = createContext<PuyoPuyoState>({
  board: defaultBoard,
  playerSet: defaultPlayerSet,
});
