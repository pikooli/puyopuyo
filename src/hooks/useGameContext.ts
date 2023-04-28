import { useMemo, useState } from "react";
import { Board, PlayerSet } from "@/types";
import { defaultBoard, defaultPlayerSet } from "@/context";

export function useGameContext() {
  const [board, setBoard] = useState<Board>(defaultBoard);
  const [playerSet, setPlayerSet] = useState<PlayerSet>(defaultPlayerSet);

  const contextValue = useMemo(
    () => ({
      board,
      setBoard,
      playerSet,
      setPlayerSet,
    }),
    [board, playerSet, setBoard, setPlayerSet]
  );

  return contextValue;
}
