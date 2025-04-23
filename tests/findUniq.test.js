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
});
