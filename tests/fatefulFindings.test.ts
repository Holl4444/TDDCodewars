import { it, expect, describe } from 'vitest';
import f from '../functions/FatefulFindings';

describe('f: ', () => {
    
    it('should return an empty string if there are no "gifts"', () => {
        const s = '......@.....';
        const actual = f(s);
        const expected = '';
        expect(actual).toBe(expected);
    })

    it('should return a single present immediately', () => {
        const s = '...z..@.....';
        const actual = f(s);
        const expected = 'z';
        expect(actual).toBe(expected);
    })

    it('should return the closest present to position', () => {
        const s = '...z..@...A.';
        const actual = f(s);
        const expected = 'zA';
        expect(actual).toBe(expected);
    })

    it('should return the heavier gift where distances are equal', () => {
        const s = '...a..@..Z..';
        const actual = f(s);
        const expected = 'Za';
        expect(actual).toBe(expected);
    })

    it('should return the fancier gift where distance and weight are equal', () => {
        const s = '...a..@..z..';
        const actual = f(s);
        const expected = 'az';
        expect(actual).toBe(expected);
    })

    it('should return the gift in the opposite direction from last collection where distance, weight and fanciness are equal', () => {
        const s = '...a.....@.Z...a..';
        const actual = f(s);
        const expected = 'Zaa';
        expect(actual).toBe(expected);
    })

    it('should return "?" if we need a direction to flip to but don\'t have one set yet', () => {
        const s = '.Z.a..@..a..';
        const actual = f(s);
        const expected = '?';
        expect(actual).toBe(expected);
    })

    it('should slot in an extra small gift if there is one no further to current than current is to basecamp.', () => {
        const s = '...b..a..@........';
        const actual = f(s);
        const expected = 'ba';
        expect(actual).toBe(expected);
    })

    it('should skip heavier gifts to access available second small gifts', () => {
        const s = '...b.Za..@........';
        const actual = f(s);
        const expected = 'baZ';
        expect(actual).toBe(expected);
    })

    it('should collect small gifts that are a greater distance away than from position to base, if the closest gift on the opposite side is further from base', () => {
        const s = '..z...a..@......b.';
        const actual = f(s);
        const expected = 'zab';
        expect(actual).toBe(expected);
    })

    it('should skip heavier letters in between as capacity is max 2 small', () => {
        const s = '..zA..a..@......b.';
        const actual = f(s);
        const expected = 'zaAb';
        expect(actual).toBe(expected);
    })

    it('must skip heavier letters in between as capacity is max 2 small', () => {
        const s = '...B..a..@..z.....';
        const actual = f(s);
        const expected = 'azB';
        expect(actual).toBe(expected);
    })

    it('should skip small letters if they are neither closer to position or closer to base than the nearest on the opposite side', () => {
        const s = '..b...a..@..z.....';
        const actual = f(s);
        const expected = 'azb';
        expect(actual).toBe(expected);
    })

    it('should be baffline?', () => {
        const s = '.b.a.....@.Z...a..';
        const actual = f(s);
        const expected = 'Zbaa';
        expect(actual).toBe(expected);
    })

    it('should be baffline?', () => {
        const s = 'ABCdef@abcDEF';
        const actual = f(s);
        const expected = 'baefcdCDBEAF';
        expect(actual).toBe(expected);
    })
})