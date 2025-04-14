import { describe, expect, it, test } from 'vitest';
import nbDig from '../digitCount';

describe('nbDig', () => {
  it('should throw a type error if either parameter is NaN', () => {
    const n = '9',
      d = 1;
    const actual = () => nbDig(n, d);
    expect(actual).toThrow('positive integers under 10 only please');
  });

  it('should continue if both arguments are integers', () => {
    const n = 10,
      d = 1;
    const actual = nbDig(n, d);
    expect(actual).toBe(4);
  });
    
  it('should not accept negative arguments', () => {
        const n = -9,
        d = 1;
        const actual = () => nbDig(n, d);
        expect(actual).toThrow('positive integers under 10 only please');
  })

    it('should not accept d > 9', () => {
        const n = 9,
        d = 12;
        const actual = () => nbDig(n, d);
        expect(actual).toThrow('positive integers under 10 only please');
  })

    it('should not accept decimals', () => {
        const n = 9.43,
        d = 1;
        const actual = () => nbDig(n, d);
        expect(actual).toThrow('positive integers under 10 only please');
  })

    it('should not accept empty argumants', () => {
        const n = 20;
        let d;
        const actual = () => nbDig(n, d);
        expect(actual).toThrow('positive integers under 10 only please');
    })

    it('should manage n = 0 d = 0', () => {
        const n = 0, d = 0;
        const result = 1;
        const actual = nbDig(n, d);
        expect(actual).toBe(result);
    })
    
    test.each(
        [
            [5750, 0, 4700],
            [11011, 2, 9481],
            [12224, 8, 7733],
            [11549, 1, 11905],
            [1, 1, 1],
            [25, 2, 9]
        ]
    )('nbDig(%i, %i) -> %i', (n, d, expected) => {
        expect(nbDig(n, d)).toBe(expected)
    })

});
