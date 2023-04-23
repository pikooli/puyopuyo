export type BoardGame = JSX.Element[][];
export type SlimeColor = "" | "red" | "blue" | "green" | "yellow";
export type Board = SlimeColor[];
export type ArrowKey = "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight";
export type ActionKey = "KeyQ" | "KeyW";

export interface Position {
  x: number;
  y: number;
}
