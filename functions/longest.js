export default function longest(str) {
    const words = str.split(' ');
    let word = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > word.length) {
            word = words[i];
        }
    }
    return word;
}