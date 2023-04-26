import { setPlayerSlimInBoard } from "./setPlayerSlimInBoard";
import { Board, PlayerSet } from "@/types";

describe("setPlayerSlimInBoard", () => {
  it("test 1", () => {
    // prettier-ignore
    const board :Board= [
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', 'y', ''
    ]
    const playerSet: PlayerSet = [
      { color: "g", position: 2 },
      { color: "r", position: 8 },
    ];

    // prettier-ignore
    const expectedBoard :Board= [
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
      '', '', '', '', 'y', ''
    ]

    const newBoard = setPlayerSlimInBoard({ board, playerSet });
    expect(newBoard).toEqual(expectedBoard);
  });
});
