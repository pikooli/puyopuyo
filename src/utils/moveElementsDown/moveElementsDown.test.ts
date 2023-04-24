import { moveElementsDown } from "./moveElementsDown";
import { Board } from "@/types";

describe.only("moveElementsDown", () => {
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

    const resultArray = moveElementsDown(board);
    expect(resultArray).toEqual(expectedArray);
  });
});
