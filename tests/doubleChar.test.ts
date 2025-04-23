import { it, describe, test, expect } from 'vitest';
import doubleChar from '../functions/doubleChar';

describe('The function should double any characters in the given string', () => {
  it('should double the characters in the string', () => {
    const arg = 'two';
    const actual = doubleChar(arg);
    const expected = 'ttwwoo';
    expect(actual).toBe(expected);
  });

  it('should handle capitals', () => {
    const arg = 'tWo';
    const actual = doubleChar(arg);
    const expected = 'ttWWoo';
    expect(actual).toBe(expected);
  });

  it('should handle special characters', () => {
    const arg = '5_ ?!';
    const actual = doubleChar(arg);
    const expected = '55__  ??!!';
    expect(actual).toBe(expected);
  });
});
