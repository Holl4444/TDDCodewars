import { it, expect, describe } from 'vitest';
import humanReadable from '../functions/humanReadable';

describe('humanReadable: should return time in the format HH:MM:SS when given a non-negative integer representing seconds (max time = 359999 (99:59:59)', () => {
    
    it('should return 00:00:00 when given 0', () => {
        const secs = 0;
        const actual = humanReadable(secs);
        const expected = `00:00:00`;
        expect(actual).toBe(expected);
    })

    it('should return 01:00:00 when given 3600', () => {
        const secs = 3600;
        const actual = humanReadable(secs);
        const expected = `01:00:00`;
        expect(actual).toBe(expected);
    })

    it('should return 00:01:00 when given 60', () => {
        const secs = 60;
        const actual = humanReadable(secs);
        const expected = `00:01:00`;
        expect(actual).toBe(expected);
    })

    it('should return 00:00:01 when given 1', () => {
        const secs = 1;
        const actual = humanReadable(secs);
        const expected = `00:00:01`;
        expect(actual).toBe(expected);
    })

    it('should return 00:00:59 when given 59', () => {
        const secs = 59;
        const actual = humanReadable(secs);
        const expected = `00:00:59`;
        expect(actual).toBe(expected);
    })

    it('should return 00:01:30 when given 90', () => {
        const secs = 90;
        const actual = humanReadable(secs);
        const expected = `00:01:30`;
        expect(actual).toBe(expected);
    })

    it('should return 00:59:59 when given 3599', () => {
        const secs = 3599;
        const actual = humanReadable(secs);
        const expected = `00:59:59`;
        expect(actual).toBe(expected);
    })

    it('should return 12:34:56 when given 45296', () => {
        const secs = 45296;
        const actual = humanReadable(secs);
        const expected = `12:34:56`;
        expect(actual).toBe(expected);
    })

    it('should return 23:59:59 when given 86399', () => {
        const secs = 86399;
        const actual = humanReadable(secs);
        const expected = `23:59:59`;
        expect(actual).toBe(expected);
    })

    it('should return 24:00:00 when given 86400', () => {
        const secs = 86400;
        const actual = humanReadable(secs);
        const expected = `24:00:00`;
        expect(actual).toBe(expected);
    })

    it('should return 99:59:59 when given 359999', () => {
        const secs = 359999;
        const actual = humanReadable(secs);
        const expected = `99:59:59`;
        expect(actual).toBe(expected);
    })

    it('should throw an error when given a negative integer', () => {
        const secs = -359999;
        const actual = () => humanReadable(secs);
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    })

    it('should throw an error when given a number greater than 359999', () => {
        const secs = 360000;
        const actual = () => humanReadable(secs);
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    })

    it('should throw an error when given a float', () => {
        const secs = 36.2;
        const actual = () => humanReadable(secs);
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    })

    it('should throw an error when given a non integer value', () => {
        const secs = '39' as any;
        const actual = () => humanReadable(secs);
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    })

    it('should return 48:00:00 when given 172800', () => {
      const secs = 172800; // 2 days
      const actual = humanReadable(secs);
      const expected = `48:00:00`;
      expect(actual).toBe(expected);
    });

    it('should return 99:59:58 when given 359998', () => {
      const secs = 359998;
      const actual = humanReadable(secs);
      const expected = `99:59:58`;
      expect(actual).toBe(expected);
    });

    it('should throw an error for NaN', () => {
      const actual = () => humanReadable(NaN as any);
      expect(actual).toThrow('Invalid input');
    });

    it('should throw an error for Infinity', () => {
      const actual = () => humanReadable(Infinity as any);
      expect(actual).toThrow('Invalid input');
    });
    it('should correctly format very small values', () => {
      expect(humanReadable(2)).toBe('00:00:02');
      expect(humanReadable(10)).toBe('00:00:10');
    });
})