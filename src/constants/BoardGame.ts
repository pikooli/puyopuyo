import { ArrowKey, ActionKey, SlimeColor } from "@/types";

export const NUM_ROWS = 6;
export const NUM_COLS = 12;
export const GRID_SIZE = 18;

export const MAP_HEIGHT = NUM_COLS * GRID_SIZE;
export const MAP_WIDTH = NUM_ROWS * GRID_SIZE;
export const STARTING_POSITION = [2, 8];

export const KEY_MOVE: { [key in ArrowKey]: ArrowKey } = {
  ArrowUp: "ArrowUp",
  ArrowDown: "ArrowDown",
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight",
};

export const KEY_ACTION: { [key in ActionKey]: string } = {
  KeyQ: "KeyQ",
  KeyW: "KeyW",
};

export const SLIM_COLORS: SlimeColor[] = ["r", "g", "b", "y"];
