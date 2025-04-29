import findUniq from '../functions/findUniq';
import { it, describe, test, expect } from 'vitest';

describe('Return the unique number in an array as efficiently as possible', () => {
  it('should return the unique array value', () => {
    const array = [1, 1, 2];
    const actual = findUniq(array);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it('should return the unique array value', () => {
    const array = [1, 0, 0];
    const actual = findUniq(array);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it('should throw an error for empty input', () => {
    const actual = () => findUniq();
    const expected = `Invalid Input`;
    expect(actual).toThrow(expected);
  });

  it('should throw an error for an array with non-integer input', () => {
    const array = [1, 5,`3`, 9, 8]
    const actual = () => findUniq(array);
    const expected = `Invalid Input`;
    expect(actual).toThrow(expected);
  });

  it('should throw an error for an array shorter than 3', () => {
    const array = [5];
    const actual = () => findUniq(array);
    const expected = `Invalid Input`;
    expect(actual).toThrow(expected);
  });

  it('finds the unique value when values are non-adjacent', () => {
    const array = [1, 2, 1, 1]; // First we see 1, then 2, then more 1s
    const actual = findUniq(array);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it('throws an error if it encounters more than 2 unique numbers', () => {
    const array = [1, 2, 3, 1, 3, 3, 3, 1, 1]; // Multiple unique values initially
    const actual = () => findUniq(array);
    const expected = `Max 2 unique numbers per array`;
    expect(actual).toThrow(expected);
  });

  it('should handle a large array where the unique number is last', () => {
    const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]; // Multiple unique values initially
    const actual = findUniq(array);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it('should handle an array with no unique number', () => {
    const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const actual = () => findUniq(array);
    const expected = `No unique value found`;
    expect(actual).toThrow(expected);
  });

});
