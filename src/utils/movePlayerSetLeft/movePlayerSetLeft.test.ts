import { movePlayerSetLeft } from "./movePlayerSetLeft";
import { Board, PlayerSet } from "@/types";

describe("movePlayerSetLeft", () => {
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
      { color: "g", position: 1 },
      { color: "r", position: 7 },
    ];

    const newPlayerSet = movePlayerSetLeft({ board, playerSet });
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
      'g', 'g', '', '', '', '',
      '', 'r', '', '', '', '',
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
      { color: "g", position: 1 },
      { color: "r", position: 7 },
    ];

    const newPlayerSet = movePlayerSetLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it("", () => {
    // prettier-ignore
    const board :Board= [
      'g', '', '', '', '', '',
      'r', '', '', '', '', '',
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
      { color: "g", position: 0 },
      { color: "r", position: 6 },
    ];

    const newPlayerSet = movePlayerSetLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });
});
