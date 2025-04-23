import { describe, it, expect } from 'vitest';
import filter_list from '../functions/filter_list';

describe('Remove strings from array', () => {
  it('should throw an error when it receives an argument that is not an array or is empty', () => {
    const array = [];
    const actual = () => filter_list(array);
    const expected = `Provide an array of non-negative integers and strings`;
    expect(actual).toThrow(expected);
  });

  it('should throw an error if an array value is neither a positive integer or a string', () => {
    const array = ['a', -5, '56', 978, 4, 'pistol'];
    const actual = () => filter_list(array);
    const expected = `positive integers and strings only please`;
    expect(actual).toThrow(expected);
  });

  it('should remove strings from the array', () => {
    const array = ['a', '56', 978, 4, 'pistol'];
    const actual = filter_list(array);
    const expected = [978, 4];
    expect(actual).toStrictEqual(expected);
  });

  it('should accept o as an integer', () => {
    const array = ['a', 0, 978, 4, 'zebra'];
    const actual = filter_list(array);
    const expected = [0, 978, 4];
    expect(actual).toStrictEqual(expected);
  });

  it('should return an empty array from an all string array', () => {
    const array = ['a', '0', '978', '4', 'zebra'];
    const actual = filter_list(array);
    const expected = [];
    expect(actual).toStrictEqual(expected);
  });

  it('should return an all integer array as is', () => {
    const array = [57, 2, 99999];
    const actual = filter_list(array);
    const expected = array;
    expect(actual).toStrictEqual(expected);
  });

  it('should disallow decimals', () => {
    const array = [57.3, 2.0, 9.9999];
    const actual = () => filter_list(array);
    const expected = `positive integers and strings only please`;
    expect(actual).toThrow(expected);
  });

  it('should allow integer decimals', () => {
    const array = [57, 2.0, 9];
    const actual = filter_list(array);
    const expected = [57, 2, 9];
    expect(actual).toStrictEqual(expected);
  });
});
