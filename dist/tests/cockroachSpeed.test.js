import { describe, it, expect } from 'vitest';
import cockroachSpeed from '../cockroachSpeed';
describe('Take speed in km/h and return it in cm/s rounded down to the nearest integer', () => {
    it('should return an integer', () => {
        const kmh = 9;
        const actual = cockroachSpeed(kmh);
        const expected = 'number';
        expect(typeof actual).toBe(expected);
    });
    it('should return convert 0km/h to 0cm/s', () => {
        const kmh = 0;
        const actual = cockroachSpeed(kmh);
        const expected = 0;
        expect(actual).toBe(expected);
    });
    it('should convert 1km/h to 27cm/s', () => {
        const kmh = 1;
        const actual = cockroachSpeed(kmh);
        const expected = 27;
        expect(actual).toBe(expected);
    });
    it('should handle decimals', () => {
        const kmh = 3.6;
        const actual = cockroachSpeed(kmh);
        const expected = 100;
        expect(actual).toBe(expected);
    });
    it('should handle negative values', () => {
        const kmh = -1;
        const actual = () => cockroachSpeed(kmh);
        const expected = `The cockroach turns around to go backwards`;
        expect(actual).toThrow(expected);
    });
    it('should return an integer', () => {
        const kmh = 3.89;
        const actual = Number.isInteger(cockroachSpeed(kmh));
        const expected = true;
        expect(actual).toBe(expected);
    });
    it('should return an error for non number input', () => {
        const kmh = "sandwiches";
        const actual = () => cockroachSpeed(kmh); // Quite right typescript :)
        const expected = `Invalid input`;
        expect(actual).toThrow(expected);
    });
    it('should handle large values', () => {
        const kmh = 20000;
        const actual = cockroachSpeed(kmh); // Quite right typescript :)
        const expected = 555555;
        expect(actual).toBe(expected);
    });
});
//# sourceMappingURL=cockroachSpeed.test.js.map