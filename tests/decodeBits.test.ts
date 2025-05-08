import { it, expect, describe } from 'vitest';
import decodeBits from '../functions/decodeBits';

describe('decodeBits: Find time units for binary representation of morse code and translate to dot and dash code', () => {
    it('should handle different time units correctly', () => {
        expect(decodeBits('1')).toBe('.');
        
        expect(decodeBits('111')).toBe('-');

        expect(decodeBits('10111')).toBe('.-');

        expect(decodeBits('1000111')).toBe('. -');
        
    })

    it('should return morseCode in dash and dot form', () => {
        const binString =
            '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';
        
        const actual = decodeBits(binString);
        const expected = `.... . -.--   .--- ..- -.. .`;
        expect(actual).toBe(expected);
    })

    it('should remove leading and trailing zeros', () => {
        const binString = '0000011001111110011000';
        const actual = decodeBits(binString);
        const expected = `.-.`;
        expect(actual).toBe(expected);
    })

    it('only accept string inputs', () => {
        const binString = {} as any;
        const actual = () => decodeBits(binString);
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    })

    it('only accept strings where the substrings of zeros are multiples of 1, 3 or 7', () => {
        const binString = '10011100010000000111';
        const actual = () => decodeBits(binString);
        const expected = `Invalid gap`;
        expect(actual).toThrow(expected);
    })

    it('only accept strings where the substrings of ones are multiples of 1 or 3', () => {
        const binString = '1000111000110000000111';
        const actual = () => decodeBits(binString);
        const expected = `Invalid code`;
        expect(actual).toThrow(expected);
    })

    it('handles the last sequence being the shortest', () => {
        const binString = '1110001110001';
        const actual = decodeBits(binString);
        const expected = `- - .`;
        expect(actual).toBe(expected);
    })
})