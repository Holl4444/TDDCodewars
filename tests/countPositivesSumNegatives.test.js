import { describe, it, expect, test } from 'vitest';
import countPositivesSumNegatives from './countPositivesSumNegatives.js';

describe('Tests for countPositivesSumNegatives', () => {
  it('should return an array', () => {
    const array = [-1, 2];
    const actual = countPositivesSumNegatives(array);
    expect(actual).toBeInstanceOf(Array);
  });

  it('should return an array of length 2', () => {
    const array = [2, 3, -3];
    const actual = countPositivesSumNegatives(array);
    expect(actual).toHaveLength(2);
  });

  it('should return an array of length 2', () => {
    const array = [2];
    const actual = () => countPositivesSumNegatives(array);
    expect(actual).toThrow('Expecting an array as argument');
  });

  it('Should only accept an array', () => {
    const array = '1, 2';
    const actual = () => countPositivesSumNegatives(array);
    expect(actual).toThrow('Expecting an array as argument');
  });

  it('Should return an empty array if it receives one', () => {
    const array = [];
    const actual = countPositivesSumNegatives(array);
    expect(actual).toStrictEqual([]);
  });

  it('should return the number of positive elements in the argument array as the first index of the returned array', () => {
    const array = [5, 10, 0];
    const actual = countPositivesSumNegatives(array);
    expect(actual).toStrictEqual([2, 0]);
  });
    
    test.each([
        [[2, -4, -22, 3, 20], [3, -26]]
    ])('countPositivesSumNegatives(%j) => %j', (input, expected) => {
        expect(countPositivesSumNegatives(input)).toStrictEqual(expected);
    })
    
    it('should return the sum of negative values in the second array index', () => {
     const array = [5, 10, -1, -2];
     const actual = countPositivesSumNegatives(array);
     expect(actual).toStrictEqual([2, -3]);       
    })
});
