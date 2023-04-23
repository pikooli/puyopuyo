interface Position {
  row: number;
  col: number;
}

interface MaxGroup {
  letter: string;
  size: number;
  positions: Position[];
  elementsIndex: number[];
}

export function findBiggestGroup({
  gameBoard,
  numCols,
}: {
  gameBoard: string[];
  numCols: number;
}): MaxGroup {
  // Initialize variables to store the max group size, its letter and its elements
  let maxGroupSize = 0;
  let maxGroupLetter = "";
  let maxGroupElements: number[] = [];

  // Define a helper function to traverse the board and find groups
  function traverse(startIndex: number, visited: Set<number>): void {
    // Get the letter of the starting element
    const letter = gameBoard[startIndex];

    // Initialize variables to store the current group size and its elements
    let groupSize = 0;
    let groupElements: number[] = [];

    // Define a recursive helper function to traverse the neighbors of the current element
    function traverseNeighbors(index: number): void {
      // If the element is outside the bounds of the board, or has already been visited, return
      if (index < 0 || index >= gameBoard.length || visited.has(index)) {
        return;
      }

      // If the element is not the same as the starting element, return
      if (gameBoard[index] !== letter) {
        return;
      }

      // Mark the element as visited and add it to the current group
      visited.add(index);
      groupSize++;
      groupElements.push(index);

      // Traverse the neighbors of the current element, including diagonal neighbors
      traverseNeighbors(index + 1);
      traverseNeighbors(index - 1);
      traverseNeighbors(index + numCols);
      traverseNeighbors(index - numCols);
    }

    // Traverse the starting element and its neighbors
    traverseNeighbors(startIndex);

    // Update the max group size, letter and elements if the current group is bigger and has at least 4 elements
    if (groupSize >= 4 && groupSize > maxGroupSize) {
      maxGroupSize = groupSize;
      maxGroupLetter = letter;
      maxGroupElements = groupElements;
    }
  }

  // Traverse each element of the board
  for (let i = 0; i < gameBoard.length; i++) {
    // If the element has already been visited, skip it
    if (maxGroupElements.includes(i) || !gameBoard[i]) {
      continue;
    }

    // Start a new group and traverse it
    const visited = new Set<number>();
    traverse(i, visited);
  }

  // Convert the flat indexes to row and column coordinates
  const maxGroupPositions: Position[] = maxGroupElements.map((index) => {
    const row = Math.floor(index / numCols);
    const col = index % numCols;
    return { row, col };
  });

  // Return the max group letter, size and positions
  return {
    letter: maxGroupLetter,
    size: maxGroupSize,
    positions: maxGroupPositions,
    elementsIndex: maxGroupElements,
  };
}
