export default function halfChar(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be of type string');
    }
    // return str.split('').map((char, ind) => ind % 2 !== 0 ? char : '').join('');
    return str
        .split('')
        .filter((char, indx) => (!char.match(/A-Za-z/) && char !== str[indx + 1]) ||
        char.match(/[A-Za-z]/) && indx % 2 !== 0)
        .join('');
}
;
//# sourceMappingURL=halfChar.js.map