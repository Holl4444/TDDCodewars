import { describe, it, expect, test } from 'vitest';
import wideMouth from '../wideMouth';

describe('blah', () => {
    it('should return "wide" when input is "lion"', () => {
    const string = 'lion';
    expect(wideMouth(string)).toBe('wide');
    })

    it('should return "small" when input is "alligator"', () => {
    const string = 'alligator';
    expect(wideMouth(string)).toBe('small');
    })

})
