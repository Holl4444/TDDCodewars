import { describe, it, expect } from 'vitest';
import xor from '../functions/xor'

describe('Evaluate two booleans using "exclusive or"', () => {
    it('should return false if both booleans are the same', () => {
        const a = true;
        const b = true;
        const actual = xor(a, b);
        const expected = false;
        expect(actual).toBe(expected);
    })

    it('should return true if the booleans are different', () => {
        const a = true;
        const b = false;
        const actual = xor(a, b);
        const expected = true;
        expect(actual).toBe(expected);
    })

    it('should handle false or true as strings', () => {
        const a = 'true';
        const b = 'false';
        const actual = xor(a, b);
        const expected = true;
        expect(actual).toBe(expected);
    })

    it('should handle 0 and 1', () => {
        const a = 0;
        const b = 1;
        const actual = xor(a, b);
        const expected = true;
        expect(actual).toBe(expected);
    })

    it('should throw an error for input that is not a boolean, string or number', () => {
        const a = [] as any; // Avoidint the type error that we expect
        const b = 1;
        const actual = () => xor(a, b);
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    });


    it('should throw an error for string input not equal to "true" or "false"', () => {
        const a = true;
        const b = 'rabbit';
        const actual = () => xor(a, b);
        const expected = `Invalid Input: only boolean values extended to include 'true', 'false, 0 and 1 accepted`;
        expect(actual).toThrow(expected);
    })

    it('should throw an error for number type input not equal to 0 or 1', () => {
        const a = 5;
        const b = 0;
        const actual = () => xor(a, b);
        const expected = `Invalid Input: only boolean values extended to include 'true', 'false, 0 and 1 accepted`;
        expect(actual).toThrow(expected);
    })
});