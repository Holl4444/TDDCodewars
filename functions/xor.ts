export default function xor(
  a: boolean | string | number,
  b: boolean | string | number
): boolean {
  if (
    typeof a !== 'boolean' &&
    typeof a !== 'string' &&
    typeof a !== 'number' ||
    typeof b !== 'boolean' &&
    typeof b !== 'string' &&
    typeof b !== 'number'
  ) {
    throw new Error(`Invalid input`);
  }
  if (
    (typeof a === 'string' && a !== 'true' && a !== 'false') ||
    (typeof b === 'string' && b !== 'true' && b !== 'false')
  ) {
    throw new Error(
      `Invalid Input: only boolean values extended to include 'true', 'false, 0 and 1 accepted`
    );
  }
  if (
    (typeof a === 'number' && a !== 0 && a !== 1) ||
    (typeof b === 'number' && b !== 0 && b !== 1)
  ) {
    throw new Error(
      `Invalid Input: only boolean values extended to include 'true', 'false, 0 and 1 accepted`
    );
  }
  if (a === b) {
    return false;
  }
  return true;
}
