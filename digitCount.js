export default function nbDig(n, d) {
    if (!Number.isInteger(n) || !Number.isInteger(d) || n < 0 || d < 0 || d > 9 ) {
      throw new Error('positive integers under 10 only please');
    }
    let count = 0;
    const squared = [
      0,
      ...Array(n)
        .fill()
        .map((_, index) => (index + 1) ** 2),
    ];
    for (let digit of squared) {
    digit = digit.toString();
        for (let char of digit) {
            if (char === `${d}`) {
            count++;
            }
        }
    }
    return count;
}