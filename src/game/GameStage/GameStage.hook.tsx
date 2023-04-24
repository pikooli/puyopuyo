import { useCallback } from "react";
import { conversionMap } from "@/utils";
import { Sprite } from "@pixi/react";
import { GRID_SIZE, NUM_ROWS } from "@/constants";
import { SlimeColor } from "@/types";
import { useContext } from "react";
import { PuyoPuyoContext } from "@/context";

export function useGameStage() {
  const { board } = useContext(PuyoPuyoContext);

  const mapTextures = useCallback(() => {
    return board.map((el: SlimeColor, idx: number) => {
      const slim = conversionMap[el];
      if (!slim) {
        return;
      }
      const x = Math.floor(idx % NUM_ROWS);
      const y = Math.floor(idx / NUM_ROWS);

      return (
        <Sprite
          key={idx}
          image={slim}
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
