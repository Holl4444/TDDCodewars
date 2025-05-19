import { it, expect, describe } from 'vitest';
import solution from '../functions/breakCamelCase';

describe('breakCamelCase: should add a space before capitalised letters in a string', () => {

    it('should only accept string input', () => {
        const str = 123 as any;
        const actual = () => solution(str);
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    })

    it('should only accept valid variable inputs', () => {
        const str = '1name';
        const actual = () => solution(str);
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    })

    it('should only accept valid variable inputs', () => {
        const str = '$name';
        const actual = solution(str);
        const expected = `$name`;
        expect(actual).toBe(expected);
    })

    it('should only accept valid variable inputs', () => {
        const str = 'camel12Case';
        const actual = solution(str);
        const expected = `camel12 Case`;
        expect(actual).toBe(expected);
    })

    it('should return an empty string when it recieves one', () => {
        const str = '';
        const actual = solution(str);
        const expected = ``;
        expect(actual).toBe(expected);
    })

    it('should return a word as it is', () => {
        const str = 'elephant';
        const actual = solution(str);
        const expected = `elephant`;
        expect(actual).toBe(expected);
    })

    it('should replace a capital letter at the start of a string with lowercase', () => {
        const str = 'Elephant';
        const actual = solution(str);
        const expected = `elephant`;
        expect(actual).toBe(expected);
    })

    it('should add a space preceeeding other capital letters', () => {
        const str = 'ElephantTusks';
        const actual = solution(str);
        const expected = `elephant Tusks`;
        expect(actual).toBe(expected);
    })

    it('should add a space preceeeding other capital letters', () => {
        const str = 'ElephantTusksIvory';
        const actual = solution(str);
        const expected = `elephant Tusks Ivory`;
        expect(actual).toBe(expected);
    })

    it('should not change special characters', () => {
        const str = 'ElephantTusksIvory';
        const actual = solution(str);
        const expected = `elephant Tusks Ivory`;
        expect(actual).toBe(expected);
    })

})