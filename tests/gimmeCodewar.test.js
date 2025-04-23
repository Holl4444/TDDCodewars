import { describe, it, expect } from 'vitest';
import { gimmeCodewar } from '../functions/gimmeCodewar';

describe('gimmeCodewar', () => {
  it('returns the index of the middle value', () => {
    expect(gimmeCodewar([2, 3, 1])).toBe(0); // 2 is the middle value
    expect(gimmeCodewar([5, 10, 14])).toBe(1); // 10 is the middle value
    expect(gimmeCodewar([1, 3, 2])).toBe(2); // 2 is the middle value
  });

  it('handles negative numbers', () => {
    expect(gimmeCodewar([-2, -3, -1])).toBe(0); // -2 is the middle value
    expect(gimmeCodewar([-5, -10, -14])).toBe(1); // -5 is the middle value
  });

  it('handles duplicate values', () => {
    // If there are duplicates, the function should still find the middle value
    expect(gimmeCodewar([2, 2, 1])).toBe(0); // 2 is greater than 1
    expect(gimmeCodewar([1, 1, 2])).toBe(0); // 1 is less than 2
  });
});
