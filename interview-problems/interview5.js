// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.
​
// uses Map object to keep track of a count of occurences of our integers
// time and space complexity: O(n)
// function singleNumber(numbers) {
//   const test = new Map(); // initialize a new Map object
//   let result;
//   numbers.forEach((item) => {
//     if (test.has(item)) {
//       let value = test.get(item);
//       test.set(item, value + 1); // updates the current count if the number exists in map
//     } else {
//       test.set(item, 1); // adds a new key and initializes count at 1
//     }
//   });
//   test.forEach((value, key) => {
//     if (test.get(key) === 1) result = key;
//   });
//   return result;
// }
​
// O(n)
// function singleNumber(numbers) {
//   const sum = numbers.reduce((a, b) => a + b); // add all numbers
//   const numberSet = new Set(numbers); // deduplicate the array
//   const values = [...numberSet]; // convert set back to array
//   const value = values.reduce((a, b) => a + b); // added the unique array up
//   return value * 2 - sum; // double the sum of set and subtract from total
// }
​
// time complexity - O(n^2) - nested for-loop
// space complexity - O(1)
function singleNumber(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];
    numbers.splice(i, 1);
    if (!numbers.includes(currentNum)) return currentNum;
  }
}
​
console.log(singleNumber([1, 1, 3, 2, 2])); // 3
console.log(singleNumber([1, 3, 3, 2, 2])); // 1
console.log(singleNumber([1, 3, 3, 1, 2])); // 2