export function getMiddle(string) {
    if (string.length % 2 == 0) {
        const sA = string.charAt(string.length / 2 - 1);
        const sB = string.charAt(string.length / 2)
        return sA + sB;
    }
    return string.charAt(Math.floor(string.length / 2));
}