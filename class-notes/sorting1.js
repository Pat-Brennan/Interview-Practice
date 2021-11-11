// const myArr = [
//   { name: "Gabe", age: 200 },
//   { name: "Angel", age: 200 },
//   { name: "Dennis", age: 100 },
//   { name: "Alex", age: 200 },
// ];
​
// console.log(myArr.indexOf(100));
​
// function indexOf(isMatch, elements) {
//   for (let i = 0; i < elements.length; i++) {
//     if (isMatch(elements[i])) {
//       return i;
//     }
//   }
​
//   return -1;
// }
​
// function personName(item) {
//   return item.name === "Dennis";
// }
​
// function personAge(item) {
//   return item.age === 100;
// }
​
// console.log(indexOf((item) => item.name === "Dennis", myArr));
​
// array methods built-in
//.forEach O(n)
// .map O(n)
// .filter O(n)
// .include O(n)
// .find O(n)
// lookups - indexing O(1)
// pop - O(1)
// shift/unshift - O(1)
// push - O(1)
// slice - O(1)
// splice - O(1)
// .sort O(nlog(n))
​
function binaryIndexOf(compare, sortedElements, value) {
  // compare: callback function
  // sortedElements: sorted array
  let lowerIndex = 0; // lower bound
  let upperIndex = sortedElements.length - 1; // upper bound
​
  while (lowerIndex <= upperIndex) {
    const index = Math.floor((upperIndex + lowerIndex) / 2); // middle index
​
    const comparison = compare(sortedElements[index], value); // +, -, 0
​
    // update the bounds
    if (comparison > 0) {
      upperIndex = index - 1;
    }
​
    if (comparison < 0) {
      lowerIndex = index + 1;
    }
​
    if (comparison === 0) {
      return index;
    }
  }
​
  return -1; // finished iterating and did not find the value
}
​
// callback function
function compare(a, b) {
  // positive a is greater than b
  // negative b is greater than a
  // 0 same number
  return a - b;
}
​
const myArray = [1, 2, 50, 70, 99, 100, 120];
​
console.log(binaryIndexOf(compare, myArray, 100));