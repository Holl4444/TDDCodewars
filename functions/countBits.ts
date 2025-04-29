export default function countBits(num: number | bigint) {
    if (num === undefined || num === null) {
        throw new Error(`No input detected`);
    }
    if (typeof num === 'number') {
        if (!Number.isInteger(num)) {
            throw new Error(`Invalid input`);
        }
    } else {
        if (typeof num !== 'bigint') {
            throw new Error(`Invalid input`);
        }
    }
    return num
      .toString(2)
      .split('')
      .filter((bit) => bit === '1').length;
}

// The (2) in to string is how we say we want a binary string (8 for octal, 10 for decimal and 16 for hexadecimal...)

// export default function countBits(num: number) {
//     return getBinary(num).filter(i => i === 1).length;
// }

// export function getBinary(current: number): number[] {
//   const binary: number[] = [];
//   function remainder(current: number) {
//     console.log(`Current val: `, current, `Remainder: `, current % 2);
//     if (current === 0) {
//       return binary;
//     } else {
//       if (current % 2 === 0) {
//         binary.push(0);
//       } else {
//         binary.push(1);
//       }
//       current = Math.floor(current / 2);
//       return remainder(current);
//     }
//   }
//   remainder(current);
//   return binary.reverse();
// }


