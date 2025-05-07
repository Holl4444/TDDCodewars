export default function f(s: string) {
  const AlphRegexMatch = /[A-Za-z]/g;
  const AlphRegexTest = /[A-Za-z]/;
  let position = s.indexOf('@');
  let dir = null;
  let order = '';
  let current: {};

  interface Gift {
    [key: string]: number;
  }

  if (AlphRegexTest.test(s) === false) {
    return '';
  }

  if (s.match(AlphRegexMatch).length === 1) {
    return s.match(AlphRegexMatch)[0];
  }

  const left = s.slice(0, position).split('').reverse();
  const right = s.slice(position + 1).split('');

  // Set initial position to between strings;
  position = 0;

  const leftGifts = left
    // Taking care of negative indices and extra '@' index
    .map((i, x) => AlphRegexTest.test(i) && { [i]: -x - 1 })
    .filter((i) => i);

  const rightGifts = right
    .map((i, x) => AlphRegexTest.test(i) && { [i]: x + 1 })
    .filter((i) => i);

  while (leftGifts.length > 0 || rightGifts.length > 0) {
    let leftKey: string = ''; // Initialize with defaults
    let rightKey: string = '';
    let leftIndex: number = 0;
    let rightIndex: number = 0;

    if (leftGifts.length > 0) {
      leftKey = Object.keys(leftGifts[0])[0];
      leftIndex = Object.values(leftGifts[0])[0];
    }

    if (rightGifts.length > 0) {
      rightKey = Object.keys(rightGifts[0])[0];
      rightIndex = Object.values(rightGifts[0])[0];
    }

    // Only calculate distances if we have gifts on that side
    const distToLeft =
      leftGifts.length > 0
        ? Math.abs(leftIndex - position)
        : Infinity;
    const distToRight =
      rightGifts.length > 0
        ? Math.abs(rightIndex - position)
        : Infinity;

    if (
      rightGifts.length < 1 ||
      distToLeft < distToRight ||
      (distToLeft === distToRight &&
        leftKey.toUpperCase() === leftKey &&
        rightKey.toUpperCase() !== rightKey) ||
      (distToLeft === distToRight &&
        leftKey.charCodeAt(0) < rightKey.charCodeAt(0))
    ) {
      dir = 'left';
      if (leftKey.toUpperCase() === leftKey) {
        position = 0;
      } else {
        position = leftIndex;
      }
    } else if (
      leftGifts.length < 1 ||
      distToRight < distToLeft ||
      (distToRight === distToLeft &&
        rightKey.toUpperCase() === rightKey &&
        leftKey.toUpperCase() !== leftKey) ||
      (distToRight === distToLeft &&
        rightKey.charCodeAt(0) < leftKey.charCodeAt(0))
    ) {
      dir = 'right';
      if (rightKey.toUpperCase() === rightKey) {
        position = 0;
      } else {
        position = rightIndex;
      }
    } else {
      // If the gifts are same distance, weight and fanciness
      if (dir === 'left') {
        dir = 'right';
        position = rightIndex;
      } else if (dir === 'right') {
        dir = 'left';
        position = leftIndex;
      } else {
        return '?';
      }
    }

    if (dir === 'left') {
      order += leftKey;
      current = leftGifts[0];
      left[leftIndex] = '';
      leftGifts.splice(0, 1);
    } else if (dir === 'right') {
      order += rightKey;
      current = rightGifts[0];
      right[rightIndex] = '';
      rightGifts.splice(0, 1);
    }

    // Check if we're dealing with a lowercase letter
    if (
      Object.keys(current)[0].charCodeAt(0) > 96 &&
      (leftGifts.length > 0 || rightGifts.length > 0)
    ) {
      let nextLeft: Gift | null = null;
      let nextLeftIndex: number = 0; // Initialize with default
      let nextRight: Gift | null = null;
      let nextRightIndex: number = 0; // Initialize with default

      // Since we delete current on use
      if (leftGifts.length > 0) {
        let foundSmallGift = false;
        for (
          let i = 0;
          i < leftGifts.length && !foundSmallGift;
          i++
        ) {
          const key = Object.keys(leftGifts[i])[0];
          const isSmallGift = key.charCodeAt(0) > 96;

          if (isSmallGift) {
            nextLeft = leftGifts[i];
            // Don't set nextLeftIndex here, we'll set it below if nextLeft is not null
            foundSmallGift = true;
          }
        }
      }

      if (rightGifts.length > 0) {
        let foundSmallGift = false;
        for (
          let i = 0;
          i < rightGifts.length && !foundSmallGift;
          i++
        ) {
          const key = Object.keys(rightGifts[i])[0];
          const isSmallGift = key.charCodeAt(0) > 96;
          if (isSmallGift) {
            nextRight = rightGifts[i];
            // Don't set nextRightIndex here, we'll set it below if nextRight is not null
            foundSmallGift = true;
          }
        }
      }

      const distToBase = Math.abs(position);
      let distToNextLeft: number = Infinity; // Initialize with default
      let distToNextRight: number = Infinity; // Initialize with default
      let baseToAnyGiftRight: number = Infinity; // Initialize with default
      let baseToAnyGiftLeft: number = Infinity; // Initialize with default

      if (leftGifts.length > 0) {
        baseToAnyGiftLeft = Math.abs(Object.values(leftGifts[0])[0]);
      }

      if (rightGifts.length > 0) {
        baseToAnyGiftRight = Math.abs(
          Object.values(rightGifts[0])[0]
        );
      }

      if (nextLeft !== null) {
        nextLeftIndex = Object.values(nextLeft)[0];
        distToNextLeft = Math.abs(position - nextLeftIndex);
      }

      if (nextRight !== null) {
        nextRightIndex = Object.values(nextRight)[0];
        distToNextRight = Math.abs(position - nextRightIndex);
      }

      // if its as close or closer than from its position to base or
      // closer to current position that from base to the next closest on the right.
      if (
        nextLeft !== null &&
        ((dir === 'left' && distToNextLeft <= distToBase) ||
          (dir === 'left' &&
            nextRight !== null &&
            distToNextLeft < baseToAnyGiftRight))
      ) {
        const nextLeftKey = Object.keys(nextLeft)[0];
        const nextLeftVal = Object.values(nextLeft)[0];
        order = `${order.slice(0, -1)}${nextLeftKey}${order.slice(
          -1
        )}`;
        leftGifts.splice(leftGifts.indexOf(nextLeft), 1);
        left[nextLeftVal] = '';
        position = 0;
        current = nextLeft;
      } else {
        position = 0;
      }

      if (
        nextRight !== null &&
        ((dir === 'right' && distToNextRight <= distToBase) ||
          (dir === 'right' &&
            nextLeft !== null &&
            distToNextRight < baseToAnyGiftLeft))
      ) {
        const nextRightKey = Object.keys(nextRight)[0];
        const nextRightVal = Object.values(nextRight)[0];
        order = `${order.slice(0, -1)}${nextRightKey}${order.slice(
          -1
        )}`;
        rightGifts.splice(rightGifts.indexOf(nextRight), 1);
        right[nextRightVal] = '';
        position = 0;
        current = nextRight;
      } else {
        position = 0;
      }
      nextRight = null;
      nextLeft = null;
    }
  }
  return order;
}

f('ccBC.BaAABX.x@CZB.ZxCX.xBZ')