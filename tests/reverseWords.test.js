import { it, describe, expect } from 'vitest';
import reverseWords from '../reverseWords';

describe('reverse each word in the string retaining all spaces', () => {
    it('should throw an error when given a non string argument, an empty string or no argument', () => {
      const string = [1, 2, 3];
      const actual = () => reverseWords(string);
      const expected = `Please enter a valid string`;
      expect(actual).toThrow(expected);
    });

    it('should return each word reversed', () => {
        const string = "all the marshmellows";
        const actual = reverseWords(string);
        const expected = 'lla eht swollemhsram';
        expect(actual).toBe(expected);
    })

    it('should handle capitals', () => {
        const string = "All thE marsHmellows";
        const actual = reverseWords(string);
        const expected = 'llA Eht swollemHsram';
        expect(actual).toBe(expected);
    })

    it('should handle special characters and numbers', () => {
        const string = "h3^ds up @p30pl3";
        const actual = reverseWords(string);
        const expected = 'sd^3h pu 3lp03p@';
        expect(actual).toBe(expected);
    })

    it('should handle single word strings', () => {
        const string = "abelone";
        const actual = reverseWords(string);
        const expected = 'enoleba';
        expect(actual).toBe(expected);
    })

    it('should handle strings with only spaces', () => {
        const string = "    ";
        const actual = reverseWords(string);
        const expected = '    ';
        expect(actual).toBe(expected);
    })

    it('should handle strings with multiple spaces', () => {
        const string = "Blossoms  fall in    the grey";
        const actual = reverseWords(string);
        const expected = 'smossolB  llaf ni    eht yerg';
        expect(actual).toBe(expected);
    })

    it('should handle leading and trailing spaces', () => {
        const string = "  severed  ";
        const actual = reverseWords(string);
        const expected = '  dereves  ';
        expect(actual).toBe(expected);
    })

})