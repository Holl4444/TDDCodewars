import { it, expect, describe } from 'vitest';
import skate from '../functions/skate';

describe('skate: remove alphanumeric characters, count "./", return -1 if "." with no "/" before it 0 if count % 2 else 1', () => {
    it('should throw an error on non string input', () => {
        const string = 123 as any;
        const actual = () => skate(string);
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    })

    it('should return -1 when encountering a string with "." with no preceeding "/"', () => {
        const string = '___.____';
        const actual = skate(string);
        const expected = -1;
        expect(actual).toBe(expected);
    })

    it('should return -1 when encountering a "." with no preceeding "/"', () => {
        const string = '_.!aDf&*;ghat/.[';
        const actual = skate(string);
        const expected = -1;
        console.log(actual)
        expect(actual).toBe(expected);
    })

    it('should return -1 when encountering a "." with no preceeding "/"', () => {
        const string = '___.____';
        const actual = skate(string);
        const expected = -1;
        console.log(actual)
        expect(actual).toBe(expected);
    })

    it('should return -1 when encountering a "." with no preceeding "/"', () => {
        const string = '_/.!aDf&*;ghat.[';
        const actual = skate(string);
        const expected = -1;
        console.log(actual);
        expect(actual).toBe(expected);
    });

    it('should throw an error if the first character isn\'t "_"', () => {
        const string = '.!aHoll&*;ghatterat/.[';
        const actual = () => skate(string);
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    })

    it('should return 0 if we have flipped and even number of times for "normal" skating', () => {
        const string = '______';
        const actual = skate(string);
        const expected = 0;
        expect(actual).toBe(expected);
    })

    it('should return 1 if we have flipped and odd number of times for "switch" skating', () => {
        const string = '___/.___';
        const actual = skate(string);
        const expected = 1;
        expect(actual).toBe(expected);
    })

    it('should return 0 if we have flipped and even number of times in a row for "normal" skating', () => {
        const string = '__/..__';
        const actual = skate(string);
        const expected = 0;
        expect(actual).toBe(expected);
    })

    it('should return 1 if we have flipped and odd number of times in a row for "normal" skating', () => {
        const string = '__/...__';
        const actual = skate(string);
        const expected = 1;
        expect(actual).toBe(expected);
    })

    it('should return 1 if we have flipped an odd number of times in a row', () => {
        const string = '__/...__';
        const actual = skate(string);
        const expected = 1;
        expect(actual).toBe(expected);
    })

    it('should return 0 if we have flipped an even number of times', () => {
        const string = '___/.__/._';
        const actual = skate(string);
        const expected = 0;
        expect(actual).toBe(expected);
    });

    it('should return 1 if we have flipped an odd number of times in a row', () => {
        const string = '___/.__/.._';
        const actual = skate(string);
        const expected = 1;
        expect(actual).toBe(expected);
    });

    
})