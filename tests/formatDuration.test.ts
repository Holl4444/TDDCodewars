import { it, expect, describe } from 'vitest';
import formatDuration from '../functions/formatDuration';

describe('formatDuration: given seconds return `X hours, X minutes and X seconds', () => {
    
    it('should return `now` if seconds is 0', () => {
        const secs = 0;
        const actual = formatDuration(secs);
        const expected = `now`;
        expect(actual).toBe(expected);
    })

    it('should return `Invalid input` if seconds is negative', () => {
        const secs = -1;
        const actual = () => formatDuration(secs);
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    })

    it('should return `Invalid input` if seconds is empty', () => {
        const secs = undefined as any;
        const actual = () => formatDuration(secs);
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    })

    it('should return `1 second` if seconds is 1', () => {
        const secs = 1;
        const actual = formatDuration(secs);
        const expected = `1 second`;
        expect(actual).toBe(expected);
    })

    it('should return `2 seconds` if seconds is 2', () => {
        const secs = 2;
        const actual = formatDuration(secs);
        const expected = `2 seconds`;
        expect(actual).toBe(expected);
    })

    it('should return `59 seconds` if seconds is 59', () => {
        const secs = 59;
        const actual = formatDuration(secs);
        const expected = `59 seconds`;
        expect(actual).toBe(expected);
    })

    it('should return `1 minute` if seconds is 60', () => {
        const secs = 60;
        const actual = formatDuration(secs);
        const expected = `1 minute`;
        expect(actual).toBe(expected);
    })

    it('should return `1 minute and 1 second` if seconds is 61', () => {
        const secs = 61;
        const actual = formatDuration(secs);
        const expected = `1 minute and 1 second`;
        expect(actual).toBe(expected);
    })

    it('should return `1 minute and 59 seconds` if seconds is 119', () => {
        const secs = 119;
        const actual = formatDuration(secs);
        const expected = `1 minute and 59 seconds`;
        expect(actual).toBe(expected);
    })

    it('should return `1 hour` if seconds is 3600', () => {
        const secs = 3600;
        const actual = formatDuration(secs);
        const expected = `1 hour`;
        expect(actual).toBe(expected);
    })

    it('should return `1 hour and 1 second` if seconds is 3601', () => {
        const secs = 3601;
        const actual = formatDuration(secs);
        const expected = `1 hour and 1 second`;
        expect(actual).toBe(expected);
    })

    it('should return `1 hour and 1 minute` if seconds is 3660', () => {
        const secs = 3660;
        const actual = formatDuration(secs);
        const expected = `1 hour and 1 minute`;
        expect(actual).toBe(expected);
    })

    it('should return `1 hour and 2 minutes` if seconds is 3720', () => {
        const secs = 3720;
        const actual = formatDuration(secs);
        const expected = `1 hour and 2 minutes`;
        expect(actual).toBe(expected);
    })

    it('should return `1 hour and 10 seconds` if seconds is 3610', () => {
        const secs = 3610;
        const actual = formatDuration(secs);
        const expected = `1 hour and 10 seconds`;
        expect(actual).toBe(expected);
    })

    it('should return `1 hour, 1 minute and 10 seconds` if seconds is 3670', () => {
        const secs = 3670;
        const actual = formatDuration(secs);
        const expected = `1 hour, 1 minute and 10 seconds`;
        expect(actual).toBe(expected);
    })

    it('should return `1 hour, 2 minutes and 1 second` if seconds is 3721', () => {
        const secs = 3721;
        const actual = formatDuration(secs);
        const expected = `1 hour, 2 minutes and 1 second`;
        expect(actual).toBe(expected);
    })

    it('should return `5 hour, 1 minutes and 5 seconds` if seconds is 18065', () => {
        const secs = 18065;
        const actual = formatDuration(secs);
        const expected = `5 hours, 1 minute and 5 seconds`;
        expect(actual).toBe(expected);
    })

    it('should return `1 day, 5 hours, 1 minute and 5 seconds` if seconds is 104465', () => {
        const secs = 104465;
        const actual = formatDuration(secs);
        const expected = `1 day, 5 hours, 1 minute and 5 seconds`;
        expect(actual).toBe(expected);
    })

    it('should return `2 days, 5 hours, 1 minute and 5 seconds` if seconds is 190865', () => {
        const secs = 190865;
        const actual = formatDuration(secs);
        const expected = `2 days, 5 hours, 1 minute and 5 seconds`;
        expect(actual).toBe(expected);
    })

    it('should return `1 year, 2 days and 5 seconds` if seconds is 31708805', () => {
        const secs = 31708805;
        const actual = formatDuration(secs);
        const expected = `1 year, 2 days and 5 seconds`;
        expect(actual).toBe(expected);
    })

    it('should return `182 days, 1 hour, 44 minutes and 40 seconds` if seconds is 15731080', () => {
      const secs = 15731080;
      const actual = formatDuration(secs);
      const expected = `182 days, 1 hour, 44 minutes and 40 seconds`;
      expect(actual).toBe(expected);
    });

    it('should return `4 years, 68 days, 3 hours and 4 minutes` if seconds is 132030240', () => {
      const secs = 132030240;
      const actual = formatDuration(secs);
      const expected = `4 years, 68 days, 3 hours and 4 minutes`;
      expect(actual).toBe(expected);
    });

    it('should return `6 years, 192 days, 13 hours, 3 minutes and 54 seconds` if seconds is 205851834', () => {
      const secs = 205851834;
      const actual = formatDuration(secs);
      const expected = `6 years, 192 days, 13 hours, 3 minutes and 54 seconds`;
      expect(actual).toBe(expected);
    });

    it('should return `8 years, 12 days, 13 hours, 41 minutes and 1 second` if seconds is 253374061', () => {
      const secs = 253374061;
      const actual = formatDuration(secs);
      const expected = `8 years, 12 days, 13 hours, 41 minutes and 1 second`;
      expect(actual).toBe(expected);
    });

    it('should return `7 years, 246 days, 15 hours, 32 minutes and 54 seconds` if seconds is 242062374', () => {
      const secs = 242062374;
      const actual = formatDuration(secs);
      const expected = `7 years, 246 days, 15 hours, 32 minutes and 54 seconds`;
      expect(actual).toBe(expected);
    });

    it('should return `3 years, 85 days, 1 hour, 9 minutes and 26 seconds` if seconds is 101956166', () => {
      const secs = 101956166;
      const actual = formatDuration(secs);
      const expected = `3 years, 85 days, 1 hour, 9 minutes and 26 seconds`;
      expect(actual).toBe(expected);
    });

    it('should return `1 year, 19 days, 18 hours, 19 minutes and 46 seconds` if seconds is 33243586', () => {
      const secs = 33243586;
      const actual = formatDuration(secs);
      const expected = `1 year, 19 days, 18 hours, 19 minutes and 46 seconds`;
      expect(actual).toBe(expected);
    });

    it('should return `285616414 years, 264 days, 7 hours, 36 minutes and 31 seconds` if seconds is 9007199254740991', () => {
        const secs = 9007199254740991;
        const actual = formatDuration(secs);
        const expected = `285616414 years, 264 days, 7 hours, 36 minutes and 31 seconds`;
        expect(actual).toBe(expected);
    })

    it('should return `285616414 years, 264 days, 7 hours, 36 minutes and 31 seconds` if seconds is 9007199254740991', () => {
        const secs = 9007199254740992;
        const actual = () => formatDuration(secs);
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    })

    it('should return `Invalid input` if seconds is a float', () => {
        const secs = 3.14;
        const actual = () => formatDuration(secs);
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    })

    it('should return `Invalid input` if seconds is a string', () => {
    const secs = '60' as any;
    const actual = () => formatDuration(secs);
    const expected = `Invalid input`;
    expect(actual).toThrow(expected);
    });

})