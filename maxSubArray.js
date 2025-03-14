export default function maxSubArray(array) {
    //for each array item find the highest value subarray
    let highest = 0;
    for (let item in array) {
        for (let i = +item + 1; i < array.length + 1; i++) {
            let subArray = array.slice(item, i);
            let subTotal = subArray.reduce((a, b) => a + b, 0);
            subTotal > highest && (highest = subTotal);
        };
    }
    return highest;
}
