import { it, expect, describe } from 'vitest';
import pigIt from '../functions/pigIt';

describe('pigIt: Move the first letter of each word to the end and add "ay"', () => {
    it('should handle a single word', () => {
        const str = 'Pig';
        const actual = pigIt(str);
        const expected = 'igPay';
        expect(actual).toBe(expected);
    })

    it('should handle a sentance with spaces', () => {
        const str = 'Pig sty';
        const actual = pigIt(str);
        const expected = 'igPay tysay';
        expect(actual).toBe(expected);
    })

    it('should handle a longer sentance with spaces', () => {
        const str = 'The green bird is on the mountain';
        const actual = pigIt(str);
        const expected =
          'heTay reengay irdbay siay noay hetay ountainmay';
        expect(actual).toBe(expected);
    })

    it('should throw and error for non string input', () => {
        const str = 123 as any;
        const actual = () => pigIt(str);
        const expected =
          'Invalid input';
        expect(actual).toThrow(expected);
    })
    

    it('should throw and error for empty input', () => {
        const str = undefined as any;
        const actual = () => pigIt(str);
        const expected =
          'Invalid input';
        expect(actual).toThrow(expected);
    })

    it('should throw and error for empty input', () => {
        const str = null as any;
        const actual = () => pigIt(str);
        const expected =
          'Invalid input';
        expect(actual).toThrow(expected);
    })
})