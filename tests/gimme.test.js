import { describe, it, expect } from 'vitest';
import gimme from '../gimme';

describe('Return the index of the number that lies between two others in a triplet array', () => {
    it('should have an input consisting of an array of the numerical elements', () => {
        const input = { 1: '2', 3: '4'};
        const actual = () => gimme(input);
        expect(actual).toThrow(
          'Input should be an array of three numerical elements.'
        );
    })

    it('should have an input consisting of an array of three numerical elements', () => {
        const input = [1, 2];
        const actual = () => gimme(input);
        expect(actual).toThrow(
          'Input should be an array of three numerical elements.'
        );
    })

    it('should have an input consisting of an array of three numerical elements', () => {
        const input = [1, 2, '3'];
        const actual = () => gimme(input);
        expect(actual).toThrow('Input should be an array of three numerical elements.')
    })

    it('the input array should contain unique values', () => {
        const input = [1, 2, 1];
        const actual = () => gimme(input);
        expect(actual).toThrow('Unique integers only please.');
    })

    it('should return an integer', () => {
        const input = [1, 2, 6];
        const actual = gimme(input);
        expect(typeof actual).toBe('number');
    })

    it('should return an integer between 0 and 2', () => {
        const input = [1, 2, 3];
        const actual = gimme(input);
        expect(actual).toBeLessThan(3);
    })

    it('should return an integer between 0 and 2', () => {
        const input = [1, 2, 6];
        const actual = gimme(input);
        expect(actual).toBeGreaterThanOrEqual(0);
    })

    it('should return the middle value integer', () => {
        const input = [6, 2, 5];
        const actual = gimme(input);
        expect(actual).toBe(2);
    })

    it('should handle negative values', () => {
        const input = [6, -2, -5];
        const actual = gimme(input);
        expect(actual).toBe(1);
    })

    it('should handle floats', () => {
        const input = [6.1, 9, 3.333];
        const actual = gimme(input);
        expect(actual).toBe(0);
    })

    it('should handle both floats and negative values', () => {
        const input = [-6.1, 9, 3.333];
        const actual = gimme(input);
        expect(actual).toBe(2);
    })

    it('should handle both floats and negative values', () => {
        const input = [-6.1, 9, 3.333];
        const actual = gimme(input);
        expect(actual).toBe(2);
    })

    it('should understand 0', () => {
        const input = [-6.1, 0, 3.333];
        const actual = gimme(input);
        expect(actual).toBe(1);
    })

})