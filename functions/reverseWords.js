export default function (str) {
    if (!str || str.length === 0 || typeof str !== "string") {
        throw new Error(`Please enter a valid string`);
    }
    //Iterate over each word, make it and array reverse it.
    const wordRevStr = str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
    return wordRevStr;
}