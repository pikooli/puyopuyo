export type BoardGame = JSX.Element[][];
export type SlimeColor = "" | "r" | "b" | "g" | "y";
export type Board = SlimeColor[];
export type ArrowKey = "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight";
export type ActionKey = "KeyQ" | "KeyW";
export type PlayerSlim = { color: SlimeColor; position: number };
export type PlayerSet = PlayerSlim[];

export interface Position {
  x: number;
  y: number;
}
