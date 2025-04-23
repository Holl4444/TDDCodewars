export default function twoSum(numbers, target) {
    if (!numbers ||
        !numbers.length ||
        !Array.isArray(numbers) ||
        !numbers.every(num => Number.isInteger(num)) ||
        !Number.isInteger(target)
        ) {
        throw new Error(`Takes an array of integers and a target integer`);
    };
    // Iterate over each value and index and if the numbers equal target return index and j-index
    for (let index in numbers) {
        for (let j = +index + 1; j < numbers.length; j++) {
            if (numbers[index] + numbers[j] === target) {
                return [+index, j];
            }
        }
    }
    throw new Error(`No two numbers in the array can be added to achieve the target`);
}

