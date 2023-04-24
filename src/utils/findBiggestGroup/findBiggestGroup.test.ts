import { findBiggestGroup } from "./findBiggestGroup";

const gameBoard1 = ["g", "r", "b", "r", "r", "r", "y", "g", "y"];
const gameBoard2 = ["g", "r", "b", "b", "g", "r", "g", "r", "b"];
const gameBoard3 = ["g", "g", "g", "g", "b", "b", "b", "b", "r"];

// prettier-ignore
const bigGameBoard1 = [
  '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '',
  'g', '', '', '', '', '', '', '', '',
  'y', 'y', 'b', 'y', 'y', 'y', 'g', 'r', 'b',
  'g', 'y', 'r', 'b', 'g', 'r', 'r', 'b', 'b',
  'r', 'r', 'r', 'y', 'r', 'r', 'r', 'b', 'b',
  'g', 'r', 'g', 'r', 'y', 'y', 'g', 'r', 'g',
  'g', 'r', 'y', 'b', 'y', 'g', 'y', 'g', 'g'
]

describe("findBiggestGroup", () => {
  test(`
        Given a boardGame
          And r is the bigger group
        Then it should return the group "r"`, () => {
    const result = findBiggestGroup({
      gameBoard: gameBoard1,
      numCols: 3,
    });
    expect(result.size).toBe(4);
    expect(result.letter).toBe("r");
  });

  test(`
        Given a boardGame
          And every group is the same size of 1
        Then it should return a group of 0`, () => {
    const result = findBiggestGroup({
      gameBoard: gameBoard2,
      numCols: 3,
    });
    expect(result.size).toBe(0);
    expect(result.letter).toBe("");
  });

  test(`
        Given a boardGame
          And two group is the same size of 4
        Then it should return the first group "g"`, () => {
    const result = findBiggestGroup({
      gameBoard: gameBoard3,
      numCols: 3,
    });
    expect(result.size).toBe(4);
    expect(result.letter).toBe("g");
  });

  test(`
        Given a boardGame of 6 x 12
          And two group is the same size of 4
        Then it should return the first group "g"`, () => {
    const result = findBiggestGroup({
      gameBoard: bigGameBoard1,
      numCols: 6,
    });
    expect(result.size).toBe(11);
    expect(result.letter).toBe("r");
  });
});
