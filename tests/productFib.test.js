import { describe, it, expect } from 'vitest';
import productFib from '../functions/productFib';

describe('should return boolean reflecting whether the given number is the product of multiplying two consecutive numbers in the fibonacci sequence', () => {
  it('should be a product of two consecutive fibonacci numbers', () => {
    const input = 15;
    const actual = productFib(input);
    const expected = true;
    expect(actual).toBe(expected);
  });

  it('should be a product of two consecutive fibonacci numbers', () => {
    const input = 4895;
    const actual = productFib(input);
    const expected = true;
    expect(actual).toBe(expected);
  });

  it('should be a product of two consecutive fibonacci numbers', () => {
    const input = 5895;
    const actual = productFib(input);
    const expected = false;
    expect(actual).toBe(expected);
  });

  it('should be a product of two consecutive fibonacci numbers', () => {
    const input = 602070;
    const actual = productFib(input);
    const expected = true;
    expect(actual).toBe(expected);
  });

  it('should be a product of two consecutive fibonacci numbers', () => {
    const input = 84049690;
    const actual = productFib(input);
    const expected = false;
    expect(actual).toBe(expected);
  });

  it('should return a boolean value', () => {
    const input = 193864606;
    const actual = productFib(input);
    const expected = 'boolean';
    expect(typeof actual).toBe(expected);
  });

  it("should throw an error an any input that isn't an integer", () => {
    const input = '193864606';
    const actual = () => productFib(input);
    const expected = 'Positive integer value input';
    expect(actual).toThrow(expected);
  });

  it("should throw an error an any input that isn't an integer", () => {
    const input = [15];
    const actual = () => productFib(input);
    const expected = 'Positive integer value input';
    expect(actual).toThrow(expected);
  });

  it('should accept zero as 0 * 1 is zero', () => {
    const input = 0;
    const actual = productFib(input);
    const expected = true;
    expect(actual).toBe(expected);
  });

  it('should throw an error for negative input values', () => {
    const input = -2;
    const actual = () => productFib(input);
    const expected = 'Positive integer value input';
    expect(actual).toThrow(expected);
  });
});
