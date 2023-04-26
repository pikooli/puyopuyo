import { rotatePlayerSetToLeft } from "./rotatePlayerSetToLeft";
import { Board, PlayerSet } from "@/types";

describe("rotatePlayerSetToLeft", () => {
  it("test1", () => {
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
      { color: "g", position: 2 },
      { color: "r", position: 1 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet?.[0].position).toEqual(
      expectedNewPlayerSet[0].position
    );
    expect(newPlayerSet?.[1].position).toEqual(
      expectedNewPlayerSet[1].position
    );
  });

  it("test1.1", () => {
    // prettier-ignore
    const board :Board= [
      'y', 'g', '', '', '', '',
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

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it("test1.2", () => {
    // prettier-ignore
    const board :Board= [
      '', 'g', '', '', '', '',
      'y', 'r', '', '', '', '',
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

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it("test1.3", () => {
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

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it("test2.1", () => {
    // prettier-ignore
    const board :Board= [
      '', 'r', 'g', '', '', '',
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
      { color: "r", position: 1 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });

    expect(newPlayerSet).toEqual(null);
  });

  it("test2.1", () => {
    // prettier-ignore
    const board :Board= [
      '', '', '', '', '', '',
      '', 'r', 'g', '', '', '',
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
      { color: "g", position: 8 },
      { color: "r", position: 7 },
    ];

    const expectedNewPlayerSet: PlayerSet = [
      { color: "g", position: 8 },
      { color: "r", position: 2 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet?.[0].position).toEqual(
      expectedNewPlayerSet[0].position
    );
    expect(newPlayerSet?.[1].position).toEqual(
      expectedNewPlayerSet[1].position
    );
  });

  it("test2.2", () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'y', '', '', '',
      '', 'r', 'g', '', '', '',
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
      { color: "g", position: 8 },
      { color: "r", position: 7 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it("test2.3", () => {
    // prettier-ignore
    const board :Board= [
      '', 'y', '', '', '', '',
      '', 'r', 'g', '', '', '',
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
      { color: "g", position: 8 },
      { color: "r", position: 7 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it("test3.1", () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'r', '', '', '',
      '', '', 'g', '', '', '',
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
      { color: "g", position: 8 },
      { color: "r", position: 2 },
    ];

    const expectedNewPlayerSet: PlayerSet = [
      { color: "g", position: 8 },
      { color: "r", position: 9 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet?.[0].position).toEqual(
      expectedNewPlayerSet[0].position
    );
    expect(newPlayerSet?.[1].position).toEqual(
      expectedNewPlayerSet[1].position
    );
  });

  it("test3.2", () => {
    // prettier-ignore
    const board :Board= [
      '', '', '', '', '', 'r',
      '', '', '', '', '', 'g',
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
      { color: "g", position: 11 },
      { color: "r", position: 5 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });

    expect(newPlayerSet).toEqual(null);
  });

  it("test3.3", () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'r', 'y', '', '',
      '', '', 'g', '', '', '',
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
      { color: "g", position: 8 },
      { color: "r", position: 2 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it("test3.4", () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'r', '', '', '',
      '', '', 'g', 'y', '', '',
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
      { color: "g", position: 8 },
      { color: "r", position: 2 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it("test4.1", () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'g', 'r', '', '',
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
      { color: "r", position: 3 },
    ];

    const expectedNewPlayerSet: PlayerSet = [
      { color: "g", position: 2 },
      { color: "r", position: 8 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet?.[0].position).toEqual(
      expectedNewPlayerSet[0].position
    );
    expect(newPlayerSet?.[1].position).toEqual(
      expectedNewPlayerSet[1].position
    );
  });

  it("test4.2", () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'g', 'r', '', '',
      '', '', '', 'y', '', '',
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
      { color: "r", position: 3 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it("test4.3", () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'g', 'r', '', '',
      '', '', 'y', '', '', '',
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
      { color: "r", position: 3 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it("test4.3", () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'g', 'r', '', '',
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
      '', '', 'g', 'r', 'y', ''
    ]
    const playerSet: PlayerSet = [
      { color: "g", position: 68 },
      { color: "r", position: 69 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });
});
