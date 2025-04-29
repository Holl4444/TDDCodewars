import { it, expect, describe } from 'vitest';
import squareDigits from '../functions/squareDigits';

describe('squareDigits: should square every digit of a number and concatenate the result, returning it as an integer', () => {
    it('should throw an error receiving a big int input', () => {
        const num = 9999999999999999 as any;
        const actual = () => squareDigits(num);
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    })

    it('should throw an error receiving non integer input', () => {
        const num = "sneaky number" as any;
        const actual = () => squareDigits(num);
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    })

    it('should return an integer', () => {
        const num = 9119;
        const actual = typeof squareDigits(num);
        const expected = `number`;
        expect(actual).toBe(expected);
    })

    it('should return an integer formed of the concatenation of the square roots of each of the digits in the input number!', () => {
        const num = 9119;
        const actual = squareDigits(num);
        const expected = 811181;
        expect(actual).toBe(expected);
    })

    it('should return an integer formed of the concatenation of the square roots of each of the digits in the input number!', () => {
        const num = 765;
        const actual = squareDigits(num);
        const expected = 493625;
        expect(actual).toBe(expected);
    })

    it('return 0 when 0 is input', () => {
        const num = 0;
        const actual = squareDigits(num);
        const expected = 0;
        expect(actual).toBe(expected);
    })

    it('should handle negative inputs', () => {
        const num = -2;
        const actual = squareDigits(num);
        const expected = 4;
        expect(actual).toBe(expected);
    })
})