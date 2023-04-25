import { useCallback, useState } from "react";
import { conversionMap } from "@/utils";
import { Sprite } from "@pixi/react";
import { GRID_SIZE, NUM_ROWS, NUM_COLS } from "@/constants";
import { useContext } from "react";
import { PuyoPuyoContext } from "@/context";
import { movePlayerSetDown } from "@/utils/";
import { useTick } from "@pixi/react";

export function useGameStage() {
  const { board, playerSet, setPlayerSet } = useContext(PuyoPuyoContext);
  const [time, setTime] = useState(0);

  useTick((delta) => {
    if (playerSet.length) {
      if (time > 6) {
        const newPlayerSet = movePlayerSetDown({
          board,
          playerSet,
        });
        if (newPlayerSet) {
          setPlayerSet?.(newPlayerSet);
          setTime(0);
        }
      } else {
        setTime(time + delta);
      }
    }
  });

  const mapTextures = useCallback(() => {
    let map = [];
    for (let i = 0; i < board.length; i++) {
      const image = conversionMap[board[i]];
      if (!image) {
        continue;
      }
      const x = Math.floor(i % NUM_ROWS);
      const y = Math.floor(i / NUM_ROWS);

      map.push(
        <Sprite
          key={`slim-${x}-${y}`}
          image={image}
          {...{ x: x * GRID_SIZE, y: y * GRID_SIZE }}
          anchor={[0, 0]}
        />
      );
    }
    return map;
  }, [board]);

  const playerTextures = useCallback(() => {
    let map = [];
    for (let i = 0; i < playerSet.length; i++) {
      const playerSlim = playerSet[i];
      const image = conversionMap[playerSlim.color];
      if (!image) {
        continue;
      }
      const x = Math.floor(playerSlim.position % NUM_ROWS);
      const y = Math.floor(playerSlim.position / NUM_ROWS);

      map.push(
        <Sprite
          key={`slim-${x}-${y}`}
          image={image}
          {...{ x: x * GRID_SIZE, y: y * GRID_SIZE }}
          anchor={[0, 0]}
        />
      );
    }
    return map;
  }, [playerSet]);

  return {
    mapTextures,
    playerTextures,
  };
}
