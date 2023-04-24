import { movePlayerSetDown } from "./movePlayerSetDown";
import { Board, PlayerSet } from "@/types";

describe("moveElementsDown", () => {
  it("moves elements down to fill empty spaces at the bottom of their respective rows one time", () => {
    // prettier-ignore
    const board :Board= [
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
    const playerSet: PlayerSet = [
      { color: "g", position: 2 },
      { color: "r", position: 8 },
    ];

    // prettier-ignore
    const expectedArray = [
      '', '', '',  '', '', '', '', '', '',  '', '',  '',
      '', '', 'g', '', '', '', '', '', 'r', '', '',  '',
      '', '', '',  '', '', '', '', '', '',  '', '',  '',
      '', '', '',  '', '', '', '', '', '',  '', '',  '',
      '', '', '',  '', '', '', '', '', '',  '', '',  '',
      '', '', '',  '', '', '', '', '', '',  '', 'y', ''
    ];

    const result = movePlayerSetDown({ board, playerSet });
    expect(result.newBoard).toEqual(expectedArray);
  });
});
