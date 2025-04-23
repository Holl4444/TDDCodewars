import { test, it, describe, expect } from 'vitest';
import bouncingBall from '../functions/bouncingBall';

describe('How many times will a bouncing ball dropped from "h" height, with "bounce" upward momentum be seen passing "window" height?', () => {
  it('should return -1 if parameter "h" is 0 or less', () => {
    const h = 0;
    const bounce = 1;
    const window = 0.9;
    const actual = bouncingBall(h, bounce, window);
    const expected = -1;
    expect(actual).toBe(expected);
  });

  it('should return -1 if parameter "bounce" is not between 0 and less than 1', () => {
    const h = 3;
    const bounce = 1;
    const window = 1;
    const actual = bouncingBall(h, bounce, window);
    const expected = -1;
    expect(actual).toBe(expected);
  });

  it('should return -1 if parameter "window" is not less than h', () => {
    const h = 3;
    const bounce = 0.2;
    const window = 3;
    const actual = bouncingBall(h, bounce, window);
    const expected = -1;
    expect(actual).toBe(expected);
  });

  it('should return count of times ball can be seen passing "window"', () => {
    const h = 3;
    const bounce = 0.66;
    const window = 1.5;
    const actual = bouncingBall(h, bounce, window);
    const expected = 3;
    expect(actual).toBe(expected);
  });

  it('should return count of times ball can be seen passing "window"', () => {
    const h = 10;
    const bounce = 0.6;
    const window = 2;
    const actual = bouncingBall(h, bounce, window);
    const expected = 7;
    expect(actual).toBe(expected);
  });

  it('should return count of times ball can be seen passing "window"', () => {
    const h = 30;
    const bounce = 0.66;
    const window = 1.5;
    const actual = bouncingBall(h, bounce, window);
    const expected = 15;
    expect(actual).toBe(expected);
  });

  it('should return count of times ball can be seen passing "window"', () => {
    const h = 4;
    const bounce = 0.23;
    const window = 0.6;
    const actual = bouncingBall(h, bounce, window);
    const expected = 3;
    expect(actual).toBe(expected);
  });

  it('should return count of times ball can be seen passing "window"', () => {
    const h = 6;
    const bounce = 0.75;
    const window = 2;
    const actual = bouncingBall(h, bounce, window);
    const expected = 7;
    expect(actual).toBe(expected);
  });

  it('should return count of times ball can be seen passing "window"', () => {
    const h = 2;
    const bounce = 0.94;
    const window = 1.5;
    const actual = bouncingBall(h, bounce, window);
    const expected = 9;
    expect(actual).toBe(expected);
  });

  it('should handle non integer values', () => {
    const h = null;
    const bounce = 0.5;
    const window = 1.5;
    const actual = bouncingBall(h, bounce, window);
    const expected = -1;
    expect(actual).toBe(expected);
  });

  it('should handle non integer values', () => {
    const h = '';
    const bounce = 0.2;
    const window = 1.5;
    const actual = bouncingBall(h, bounce, window);
    const expected = -1;
    expect(actual).toBe(expected);
  });

  it('should handle non integer values', () => {
    const h = 5;
    const bounce = 1;
    const window = 1.5;
    const actual = bouncingBall(h, bounce, window);
    const expected = -1;
    expect(actual).toBe(expected);
  });
});
