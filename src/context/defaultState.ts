import { Board, PlayerSet } from "@/types";
// prettier-ignore
export const defaultBoard :Board= [
  '', '', 'g', '', '', '',
  '', '', 'r', '', '', '',
  '', '', '', '', '', '',
  '', '', '', '', '', '',
  '', '', '', '', '', '',
  '', '', '', '', '', '',
  '', '', '', '', '', '',
  '', '', '', '', '', '',
  '', '', '', '', '', '',
  '', '', '', '', '', '',
  '', '', '', '', '', '',
  '', '', 'y', 'y', 'y', ''
]

export const defaultPlayerSet: PlayerSet = [
  { color: "g", position: 2 },
  { color: "r", position: 8 },
];
