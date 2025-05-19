export default function solution(string: string) {
    if (string === null || string === undefined || typeof string !== 'string') {
        throw new Error(`Invalid input`);
    }

    string = string.trim();

    if (string.length > 0 && !/[a-zA-Z\$\_]/.test(string.slice(0, 1))) {
        throw new Error(`Invalid input`);
    }

    if (string.slice(0, 1).charCodeAt(0) < 96) {
        string = string.slice(0, 1).toLowerCase() + string.slice(1);
    }
    const spacedStr = string.split('').map(letter => (/[A-Z]/.test(letter)) ? ` ${letter}`: letter).join('');
    return spacedStr;
}