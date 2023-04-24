import { moveAllElementsDown } from "./moveAllElementsDown";
import { Board } from "@/types";

describe.only("moveAllElementsDown", () => {
  it("moves elements down to fill empty spaces at the bottom of their respective rows", () => {
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

    // prettier-ignore
    const expectedArray = [
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
      '', '', 'g', '', '', '',
      '', '', 'r', '', 'y', ''
    ];

    const resultArray = moveAllElementsDown(board);
    expect(resultArray).toEqual(expectedArray);
  });
});
