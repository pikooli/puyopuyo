import { useCallback, useEffect, useContext } from "react";
import { KEY_MOVE } from "@/constants";
import { ArrowKey } from "@/types";
import {
  moveAllElementsDown,
  movePlayerSetLeft,
  movePlayerSetRight,
  setPlayerSlimInBoard,
} from "@/utils/";
import { PuyoPuyoContext } from "@/context";

export function useMoveKeydown() {
  const { board, setBoard, setPlayerSet, playerSet } =
    useContext(PuyoPuyoContext);

  const keydown = useCallback(
    (e: KeyboardEvent) => {
      const move = KEY_MOVE[e.code as ArrowKey];
      if (move) {
        e.preventDefault();
        switch (move) {
          case KEY_MOVE["ArrowDown"]:
            const newBoard = setPlayerSlimInBoard({
              board: board,
              playerSet,
            });
            setPlayerSet([]);
            setBoard(moveAllElementsDown(newBoard));
            break;
          case KEY_MOVE["ArrowRight"]:
            setPlayerSet((prev) => {
              const newPlayerSet = movePlayerSetRight({
                board,
                playerSet: prev,
              });
              return newPlayerSet || prev;
            });
            break;
          case KEY_MOVE["ArrowLeft"]:
            setPlayerSet((prev) => {
              const newPlayerSet = movePlayerSetLeft({
                board,
                playerSet: prev,
              });
              return newPlayerSet || prev;
            });
            break;
        }
      }
    },
    [board, playerSet, setBoard, setPlayerSet]
  );

  useEffect(() => {
    window.document.addEventListener("keydown", keydown);
    return function () {
      window.document.removeEventListener("keydown", keydown);
    };
  }, [keydown]);
}
