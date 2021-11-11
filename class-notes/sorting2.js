// function bubbleSort(arr) {
//   let swaps;
//   do {
//     swaps = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         // do a swap if the next item in arr is smaller than current item
//         swap(arr, i, i + 1);
//         swaps++;
//       }
//     }
//   } while (swaps > 0);
​
//   return arr;
// }
​
// function swap(arr, i, j) {
//   const temp = arr[i]; // store current item in a temp var
//   arr[i] = arr[j];
//   arr[j] = temp;
​
//   //   [arr[i], arr[j]] = [arr[j], arr[i]];
// }
​
// console.log(bubbleSort([88, 99, 33, 22, 100]));
​
// merge sort
// function mergeSort(arr, compare) {
//   // base case
//   if (arr.length <= 1) {
//     return arr;
//   }
​
//   // recursive case
//   // cut our array in half until we reach the base case
//   const middle = Math.floor(arr.length / 2); // index of the middle of array
​
//   const leftArr = arr.slice(0, middle); // left side array
//   const rightArr = arr.slice(middle); // right side array
​
//   const leftArrSorted = mergeSort(leftArr, compare); // break down the left side even more
//   const rightArrSorted = mergeSort(rightArr, compare); // break down the right side even more
​
//   // "merge" our returned "leftArrSorted" and "rightArrSorted" in a sorted way
//   return merge(leftArrSorted, rightArrSorted, compare);
// }
​
// function merge(left, right, compare) {
//   const sorted = []; // new list
//   let leftIndex = 0; // keep track of left array index
//   let rightIndex = 0; // keep track of right array index
​
//   // compare the top values of the left and right arrays
//   // push the lower number to the new sorted array
//   // keep running the comparisons of the top items until one list on either side is empty
//   while (leftIndex < left.length && rightIndex < right.length) {
//     const comparison = compare(left[leftIndex], right[rightIndex]); // +, -, 0
​
//     if (comparison < 0) {
//       sorted.push(left[leftIndex]); // push the smaller number between left vs right
//       leftIndex++; // increment our left index number by 1
//     } else {
//       sorted.push(right[rightIndex]); // push the smaller number between left vs right
//       rightIndex++;
//     }
//   }
​
//   // return the sorted array and add on the rest of the array that did not get added
//   return sorted.concat(
//     leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex)
//   );
// }
​
// // [1, 2, 3, 4].concat([6, 7, 8, 9]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
​
// function compare(left, right) {
//   // -, 0 , +
//   // negative: right is bigger than left
//   // positive: left is bigger than right
//   // 0
//   return left - right;
// }
// console.log(mergeSort([88, 99, 22, 33, 100], compare));
​
function quickSort(
  compare,
  elements = [],
  lowerIndex = 0,
  upperIndex = elements.length - 1
) {
  if (lowerIndex < upperIndex) {
    const index = partition(compare, elements, lowerIndex, upperIndex); // index of number that was the pivot
    quickSort(compare, elements, lowerIndex, index - 1); // perform quicksort recursively on the left side
    quickSort(compare, elements, index + 1, upperIndex); // perform quicksort recursively on the right side
  }
​
  return elements; // returns the sorted array of elements
}
​
function partition(compare, elements, lowerIndex, upperIndex) {
  const pivotValue = elements[upperIndex]; // pivot value is last item in our elements array
  let partitionIndex = lowerIndex; // "i"
​
  // iterate through our array using index "j"
  for (let index = lowerIndex; index < upperIndex; index++) {
    const comparison = compare(pivotValue, elements[index]); // +, -, 0
​
    // perform swap when condition is met
    if (comparison > 0) {
      if (partitionIndex !== index) {
        // perform the swap if the partition index "i" is not the same as "j" index
        [elements[index], elements[partitionIndex]] = [
          elements[partitionIndex],
          elements[index],
        ];
      }
      partitionIndex++; // increment our "i"
    }
  }
​
  // final swap which switch "i" with the pivot
  [elements[partitionIndex], elements[upperIndex]] = [
    elements[upperIndex],
    elements[partitionIndex],
  ];
​
  return partitionIndex; // index where the pivot was moved to
}
​
function compare(left, right) {
  // -, 0 , +
  // negative: right is bigger than left
  // positive: left is bigger than right
  // 0
  return left - right;
}
​
console.log(quickSort(compare, [99, 88, 22, 33, 100]));
