import { useCallback } from "react";
// import { conversionMap } from "@/utils";
import { Sprite } from "@pixi/react";
import { GRID_SIZE, NUM_ROWS } from "@/constants";
import { SlimeColor } from "@/types";
import { useContext } from "react";
import { PuyoPuyoContext } from "@/context";

export function useGameStage() {
  const { board } = useContext(PuyoPuyoContext);

  const mapTextures = useCallback(() => {
    return board.map((el: SlimeColor, idx: number) => {
      // const title = conversionMap[el];

      const x = Math.floor(idx % NUM_ROWS);
      const y = Math.floor(idx / NUM_ROWS);

      console.log(idx, x, y);

      return (
        <Sprite
          key={idx}
          image="https://pixijs.io/pixi-react/img/bunny.png"
          {...{ x: x * GRID_SIZE, y: y * GRID_SIZE }}
          anchor={[0, 0]}
        />
      );
    });
  }, [board]);

  return {
    mapTextures,
  };
}
