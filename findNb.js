export default function findNb(m = 0) {
    if (!m || m <= 0 || !Number.isSafeInteger(m)) {
      throw new Error('Invalid input');
    }
  const formulaResult = (-1 + Math.sqrt(1 + 8 * Math.sqrt(m))) / 2;
  if (Number.isInteger(formulaResult)) {
    return formulaResult;
  }
  return -1;
}
