export default function productFib(prod) {

    if (!Number.isInteger(prod) || prod < 0) {
    throw new Error('Positive integer value input');
    }

    return pfRecursive(0, 1, prod);
 }

function pfRecursive(x, y, prod) {

  if (x * y > prod) return false;
  if (x * y === prod) return true;

  return pfRecursive(y, x + y, prod);
}



// export default function productFib(prod) {
//     if (!Number.isInteger(prod) || prod < 0) {
//         throw new Error('Positive integer value input');
//     }
//     let x = 0;
//     let y = 1;
//     while ( x * y <= prod) {
//         if (x * y === prod) {
//             return true;
//         }
//         const next = x + y;
//         x = y;
//         y = next;
//     }
//     return false;
// }