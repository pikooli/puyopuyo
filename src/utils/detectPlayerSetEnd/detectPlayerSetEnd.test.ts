import { detectPlayerSetEnd } from "./detectPlayerSetEnd";
import { Board, PlayerSet } from "@/types";

describe("detectPlayerSetEnd", () => {
  test(`
        test1`, () => {
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
      '', '', '', 'g', '', '',
      '', '', '', 'r', '', '',
      '', '', '', '', '', ''
    ]
    const playerSet: PlayerSet = [
      { color: "g", position: 57 },
      { color: "r", position: 63 },
    ];
    const result = detectPlayerSetEnd({ board, playerSet });

    expect(result).toBe(null);
  });

  test(`
        test2`, () => {
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
      '', '', 'g', 'r', '', ''
    ]
    const playerSet: PlayerSet = [
      { color: "g", position: 68 },
      { color: "r", position: 69 },
    ];
    const result = detectPlayerSetEnd({ board, playerSet });

    expect(result).toBe(true);
  });

  test(`
        test3`, () => {
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
      '', '', 'g', 'r', '', '',
      '', '', 'y', '', '', ''
    ]
    const playerSet: PlayerSet = [
      { color: "g", position: 62 },
      { color: "r", position: 63 },
    ];
    const result = detectPlayerSetEnd({ board, playerSet });

    expect(result).toBe(true);
  });

  test(`
        test4`, () => {
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
      '', '', 'g', 'r', '', '',
      '', '', '', 'y', '', ''
    ]
    const playerSet: PlayerSet = [
      { color: "g", position: 62 },
      { color: "r", position: 63 },
    ];
    const result = detectPlayerSetEnd({ board, playerSet });

    expect(result).toBe(true);
  });

  test(`
        test5`, () => {
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
      '', '', '', 'g', '', '',
      '', '', '', 'r', '', '',
      '', '', '', 'y', '', ''
    ]
    const playerSet: PlayerSet = [
      { color: "g", position: 57 },
      { color: "r", position: 63 },
    ];
    const result = detectPlayerSetEnd({ board, playerSet });

    expect(result).toBe(true);
  });

  test(`
        test6`, () => {
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
      '', '', 'r', '', '', '',
      '', '', 'g', '', '', '',
      '', '', 'y', '', '', ''
    ]
    const playerSet: PlayerSet = [
      { color: "g", position: 62 },
      { color: "r", position: 56 },
    ];
    const result = detectPlayerSetEnd({ board, playerSet });

    expect(result).toBe(true);
  });

  test(`
        test6`, () => {
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
      '', '', 'r', '', '', '',
      '', '', 'g', '', '', '',
      '', '', 'y', '', '', ''
    ]
    const playerSet: PlayerSet = [
      { color: "g", position: 56 },
      { color: "r", position: 62 },
    ];
    const result = detectPlayerSetEnd({ board, playerSet });

    expect(result).toBe(true);
  });
});
