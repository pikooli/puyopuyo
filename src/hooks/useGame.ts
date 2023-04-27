import { useCallback, useState } from "react";
import { Board, PlayerSet, ActionKey } from "@/types";
import { defaultBoard, defaultPlayerSet } from "@/context";
import { useMoveKeydown } from "@/hooks/useMoveKeydown";
import { useActionKeydown } from "@/hooks/useActionKeydown";
import {
  moveAllElementsDown,
  movePlayerSetLeft,
  movePlayerSetRight,
  setPlayerSlimInBoard,
  rotatePlayerSetToLeft,
  rotatePlayerSetToRight,
} from "@/utils/";
import { KEY_MOVE, KEY_ACTION } from "@/constants";

export function useGame() {
  const [board, setBoard] = useState<Board>(defaultBoard);
  const [playerSet, setPlayerSet] = useState<PlayerSet>(defaultPlayerSet);

  const reactToAction = useCallback(
    (action: ActionKey) => {
      switch (action) {
        case KEY_ACTION["KeyQ"]:
          setPlayerSet((prev) => {
            const newPlayerSet = rotatePlayerSetToLeft({
              board,
              playerSet: prev,
            });
            return newPlayerSet || prev;
          });
          break;
        case KEY_ACTION["KeyW"]:
          setPlayerSet((prev) => {
            const newPlayerSet = rotatePlayerSetToRight({
              board,
              playerSet: prev,
            });
            return newPlayerSet || prev;
          });
          break;
      }
    },
    [board]
  );

  useActionKeydown({
    reactToAction,
  });

  const reactToMove = useCallback(
    (move: any) => {
      switch (move) {
        case KEY_MOVE["ArrowDown"]:
          setPlayerSet((prevPlayerSet) => {
            const newBoard = moveAllElementsDown(
              setPlayerSlimInBoard({
                board: board,
                playerSet: prevPlayerSet,
              })
            );
            setBoard(newBoard);
            return [];
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
