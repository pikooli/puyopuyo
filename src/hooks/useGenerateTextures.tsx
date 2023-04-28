import { useCallback } from "react";
import { conversionMap } from "@/utils";
import { Sprite } from "@pixi/react";
import { GRID_SIZE, NUM_ROWS } from "@/constants";
import { useContext } from "react";
import { PuyoPuyoContext } from "@/context";

export function useGenerateTextures() {
  const { board, playerSet } = useContext(PuyoPuyoContext);

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
