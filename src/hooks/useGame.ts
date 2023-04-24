import { useEffect, useState } from "react";
import { Board } from "@/types";
import { defaultBoard } from "@/context";
import { useMoveKeydown } from "@/hooks/useMoveKeydown";
import { useActionKeydown } from "@/hooks/useActionKeydown";
import { moveElementsDown } from "@/utils/";

export function useGame() {
  const [board, setBoard] = useState<Board>(defaultBoard);

  useActionKeydown({
    reactToAction: (action) => {
      console.log("useActionKeydown", action);
    },
  });

  useMoveKeydown({
    reactToMove: (move) => {
      if (move === "ArrowDown") {
        setBoard((prev) => [...moveElementsDown(prev)]);
      }
    },
  });

  // useEffect(() => {
  //   setBoard((prev) => moveElementsDown(prev));
  // }, []);

  return {
    board,
    setBoard,
  };
}
