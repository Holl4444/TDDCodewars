import { describe, it, expect } from 'vitest';
import findNb from '../functions/findNb';

describe('Find the number of cubes require to build a tower with total volume "m". If it cannot be build with an exact number of cubes return -1', () => {
  it('should return the number of cubes for a valid building', () => {
    const m = 1071225;
    const actual = findNb(m);
    const expected = 45;
    expect(actual).toBe(expected);
  });
  it('should return the number of cubes for a valid building', () => {
    const m = 4183059834009;
    const actual = findNb(m);
    const expected = 2022;
    expect(actual).toBe(expected);
  });
  it('should return the number of cubes for a valid building', () => {
    const m = 135440716410000;
    const actual = findNb(m);
    const expected = 4824;
    expect(actual).toBe(expected);
  });
  it('should return the number of cubes for a valid building', () => {
    const m = 40539911473216;
    const actual = findNb(m);
    const expected = 3568;
    expect(actual).toBe(expected);
  });

  it('should return -1 when result is not a whole number', () => {
    const m = 91716553919377;
    const actual = findNb(m);
    const expected = -1;
    expect(actual).toBe(expected);
  });
  it('should return -1 when result is not a whole number', () => {
    const m = 24723578342962;
    const actual = findNb(m);
    const expected = -1;
    expect(actual).toBe(expected);
  });
  it('should return -1 when result is not a whole number', () => {
    const m = 91716553919377;
    const actual = findNb(m);
    const expected = -1;
    expect(actual).toBe(expected);
  });

  it('should throw an error handed a negative number', () => {
    const m = -24;
    const actual = () => findNb(m);
    const expected = `Invalid input`;
    expect(actual).toThrow(expected);
  });
  it('should throw an error handed m = 0', () => {
    const m = 0;
    const actual = () => findNb(m);
    const expected = `Invalid input`;
    expect(actual).toThrow(expected);
  });
  it('should throw an error given no argument for m', () => {
    const m = undefined;
    const actual = () => findNb(m);
    const expected = `Invalid input`;
    expect(actual).toThrow(expected);
  });
  it('should throw an error given wrong type for m', () => {
    const m = [1, 2, 3];
    const actual = () => findNb(m);
    const expected = `Invalid input`;
    expect(actual).toThrow(expected);
  });

  it('should handle floating point inputs', () => {
    const m = 4183059834009.1; // Float with valid whole number part
    const actual = () => findNb(m);
    expect(actual).toThrow('Invalid input'); // Or whatever behavior you want
  });

  it('should handle minimum valid number', () => {
    const m = 1;
    const actual = findNb(m);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it('should handle very large valid numbers', () => {
    const m = 2304422822859502500;
    const actual = () => findNb(m);
    const expected = 'Invalid input';
    expect(actual).toThrow(expected);
  });
});
