// Problem: Sort an array of values which only contains zeroes or ones
​
// simplest: Just use merge/quicksort
// O(nlog(n))
// function sortBinary(arr) {
//   // return sorted array
//   if (!arr.length) {
//     return arr;
//   }
​
//   arr.sort();
//   return arr;
// }
​
// time complexity: O(n)
// space complexity: O(n)
// function sortBinary(arr) {
//   let sortedArr = []; // creates a new array to add values
//   for (let i = 0; i < arr.length; i++) {
//     // if it's a 0, add to front of array, else add to the back
//     if (arr[i] === 0) {
//       sortedArr.unshift(arr[i]);
//     } else {
//       sortedArr.push(arr[i]);
//     }
//   }
//   return sortedArr;
// }
​
// time complexity: O(n)
// space complexity: O(1)
// can we do this without adding extra memory?
// function sortBinary(arr) {
//   let zeroes = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zeroes++;
//     }
//   }
​
//   // fill the first part of our array with however many zeroes we counted
//   for (let i = 0; i < zeroes; i++) {
//     arr[i] = 0;
//   }
​
//   // fill the rest with 1's
//   for (let i = zeroes; i < arr.length; i++) {
//     arr[i] = 1;
//   }
​
//   return arr;
// }
​
// Can we make this even MORE efficient??
// time complexity: O(n)
// space complexity: O(1)
function sortBinary(arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 0) {
      swap(arr, i, j);
      i++;
    }
  }
​
  return arr;
}
​
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  // [arr[i], arr[j]] = [arr[j], arr[i]]
}
​
console.log(sortBinary([0, 1, 1, 0, 1, 0, 1, 1])); // [0, 0, 0, 1, 1, 1, 1, 1]
console.log(sortBinary([])); // []
console.log(sortBinary([1, 1, 1, 0, 0, 0])); // [0, 0, 0, 1, 1, 1]
console.log(sortBinary([1, 1, 1])); // [1, 1, 1]