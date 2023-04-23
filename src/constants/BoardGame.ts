import { ArrowKey, ActionKey, Position } from "@/types";

export const NUM_ROWS = 6;
export const NUM_COLS = 12;
export const GRID_SIZE = 18;

export const MAP_HEIGHT = NUM_COLS * GRID_SIZE;
export const MAP_WIDTH = NUM_ROWS * GRID_SIZE;

export const KEY_MOVE: { [key in ArrowKey]: Position } = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

export const KEY_ACTION: { [key in ActionKey]: string } = {
  KeyQ: "rotateLeft",
  KeyW: "rotateRight",
};
