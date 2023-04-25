import { useCallback, useState } from "react";
import { Board, PlayerSet } from "@/types";
import { defaultBoard, defaultPlayerSet } from "@/context";
import { useMoveKeydown } from "@/hooks/useMoveKeydown";
import { useActionKeydown } from "@/hooks/useActionKeydown";
import {
  moveAllElementsDown,
  movePlayerSetLeft,
  movePlayerSetRight,
} from "@/utils/";
import { KEY_MOVE } from "@/constants";

export function useGame() {
  const [board, setBoard] = useState<Board>(defaultBoard);
  const [playerSet, setPlayerSet] = useState<PlayerSet>(defaultPlayerSet);

  useActionKeydown({
    reactToAction: (action) => {
      console.log("useActionKeydown", action);
    },
  });

  const reactToMove = useCallback(
    (move: any) => {
      switch (move) {
        case KEY_MOVE["ArrowDown"]:
          setBoard((prev) => {
            setPlayerSet([]);
            return moveAllElementsDown(prev);
          });
          break;
        case KEY_MOVE["ArrowRight"]:
          setPlayerSet((prev) => {
            const newPlayerSet = movePlayerSetRight({ board, playerSet: prev });
            return newPlayerSet || prev;
          });
          break;
        case KEY_MOVE["ArrowLeft"]:
          setPlayerSet((prev) => {
            const newPlayerSet = movePlayerSetLeft({ board, playerSet: prev });
            return newPlayerSet || prev;
          });
          break;
      }
    },
    [board]
  );

  useMoveKeydown({
    reactToMove: reactToMove,
  });

  return {
    board,
    setBoard,
    playerSet,
    setPlayerSet,
  };
}
