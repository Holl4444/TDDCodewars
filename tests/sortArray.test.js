import { describe, it, expect } from 'vitest';
import sortArray from '../sortArray';

describe('Given an array of numbers, leave even numbers as they are but sort all odd numbers in ascending order', () => {

    it('should return an array with odd number sorted in ascending order', () => {
        const array = [5, 2, 12, 3, 6, 9];
        const actual = sortArray(array);
        const expected = [3, 2, 12, 5, 6, 9];
        expect(actual).toStrictEqual(expected);
    })

    it('should handle negative values', () => {
        const array = [5, 2, 12, 3, 6, -9];
        const actual = sortArray(array);
        const expected = [-9, 2, 12, 3, 6, 5];
        expect(actual).toStrictEqual(expected);
    })

    it('should handle only odd arrays', () => {
        const array = [3, 59, 1, 999, 997, 7];
        const actual = sortArray(array);
        const expected = [1, 3, 7, 59, 997, 999];
        expect(actual).toStrictEqual(expected);
    })

    it('should handle only even arrays', () => {
        const array = [8, 4, 44,52, 26, 10];
        const actual = sortArray(array);
        const expected = [8, 4, 44, 52, 26, 10];
        expect(actual).toStrictEqual(expected);
    })

    it('should handle decimals, as incapable of being odd', () => {
        const array = [5.3, 6.2, 8, 23, 10, 1];
        const actual = sortArray(array);
        const expected = [5.3, 6.2, 8, 1, 10, 23];
        expect(actual).toStrictEqual(expected);
    })

    it('should handle invalid input', () => {
        const array = [6 , 18, 9, 2, 1, "bananas"];
        const actual = () => sortArray(array);
        const expected = `only accepts number value arrays`;
        expect(actual).toThrow(expected);
    })

    it('should handle zero', () => {
        const array = [6 , 0, 9, 2, 1 ];
        const actual = sortArray(array);
        const expected = [6, 0, 1, 2, 9];
        expect(actual).toStrictEqual(expected);
    })
})