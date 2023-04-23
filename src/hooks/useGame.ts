import React, { useState, createContext } from "react";
import { Board } from "@/types";
import { defaultBoard } from "@/context";
import { useMoveKeydown } from "@/hooks/useMoveKeydown";
import { useActionKeydown } from "@/hooks/useActionKeydown";

export function useGame() {
  const [board, setBoard] = useState<Board>(defaultBoard);

  useActionKeydown({
    reactToAction: (action) => {
      console.log("useActionKeydown", action);
    },
  });

  useMoveKeydown({
    reactToMove: (move) => console.log("useMoveKeydown", move),
  });

  return {
    board,
    setBoard,
  };
}
