import { useState, useContext } from "react";
import { PuyoPuyoContext } from "@/context";
import { useTick } from "@pixi/react";
import {
  movePlayerSetDown,
  detectPlayerSetEnd,
  createNewPlayerSet,
  setPlayerSlimInBoard,
} from "@/utils/";

export function useGameTime() {
  const { board, playerSet, setPlayerSet, setBoard } =
    useContext(PuyoPuyoContext);
  const [time, setTime] = useState(0);

  useTick((delta) => {
    if (playerSet.length) {
      if (time > 20) {
        const newPlayerSet = movePlayerSetDown({
          board,
          playerSet,
        });
        if (newPlayerSet) {
          const shouldBePlaced = detectPlayerSetEnd({
            board,
            playerSet: newPlayerSet,
          });
          if (shouldBePlaced) {
            const newBoard = setPlayerSlimInBoard({
              board,
              playerSet: newPlayerSet,
            });
            setBoard(newBoard);
            setPlayerSet(createNewPlayerSet());
          } else {
            setPlayerSet(newPlayerSet);
          }
          setTime(0);
        }
      } else {
        setTime(time + delta);
      }
    }
  });
}
