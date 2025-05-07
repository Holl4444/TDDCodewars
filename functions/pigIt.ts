export default function pigIt(str: string) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        throw new Error(`Invalid input`);
    }
    let pigStr = '';
    for (let word of str.split(' ')) {
        const pigWord = `${word.slice(1)}${word.slice(0, 1)}ay `;
        pigStr += pigWord;
    }
    return pigStr.slice(0, -1);
}