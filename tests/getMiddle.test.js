import { describe, test, it, expect } from 'vitest';
import { getMiddle } from '../functions/getMiddle';

describe('getMiddle()', () => {
  it('should return a single char from a string of uneven length', () => {
    const string = 'e';
    const actual = getMiddle(string);
    expect(actual).toBe(string);
  });

  it('should return two chars from a string of even length', () => {
    const string = 'ev';
    const actual = getMiddle(string);
    expect(actual).toBe('ev');
  });

    test.each([
      ['qU&eR', '&'],
      ['raBbit', 'Bb'],
      ['tr2bit', '2b'],
    ])('getMiddle(%s) -> %s', (string, expected) => {
      // Test 1: Checking if special characters are handled correctly
      // Test 2: Ensuring mixed case letters return the correct middle
      // Test 3: Verifying numbers are treated properly in the string
      expect(getMiddle(string)).toBe(expected);
    });

    it('should return and empty string when given one', () => {
        const string = '';
        const actual = getMiddle(string);
        expect(actual).toBe(''); 
    })

        test.each([
            ['fudgerinosity', 'i'],
            ['epidermis', 'e'],
            ['feng-shui', '-'],
            ['hippopotamus', 'po'],
            ['fruiterian', 'te']
        ])('getMiddle(%s) -> %s', (string, expected) => {
            //Testing longer words of both types
          expect(getMiddle(string)).toBe(expected);
        });
    
    it('should handle a string with multiple character types', () => {
      const string = '1@#abcDEF';
      const actual = getMiddle(string);
      expect(actual).toBe('b'); // Middle two characters
    });
  });


// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"
