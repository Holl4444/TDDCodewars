export default function countPositivesSumNegatives(array = []) {
  if (array.length === 0) {
    return [];
  }
  if (!Array.isArray(array) || array.length < 2)  {
    throw new TypeError('Expecting an array as argument');
  }
  return [
       array.filter((p) => p > 0).length,
       array.filter((n) => n < 0).reduce((a, b) => a + b, 0),
     ];
}

// function countPositivesSumNegatives(input) {
//   //separate array into positive, negative and zero
//   //Count the positives spread in array,
//   //Sum the negatives
//   const positives = [];
//   const negatives = [];
//   if (
//     !input ||
//     input.filter((el) => !el === 0) === [] ||
//     input === null
//   ) {
//     return [];
//   }
//   input.map((el) =>
//     el > 0 ? positives.push(el) : el < 0 ? negatives.push(el) : ''
//   );
//   const result = [
//     positives.length,
//     negatives.reduce((a, b) => a + b, 0),
//   ];

//   return result.every((el) => el === 0) ? [] : result;
// }


// return input && input.length
//   ? [
//       input.filter((p) => p > 0).length,
//       input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
//     ]
//   : [];