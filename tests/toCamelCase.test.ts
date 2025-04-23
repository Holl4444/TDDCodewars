import { describe, it, expect } from 'vitest';
import toCamelCase from '../functions/toCamelCase';

describe('toCamelCase: convert underscore/dash delimited words to Pascal case. Ie the first letter is capitalised only if it was originally', () => {
    
    it('should return a string', () => {
        const string = 'the-stealth-warrior';
        const actual = toCamelCase(string);
        const expected = 'string';
        expect(typeof actual).toBe(expected);
    })

    it('should convert letters following dashes to capitals', () => {
        const string = 'the-stealth-warrior';
        const actual = toCamelCase(string);
        const expected = 'theStealthWarrior';
        expect(actual).toBe(expected);
    })

    it('should keep capital letters as capitals', () => {
        const string = 'The-stealth-warrior';
        const actual = toCamelCase(string);
        const expected = 'TheStealthWarrior';
        expect(actual).toBe(expected);
    })

    it('should handle underscores', () => {
        const string = 'The_Stealth_Warrior';
        const actual = toCamelCase(string);
        const expected = 'TheStealthWarrior';
        expect(actual).toBe(expected);
    })

    it('should handle underscores and dashes', () => {
        const string = 'The_Stealth-Warrior';
        const actual = toCamelCase(string);
        const expected = 'TheStealthWarrior';
        expect(actual).toBe(expected);
    })

    it('should handle text that is already Pascal case', () => {
        const string = 'TheStealthWarrior';
        const actual = toCamelCase(string);
        const expected = 'TheStealthWarrior';
        expect(actual).toBe(expected);
    })

    it('should handle text that is already Pascal case', () => {
        const string = 'theStealthWarrior';
        const actual = toCamelCase(string);
        const expected = 'theStealthWarrior';
        expect(actual).toBe(expected);
    })

    it('should handle other special characters', () => {
        const string = 'the@Stealth!Warrior';
        const actual = () => toCamelCase(string);
        const expected = 'Invalid input';
        expect(actual).toThrow(expected);
    })
})