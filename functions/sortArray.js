export default function sortArray(array) {
    if (!array || array.length === 0 || !array.every(i => !Number.isNaN(Number(i)))) {
        throw new Error(`only accepts number value arrays`)
    }
    const indexArr = [];
    const oddsArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0 && Number.isInteger(array[i])) {
            indexArr.push(i);
            oddsArr.push(array[i]);
        }
    }
    oddsArr.sort((a, b) => a - b);
    for (let i = 0; i < oddsArr.length; i++) {
        array[indexArr[i]] = oddsArr[i];
    }
    console.log(indexArr, oddsArr);
    return array;
}