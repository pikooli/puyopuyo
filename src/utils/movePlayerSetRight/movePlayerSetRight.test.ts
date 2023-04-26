import { movePlayerSetRight } from "./movePlayerSetRight";
import { Board, PlayerSet } from "@/types";

describe("movePlayerSetRight", () => {
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

    const expectedNewPlayerSet: PlayerSet = [
      { color: "g", position: 3 },
      { color: "r", position: 9 },
    ];

    const newPlayerSet = movePlayerSetRight({ board, playerSet });
    expect(newPlayerSet?.[0].position).toEqual(
      expectedNewPlayerSet[0].position
    );
    expect(newPlayerSet?.[1].position).toEqual(
      expectedNewPlayerSet[1].position
    );
  });

  it("", () => {
    // prettier-ignore
    const board :Board= [
      '', '', '', '', 'g', 'y',
      '', '', '', '', 'r', '',
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
      { color: "g", position: 4 },
      { color: "r", position: 10 },
    ];

    const newPlayerSet = movePlayerSetRight({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it("", () => {
    // prettier-ignore
    const board :Board= [
      '', '', '', '', '', 'g',
      '', '', '', '', '', 'r',
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
      { color: "g", position: 5 },
      { color: "r", position: 11 },
    ];

    const newPlayerSet = movePlayerSetRight({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });
});
