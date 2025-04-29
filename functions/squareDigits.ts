export default function squareDigits(num: number) {
    if (num === 0) {
        return 0;
    }
    if (!num || !Number.isInteger(num) || !Number.isSafeInteger(num)) {
        throw new Error(`Invalid input`);
    }
    const joinAbSquared = parseInt(Math.abs(num).toString().split('').map(n => parseInt(n) ** 2).join(''));
    return joinAbSquared;
}
