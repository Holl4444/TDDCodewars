import { it, expect, describe, vi, afterEach, beforeEach, MockInstance } from 'vitest';
import decodeMorse from '../functions/decodeMorse';

describe('decodeMorse: translate morse code to human readable', () => {
    it('should return a decoded letter', () => {
        const str = '....';
        const actual = decodeMorse(str);
        const expected = 'H';
        expect(actual).toBe(expected);
    })

    it('should return a decoded word', () => {
        const str = '.... . -.--';
        const actual = decodeMorse(str);
        const expected = 'HEY';
        expect(actual).toBe(expected);
    })

    it('should return a decoded sentance', () => {
        const str = '.... . -.--   .--- ..- -.. .';
        const actual = decodeMorse(str);
        const expected = 'HEY JUDE';
        expect(actual).toBe(expected);
    })

    it('should handle punctuation', () => {
        const str = '.-.-.-';
        const actual = decodeMorse(str);
        const expected = '.';
        expect(actual).toBe(expected);
    })

    it('should remove whitespace before punctuation', () => {
        const str = '.... .-.-.-';
        const actual = decodeMorse(str);
        const expected = 'H.';
        expect(actual).toBe(expected);
    })

    it('should handle numbers', () => {
        const str =
          '-----';
        const actual = decodeMorse(str);
        const expected = '0';
        expect(actual).toBe(expected);
    })

    it('should handle multiple numbers', () => {
        const str = '----- ----.';
        const actual = decodeMorse(str);
        const expected = '09';
        expect(actual).toBe(expected);
    })

    it('should handle several different numbers', () => {
        const str =
          '----- .---- ..--- ...-- ....-   --... ..--- -----';
        const actual = decodeMorse(str);
        const expected = '01234 720';
        expect(actual).toBe(expected);
    })

    it('should handle letters and numbers together', () => {
        const str =
          '.... ...-- -.--   .--- ..- -.. ...--   -.... ....-';
        const actual = decodeMorse(str);
        const expected = 'H3Y JUD3 64';
        expect(actual).toBe(expected);
    })

    it('should handle any amount of white space above 1 as three', () => {
        const str =
          '.... ...-- -.--  .--- ..- -.. ...--  -.... ....-';
        const actual = decodeMorse(str);
        const expected = 'H3Y JUD3 64';
        expect(actual).toBe(expected);
    })

    describe('console.log mock', () => {
        let consoleMock: MockInstance<typeof console.log>;

            beforeEach(() => {
              // Reset the mock before each test
              consoleMock = vi
                .spyOn(console, 'log')
                .mockImplementation(() => undefined);
            });

        afterEach(() => {
            consoleMock.mockReset();
        });

        it('should log "For more accurate results check spacing: multiple spaces adjusted to 3"', () => {
            const str =
                '.... ...-- -.--  .--- ..- -.. ...--  -.... ....-';
            decodeMorse(str);
            expect(consoleMock).toHaveBeenCalledOnce();
            expect(consoleMock).toHaveBeenLastCalledWith(
              'For more accurate results check spacing: multiple spaces adjusted to 3'
            );
        });
    })

    it('should throw an error for non string input', () => {
        const str =
        ['.... ...-- -.--  .--- ..- -.. ...--  -.... ....-'] as any;
        const actual = () => decodeMorse(str);
        const expected = 'Invalid input';
        expect(actual).toThrow(expected);
    });

    it('should throw an error for empty input', () => {
        const str = '';
        const actual = () => decodeMorse(str);
        const expected = 'Invalid input';
        expect(actual).toThrow(expected);
    });


})