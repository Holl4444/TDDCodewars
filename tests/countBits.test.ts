import { it, expect, describe } from 'vitest';
import countBits from '../functions/countBits';
// import countBits, { getBinary } from '../countBits';

// describe('getBinary: return the binary form of an integer', () => {
//     it('should return the binary form of an integer', () => {
//         const int = 10;
//         const actual = getBinary(int);
//         const expected = [1, 0, 1, 0];
//         expect(actual).toStrictEqual(expected);
//     })
// })

describe('countBits: return the number of "1"s in the binary representation of the number', () => {
  it('should return the count of 1s in the binary representation of an integer', () => {
    const int = 10;
    const actual = countBits(int);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it('should return the count of 1s in the binary representation of an integer', () => {
    const int = 1234;
    const actual = countBits(int);
    const expected = 5;
    expect(actual).toBe(expected);
  });

  it('should handle bigints', () => {
    const bigInt = 9007199254740992n;
    const actual = countBits(bigInt);
    const expected = 1; //This value has just one "1" bit
    expect(actual).toBe(expected);
  });

  it('should handle invalid input', () => {
    const int = '1234' as any;
    const actual = () => countBits(int);
    const expected = `Invalid input`; // All 64 bits are set to 1
    expect(actual).toThrow(expected);
  });

  it('should handle very low integers', () => {
    const int = 0;
    const actual = countBits(int);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  it('should handle very low integers', () => {
    const int = 1;
    const actual = countBits(int);
    const expected = 1;
    expect(actual).toBe(expected);
  });
});
