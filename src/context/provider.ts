import { createContext } from "react";
import { defaultBoard } from "./defaultState";
import { PuyoPuyoState } from "@/types";

export const PuyoPuyoContext = createContext<PuyoPuyoState>({
  board: defaultBoard,
});
