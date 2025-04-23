import { it, describe, expect } from 'vitest';
import longest from '../functions/longest';

describe('Find the longest word in a string', () => {
  it('should find the longest word in a simple string', () => {
    const str = 'The quick brown fox';
    const actual = longest(str);
    const expected = 'quick';
    expect(actual).toBe(expected);
  });
});
