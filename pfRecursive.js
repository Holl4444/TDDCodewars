export default function pfRecursive(x, y, prod) {
  if (!Number.isInteger(prod) || prod < 0) {
    throw new Error('Positive integer value input');
  }
  if (x * y > prod) return false;
  if (x * y === prod) return true;

  return pfRecursive(y, x + y, prod);
}
