import { it, expect, describe } from 'vitest';
import halfChar from '../halfChar';
describe('Given a string where each letter is doubled, remove the extra alpha characters and any doubled special characters', () => {
    it('should throw an error if given arguments that are not of type string', () => {
        const notString = 123; // Catch runtime errors ie if function called from js / eventually takes external input
        const actual = () => halfChar(notString);
        const expected = `Input must be of type string`;
        expect(actual).toThrow(expected);
    });
    it('should return a string', () => {
        const string = 'rraabbiitt';
        const actual = typeof halfChar(string);
        const expected = `string`;
        expect(actual).toBe(expected);
    });
    it('should return a string where any doubled characters in a row are removed', () => {
        const string = 'bbaannaannaa';
        const actual = halfChar(string);
        const expected = `banana`;
        expect(actual).toBe(expected);
    });
    it('should handle capitals and special characters', () => {
        const string = 'BBaannaann&&';
        const actual = halfChar(string);
        const expected = `Banan&`;
        expect(actual).toBe(expected);
    });
    it('should handle special characters', () => {
        const string = '"%%^^&&**((")';
        const actual = halfChar(string);
        const expected = `"%^&*(")`;
        expect(actual).toBe(expected);
    });
    it('should handle edge cases', () => {
        const string = '11223344!!__  ';
        const actual = halfChar(string);
        const expected = `1234!_ `;
        expect(actual).toBe(expected);
    });
});
//# sourceMappingURL=halfChar.test.js.map