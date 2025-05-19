export default function snail(array: number[][]): number[] {
  if (
    Array.isArray(array) &&
    array.length === 1 &&
    Array.isArray(array[0]) &&
    array[0].length === 0
  ) {
    return [];
  }

  if (
    !Array.isArray(array) ||
    array.length === 0 ||
    !array.every(
      (row) =>
        Array.isArray(row) && row.every((i) => Number.isInteger(i))
    ) ||
    array.flat().length !== array.length * array.length
  ) {
    throw new Error(`Invalid input`);
  }

  let snailArr = [];

  let sideLength = array.length;
  let start = 0;

  function getCycle(): number[] {
    if (sideLength <= 0) {
      return snailArr;
    }

    if (sideLength === 1) {
      snailArr.push(array[start][start]);
      return snailArr;
    }

    for (let i = start; i < start + sideLength; i++) {
      snailArr.push(array[start][i]);
    }

    // Right column - top to bottom
    for (let i = start + 1; i < start + sideLength; i++) {
      snailArr.push(array[i][start + sideLength - 1]);
    }

    // Bottom row - right to left
    for (let i = start + sideLength - 2; i >= start; i--) {
      snailArr.push(array[start + sideLength - 1][i]);
    }

    // Left column - bottom to top
    for (let i = start + sideLength - 2; i > start; i--) {
      snailArr.push(array[i][start]);
    }

    // Move to the next inner cycle
    start += 1;
    sideLength -= 2;

    return getCycle();
  }

  return getCycle();
}

console.log(
  snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
