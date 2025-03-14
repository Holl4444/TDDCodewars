import { describe, test, it, expect } from 'vitest';
import twoSum from '../twoSum';

describe('The function twoSum returns indexes of the numbers within an array that when summed together return the target number, as an array', () => {
    it('should return an array of two numbers', () => {
        const inputArr = [1, 2];
        const inputTar = 3;
        const actual = twoSum(inputArr, inputTar)
        const expected = true;
        expect(Array.isArray(actual)).toBe(expected);
    })

    it('should return an array of two numbers', () => {
        const inputArr = [5, 4, 3];
        const inputTar = 7;
        const actual = twoSum(inputArr, inputTar)
        const expected = 2;
        expect(actual.length).toBe(expected);
    })

    it('should return the indexes of two numbers that sum to inputTar', () => {
        const inputArr = [10, 2, 3, 1];
        const inputTar = 3;
        const actual = twoSum(inputArr, inputTar)
        const expected = [1, 3];
        expect(actual).toStrictEqual(expected);
    })

    it('should throw an error if no numbers can add to target', () => {
        const inputArr = [10, 8, 3, 1];
        const inputTar = 3;
        const actual = () => twoSum(inputArr, inputTar)
        const expected = `No two numbers in the array can be added to achieve the target`;
        expect(actual).toThrow(expected);
    })

    it('should handle zero', () => {
        const inputArr = [0, 8, 3, 1, 73];
        const inputTar = 3;
        const actual = twoSum(inputArr, inputTar)
        const expected = [0, 2];
        expect(actual).toStrictEqual(expected);
    })

    it('should handle zero', () => {
        const inputArr = [15, 4, 0, 1, 19];
        const inputTar = 15;
        const actual = twoSum(inputArr, inputTar)
        const expected = [0, 2];
        expect(actual).toStrictEqual(expected);
    })

    it('should handle multiple correct options, returning the first', () => {
        const inputArr = [1, 2, 0, 3, 19, 4];
        const inputTar = 5;
        const actual = twoSum(inputArr, inputTar)
        const expected = [0, 5];
        expect(actual).toStrictEqual(expected);
    })

    it('should handle negative numbers', () => {
        const inputArr = [-9, 2, 0, 3, 19, -4];
        const inputTar = -1;
        const actual = twoSum(inputArr, inputTar)
        const expected = [3, 5];
        expect(actual).toStrictEqual(expected);
    })

    it('should not use the same index for duplicate numbers', () => {
        const inputArr = [3, 3];
        const inputTar = 6;
        const actual = twoSum(inputArr, inputTar)
        const expected = [0, 1];
        expect(actual).toStrictEqual(expected);
    })

    it('should throw an error if an empty array is given as an argument', () => {
        const inputArr = [];
        const inputTar = 6;
        const actual = () => twoSum(inputArr, inputTar);
        expect(actual).toThrow(`Takes an array of integers and a target integer`);
    })

    it('should throw an error if any value in the argument array is not an integer', () => {
        const inputArr = [1, 4, 'twenty', 5];
        const inputTar = 6;
        const actual = () => twoSum(inputArr, inputTar);
        expect(actual).toThrow(`Takes an array of integers and a target integer`);
    })

    it('should throw an error if any value in the argument array is not an integer', () => {
        const inputArr = [1, 4, 2.5, 5];
        const inputTar = 6;
        const actual = () => twoSum(inputArr, inputTar);
        expect(actual).toThrow(`Takes an array of integers and a target integer`);
    })

    it('should throw an error if the target is not an integer', () => {
        const inputArr = [1, 4, 2.5, 5];
        const inputTar = 'six';
        const actual = () => twoSum(inputArr, inputTar);
        expect(actual).toThrow(`Takes an array of integers and a target integer`);
    })
})