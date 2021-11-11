// Problem: Given an array of numbers, find the largest product formed by
// two of the numbers
​
// time complexity: O(nlog(n))
// space complexity: O(1)
// function largestProduct(arr) {
//   // return undefined if length is or 0
//   if (arr.length <= 1) return undefined;
​
//   // sort array from least to greatest
//   arr.sort((a, b) => a - b); // nlog(n)
​
//   // multiply the last two items & first two items
​
//   const largestProduct = arr[arr.length - 1] * arr[arr.length - 2];
//   const smallestProduct = arr[0] * arr[1];
​
//   // compare the two and return the absolute largest
//   if (largestProduct > smallestProduct) {
//     return largestProduct;
//   }
//   return smallestProduct;
// }
​
// function largestProduct(arr) {
//     // return largest product formed by two of the numbers
//     if(arr.length<2) undefined;
​
//    arr.sort((a,b) => b-a); // nlogn
//    const firstPro = arr[0]*arr[1];
//    const lastEl = arr.pop(); // mutating original array, better to index
//    const lastSecEl = arr.pop();
//    const secondPro = lastEl*lastSecEl;
//    return firstPro>secondPro ? firstPro :secondPro
​
// }
​
// time complexity: O(n)
// space complexity: O(1)
// function largestProduct(arr) {
//   // return largest product formed by two of the numbers
//   if (arr.length < 2) {
//     return;
//   }
//   let product = -Infinity;
//   let first = 0;
//   let last = arr.length - 1;
//   while (first != arr.length - 1) {
//     const multiplied = arr[last] * arr[first];
//     if (multiplied > product) {
//       product = multiplied;
//     }
//     last--;
//     if (last === first) {
//       first++;
//       last = arr.length - 1;
//     }
//   }
//   return product;
// }
​
// function largestProduct(arr) {
//     // return largest product formed by two of the numbers
//     if (arr.length <= 1){
//         return undefined;
//     }
​
//     let firstLargest = 0;
//     let secondLargest = 0;
​
//     arr.forEach((number) => {
//         let current = Math.abs(number);
//         if (current > firstLargest){
//             secondLargest = firstLargest;
//             finalFirst = number;
//         } else if (secondLargest < current){
//             finalSecond = number;
//         }
//     })
//     console.log(`-------------------------`)
//     console.log(finalFirst, finalSecond);
//     return finalFirst * finalSecond;
// }
​
// best and most efficient solution
// time complexity: O(n)
// space complexity: O(1)
// function largestProduct(arr) {
​
//     // array must have min 2 numbers
//   if (arr.length < 2) {
//     return undefined;
//   }
​
//   // initialize placeholders for future values
//   let largest = -Infinity; // really small number
//   let secondLargest = -Infinity;
//   let smallest = Infinity; // really large number
//   let secondSmallest = Infinity;
​
//   // loop though our array item by item and find the largest and smallest pairs
//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
​
//     // find the largest number
//     if (value > largest) {
//       secondLargest = largest; // old largest number is now the second largest
//       largest = value;
//     } else if (value > secondLargest) {
//       secondLargest = value; // number is not bigger than "largest" but bigger than second largest
//     }
​
//     // find the smallest numbers
//     if (value < smallest) {
//       secondSmallest = smallest;
//       smallest = value;
//     } else if (value < secondSmallest) {
//       secondSmallest = value;
//     }
//   }
​
//   const largestProduct = largest * secondLargest;
//   const smallestProduct = smallest * secondSmallest;
​
//   if (largestProduct > smallestProduct) {
//     return largestProduct;
//   }
​
//   return smallestProduct;
// }
​
// Brute force
// time complexity: O(n^2)
// space complexity: O(1)
​
function largestProduct(arr) {
  if (arr.length < 2) {
    return undefined;
  }
​
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    const valueA = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const valueB = arr[j];
      const product = valueA * valueB;
      if (product > largest) {
        largest = product;
      }
    }
  }
​
  return largest;
}
​
console.log(largestProduct([3, 5, 2, 6, 8, 1])); // 48
console.log(largestProduct([3, 5, 8, 6, 8, 1])); // 64
console.log(largestProduct([3, 8, 8, 6, 8, 1])); // 64
console.log(largestProduct([11, 11, 11])); // 121
console.log(largestProduct([3, -11, 5, 8, 6, 8, -9, 1])); // 99
console.log(largestProduct([3, -11, 5, 8, 6, 8, 9, 1])); // 72
console.log(largestProduct([3, 5, 2, 6.5, 8, 1])); // 52
console.log(largestProduct([3, 5, 0, 6, 8, 1])); // 48
console.log(largestProduct([0, 0, 0])); // 0
console.log(largestProduct([-5, 10])); // -50
console.log(largestProduct([3])); // undefined
console.log(largestProduct([])); // undefined