import { NUM_COLS, NUM_ROWS } from "@/constants";

export function generateNewBoard() {
  return new Array(NUM_COLS * NUM_ROWS);
}
