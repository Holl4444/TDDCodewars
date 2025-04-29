export default function findUniq(array) {
  if (
    !array ||
    array.length < 3 ||
    !array.every(Number.isInteger) ||
    !array.every(Number.isSafeInteger)
  ) {
    throw new Error(`Invalid Input`);
  }
  const uniq = {};
  let countOfUniqueNums = 0;

  for (const val of array) {
    if (!(val in uniq)) countOfUniqueNums++;
    // if uniq[val] doesn't exist it is undefined and so will be falsy
    uniq[val] = uniq[val] ? uniq[val] + 1 : 1;

    if (countOfUniqueNums === 3) {
      throw new Error(`Max 2 unique numbers per array`);
    }

    if (countOfUniqueNums === 2) {
      let foundMultiple = false;
      for (const key in uniq) {
        if (uniq[key] > 1) {
          foundMultiple = true;
          break;
        }
      }

      if (foundMultiple) {
        for (const key in uniq) {
          if (uniq[key] === 1) return Number(key);
          }
      } /* c8 ignore next */
    }
  }
  throw new Error('No unique value found');
}


// Line 35...The codewar logic states that there will always be a unique value but to cover the situation where we have only 2 values, neither of which is unique, we've had to steamroll vitest with the c8 command when it reaches what should be unreachable code.
