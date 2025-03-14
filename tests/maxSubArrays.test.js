import { describe, it, expect } from 'vitest';
import maxSubArray from '../maxSubArray';

describe('tests for maxSubArray(). Return the sub array with the highest sum value from the input array', () => {
    it('Should return the only array value when it receives an array with one positive integer', () => {
        const input = [6];
        expect(maxSubArray(input)).toBe(6);
    })

    it('should return the sum of the array from an array of all positive values', () => {
        const input = [1, 10, 4, 3];
        const max = 18;
        const actual = maxSubArray(input);
        expect(actual).toBe(max);
    })

    it('should return the highest value subarray from the input array where positives are neighbouring', () => {
        const input = [-1, -7, -2, -5, -1, 4, 5];
        const max = 9;
        const actual = maxSubArray(input);
        expect(actual).toBe(max);         
    })

    it('should return the highest value subarray sum from the input array with varied input', () => {
        const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
        const max = 6;
        const actual = maxSubArray(input);
        expect(actual).toBe(max);         
    })

    it('should return 0 from and empty array', () => {
        const input = [];
        const max = 0;
        const actual = maxSubArray(input);
        expect(actual).toBe(max);        
    })

    it('should return 0 from an array with only negative values', () => {
        const input = [-2, -6, -1, -9];
        const max = 0;
        const actual = maxSubArray(input);
        expect(actual).toBe(max);        
    })
})