import { describe, it, expect } from 'vitest';
import { incrementString } from '../functions/incrementString';

describe('incrementString', () => {
  it('should return a string', () => {
    const output = 'words';
    const actual = incrementString();
    expect(typeof actual).toBe(typeof output);
  });

  it('should increase the value of any number that it ends in', () => {
    const string = 'verily4';
    const updatedString = 'verily5';
    const actual = incrementString(string);
    expect(actual).toBe(updatedString);
  });

  it('should return string with an added "1" if there is no number at the end', () => {
    const string = 'habit';
    const updatedString = 'habit1';
    const actual = incrementString(string);
    expect(actual).toBe(updatedString);
  });

  it('should only increase the value of the last number in the string', () => {
    const string = 'double98';
    const updatedString = 'double99';
    const actual = incrementString(string);
    expect(actual).toBe(updatedString);
  });

  it('should check for the number 9 at the end of the string and round up', () => {
    const string = 'last9';
    const updatedstring = `last10`;
    const actual = incrementString(string);
    expect(actual).toBe(updatedstring);
  });

  //   it('should check if there is a zero before a 9 and remove it if so', () => {
  //     const string = 'last009';
  //     const updatedstring = `last010`;
  //     const actual = incrementString(string);
  //     expect(actual).toBe(updatedstring);
  //   });

  it('should check for the number 9 at the end and if so there find out how many 9s there are in a row', () => {
    const string = 'last99999';
    const updatedstring = `last100000`;
    const actual = incrementString(string);
    expect(actual).toBe(updatedstring);
  });

  it('should check for and remove zeros that preceed the row of trailing 9s', () => {
    const string = 'last099999';
    const updatedstring = `last100000`;
    const actual = incrementString(string);
    expect(actual).toBe(updatedstring);
  });

  it('should only remove one zero if more than one preceed the trailing 9s', () => {
    const string = 'last00099999';
    const updatedstring = `last00100000`;
    const actual = incrementString(string);
    expect(actual).toBe(updatedstring);
  });

  it('should correctly increment a string containing only numbers', () => {
    const string = '999';
    const updatedString = '1000';
    const actual = incrementString(string);
    expect(actual).toBe(updatedString);
  });

  it('should correctly increment single-digit number at the end', () => {
    const string = 'a9';
    const updatedString = 'a10';
    const actual = incrementString(string);
    expect(actual).toBe(updatedString);
  });

  it('should return "1" when given an empty string', () => {
    const string = '';
    const updatedString = '1';
    const actual = incrementString(string);
    expect(actual).toBe(updatedString);
  });

  it('should treat return "1" from a string ending in zero', () => {
    const string = '0';
    const updatedString = '1';
    const actual = incrementString(string);
    expect(actual).toBe(updatedString);
  });

  it('should only consider numbers at the end of the string', () => {
    const string = 'abc123def';
    const updatedString = 'abc123def1';
    const actual = incrementString(string);
    expect(actual).toBe(updatedString);
  });

  it('should do nothing to special characters', () => {
    const string = 'abc?99';
    const updatedString = 'abc?100';
    const actual = incrementString(string);
    expect(actual).toBe(updatedString);
  });

  //I realise i tested this inadvertently earlier but have added it for future developers in case the previous code is altered.
  it('should be fine with very short strings', () => {
    const string = '1';
    const updatedString = '2';
    const actual = incrementString(string);
    expect(actual).toBe(updatedString);
  });

  it('should throw an error for strings longer than 15 characters', () => {
    const string = 'big999999999999999999999';
    const updatedString = 'Getting into big int territory here!';
    const actual = () => incrementString(string);
    expect(actual).toThrow(updatedString);
  });
});
