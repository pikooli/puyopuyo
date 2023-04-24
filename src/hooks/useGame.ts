import { useEffect, useState } from "react";
import { Board, PlayerSet } from "@/types";
import { defaultBoard, defaultPlayerSet } from "@/context";
import { useMoveKeydown } from "@/hooks/useMoveKeydown";
import { useActionKeydown } from "@/hooks/useActionKeydown";
import { moveAllElementsDown, movePlayerSetDown } from "@/utils/";

export function useGame() {
  const [board, setBoard] = useState<Board>(defaultBoard);
  const [playerSet, setPlayerSet] = useState<PlayerSet>(defaultPlayerSet);

  useActionKeydown({
    reactToAction: (action) => {
      console.log("useActionKeydown", action);
    },
  });

  useMoveKeydown({
    reactToMove: (move) => {
      if (move === "ArrowDown") {
        setBoard((prev) => {
          setPlayerSet([]);
          return [...moveAllElementsDown(prev)];
        });
      }
    },
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (playerSet.length) {
        const { newBoard, newPlayerSet } = movePlayerSetDown({
          board,
          playerSet,
        });
        setBoard(newBoard);
        setPlayerSet(newPlayerSet);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [board, playerSet]);

  return {
    board,
    setBoard,
  };
}
