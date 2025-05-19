import { it, expect, describe } from 'vitest';
import snail from '../functions/snail';

describe('snail: return the array created by traversing the given array working inwards clockwise', () => {
  it('should throw an error receiving non-array input', () => {
    const arr = 1234 as any;
    const actual = () => snail(arr);
    const expected = `Invalid input`;
    expect(actual).toThrow(expected);
  });

  it('should throw an error receiving no input', () => {
    const arr = undefined as any;
    const actual = () => snail(arr);
    const expected = `Invalid input`;
    expect(actual).toThrow(expected);
  });

  it('should throw an error receiving no input', () => {
    const arr = null as any;
    const actual = () => snail(arr);
    const expected = `Invalid input`;
    expect(actual).toThrow(expected);
  });

  it('should throw an error receiving non-integer input', () => {
    const arr = [[1, 2, 'three']] as any;
    const actual = () => snail(arr);
    const expected = `Invalid input`;
    expect(actual).toThrow(expected);
  });

  it('should return an empty array from receiving one', () => {
    const arr = [[]];
    const actual = snail(arr);
    const expected = [];
    expect(actual).toStrictEqual(expected);
  });

  it('should return a single digit array as it is', () => {
    const arr = [[1]];
    const actual = snail(arr);
    const expected = [1];
    expect(actual).toStrictEqual(expected);
  });

  it('should handle nested arrays', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const actual = snail(arr);
    const expected = [1, 2, 4, 3];
    expect(actual).toStrictEqual(expected);
  });

  it('should throw an error for non square matrices', () => {
    const arr = [[1], [2]];
    const actual = () => snail(arr);
    const expected = `Invalid input`;
    expect(actual).toThrow(expected);
  });

  it('should return the array in order of clockwise concentric circles', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const actual = snail(arr);
    const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    expect(actual).toStrictEqual(expected);
  });

  it('should return the array in order of clockwise concentric circles', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const actual = snail(arr);
    const expected = [1, 2, 4, 3];
    expect(actual).toStrictEqual(expected);
  });

  it('should return the array in order of clockwise concentric circles', () => {
    const arr = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ];
    const actual = snail(arr);
    const expected = [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13];
    expect(actual).toStrictEqual(expected);
  });

  it('should return the array in order of clockwise concentric circles', () => {
    const arr = [
      [1, 2, 3, 4, 5, 6],
      [20, 21, 22, 23, 24, 7],
      [19, 32, 33, 34, 25, 8],
      [18, 31, 36, 35, 26, 9],
      [17, 30, 29, 28, 27, 10],
      [16, 15, 14, 13, 12, 11],
    ];
    const actual = snail(arr);
    const expected = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
      35, 36,
    ];
    expect(actual).toStrictEqual(expected);
  });
});
