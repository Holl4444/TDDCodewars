import { describe, it, expect } from 'vitest';
import passingStudentsCaps  from '../functions/index.js';

describe('passingStudentsCaps', () => {
  it('returns capitalized names of passing students (score >= 60)', () => {
    const testStudents = [
      { name: 'Alice', age: 20, score: 85 },
      { name: 'Bob', age: 22, score: 55 },
      { name: 'Charlie', age: 21, score: 72 },
      { name: 'David', age: 19, score: 40 },
      { name: 'Eve', age: 23, score: 91 },
    ];

    const result = passingStudentsCaps(testStudents);

    // Should include passing students
    expect(result).toContain('ALICE');
    expect(result).toContain('CHARLIE');
    expect(result).toContain('EVE');

    // Should not include failing students
    expect(result).not.toContain('BOB');
    expect(result).not.toContain('DAVID');

    // Should be sorted alphabetically
    expect(result).toEqual(['ALICE', 'CHARLIE', 'EVE']);
  });

  it('returns an empty array when no students are passing', () => {
    const testStudents = [
      { name: 'Bob', age: 22, score: 55 },
      { name: 'David', age: 19, score: 40 },
    ];

    const result = passingStudentsCaps(testStudents);
    expect(result).toEqual([]);
  });

  it('handles empty input array', () => {
    const result = passingStudentsCaps([]);
    expect(result).toEqual([]);
  });
});
