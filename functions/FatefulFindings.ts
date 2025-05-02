export default function f(s: string) {
    const AlphRegexMatch = /[A-Za-z]/g;
    const AlphRegexTest = /[A-Za-z]/
  let position = s.indexOf('@');
  let dir = null;
  let order = '';
  let current: {};
  let nextLeft: Gift | null = null;
  let nextRight: Gift | null = null;

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
    if (leftGifts.length < 1 && rightGifts.length < 1) {
      return order;
    }

    if (leftGifts.length < 1) {
      // First separate uppercase and lowercase letters
      const lowerLetters = rightGifts.filter((gift) => {
        const key = Object.keys(gift)[0];
        return key.charCodeAt(0) > 96;
      });

      const upperLetters = rightGifts.filter((gift) => {
        const key = Object.keys(gift)[0];
        return key.charCodeAt(0) <= 96;
      });

      let lastGifts: string = '';

      // Process lowercase letters first
      for (let i = 0; i < lowerLetters.length; i++) {
        const iKey = Object.keys(lowerLetters[i])[0];
        const iPlusKey =
          i < lowerLetters.length - 1 &&
          Object.keys(lowerLetters[i + 1])[0];
        const isLowerI = iKey.charCodeAt(0) > 96;
        const isLowerIPlus = iPlusKey && iPlusKey.charCodeAt(0) > 96;

        if (i < lowerLetters.length - 1 && isLowerI && isLowerIPlus) {
          lastGifts += `${iPlusKey}${iKey}`;
          i++;
        } else {
          lastGifts += iKey;
        }
      }

      // Then append uppercase letters
      for (let i = 0; i < upperLetters.length; i++) {
        lastGifts += Object.keys(upperLetters[i])[0];
      }

      order += lastGifts;
      return order;
    }

    if (rightGifts.length < 1) {
      const lowerLetters = leftGifts.filter((gift) => {
        const key = Object.keys(gift)[0];
        return key.charCodeAt(0) > 96;
      });

      const upperLetters = leftGifts.filter((gift) => {
        const key = Object.keys(gift)[0];
        return key.charCodeAt(0) <= 96;
      });

      let lastGifts: string = '';

      for (let i = 0; i < lowerLetters.length; i++) {
        const iKey = Object.keys(lowerLetters[i])[0];
        const iPlusKey =
          i < lowerLetters.length - 1 &&
          Object.keys(lowerLetters[i + 1])[0];
        const isLowerI = iKey.charCodeAt(0) > 96;
        const isLowerIPlus = iPlusKey && iPlusKey.charCodeAt(0) > 96;

        if (i < lowerLetters.length - 1 && isLowerI && isLowerIPlus) {
          lastGifts += `${iPlusKey}${iKey}`;
          i++;
        } else {
          lastGifts += iKey;
        }
      }

      for (let i = 0; i < upperLetters.length; i++) {
        lastGifts += Object.keys(upperLetters[i])[0];
      }

      order += lastGifts;
      return order;
    }

    const leftKey = Object.keys(leftGifts[0])[0];
    const rightKey = Object.keys(rightGifts[0])[0];
    const leftIndex = Object.values(leftGifts[0])[0];
    const rightIndex = Object.values(rightGifts[0])[0];
    const distToLeft = Math.abs(leftIndex - position);
    const distToRight = Math.abs(rightIndex - position);

    if (
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
      distToRight < distToLeft ||
      (distToLeft === distToRight &&
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

    if (Object.keys(current)[0].charCodeAt(0) > 96) {
      const distToBase = Math.abs(0 - position);
      let foundSmallGift = false;
      // Since we delete current on use
      if (leftGifts.length > 0) {
        for (
          let i = 0;
          i < leftGifts.length && !foundSmallGift;
          i++
        ) {
          for (const [key, value] of Object.entries(leftGifts[i])) {
            const isSmallGift = key.charCodeAt(0) > 96;
            if (isSmallGift) {
              nextLeft = leftGifts[i];
              foundSmallGift = true;
              break; // Break inner loop
            }
          }
        }
      }

      foundSmallGift = false;

      if (rightGifts.length > 0) {
        for (
          let i = 0;
          i < rightGifts.length && !foundSmallGift;
          i++
        ) {
          for (const [key, value] of Object.entries(rightGifts[i])) {
            const isSmallGift = key.charCodeAt(0) > 96;
            if (isSmallGift) {
              nextRight = rightGifts[i];
              foundSmallGift = true;
              break;
            }
          }
        }
      }

      foundSmallGift = false;
      let distToNextLeft: number;
      let distToNextRight: number;
      let distFromRightToBase: number;
      let distFromLeftToBase: number;

      if (nextLeft !== null) {
        const nextLeftIndex: number = Object.values(nextLeft)[0];
        distToNextLeft = Math.abs(position - nextLeftIndex);
      }

      if (nextRight !== null) {
        const nextRightIndex: number = Object.values(nextRight)[0];
        distToNextRight = Math.abs(position - nextRightIndex);
        // from zero
        distFromRightToBase = nextRightIndex;
      }

      // if its as close or closer than from its position to base or
      // closer to current position that from base to the next closest on the right.
      if (
        (dir === 'left' && distToNextLeft <= distToBase) ||
        (dir === 'left' && distToNextLeft < distFromRightToBase)
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
        (dir === 'right' && distToNextRight <= distToBase) ||
        (dir === 'right' && distToNextRight < distFromLeftToBase)
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
    }
    nextLeft = null;
    nextRight = null;
  }
    console.log(order);
    return order;
}



f('...b.Za..@........');
