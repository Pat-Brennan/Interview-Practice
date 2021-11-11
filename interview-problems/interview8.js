// Problem: Given an array containing a post-order traversal of a BST,
// turn it back into a BST
​
class Bst {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
​
// post-order
// last node is the root node
// first half of array is left side
// second half of array is the right side
// post-order traversals process left, right, root
​
// BST
// left values smaller, right values larger than the parent node
// can only have two children (left and right)
​
// time complexity: O(nlog(n))
// space complexity: O(n)
​
// function postToBst(arr) {
//   // returns BST given a post-order traversal array
//   // if the array then return null
//   if (!arr.length) {
//     return null;
//   }
​
//   const rootValue = arr[arr.length - 1]; // root node is last item in array
//   const lessThan = arr.filter(
//     (item, index) => index < arr.length - 1 && item <= rootValue
//   );
//   const greaterThan = arr.filter(
//     (item, index) => index < arr.length - 1 && item > rootValue
//   );
​
//   const node = new Bst(rootValue); // initialize a BST with the root node
//   node.left = postToBst(lessThan); // populate the left recursively with the less than array
//   node.right = postToBst(greaterThan); // populate the right recursively with the greater than array
​
//   return node;
// }
​
// function postToBst(arr, tree = new Bst()) {
//     // returns BST given a post-order traversal array
//   if (!arr.length) return tree;
​
//   const last = arr[arr.length - 1];
//   tree = new Bst(last);
​
//   arr = arr.slice(0, arr.length - 1);
​
//   if (tree.key == null) {
//     tree.key = last;
//   }
​
//   else if (last < tree.key) {
//     if (tree.left == null) {
//       tree.left = new Bst(key);
//     } else {
//       return postToBst(arr, tree)
//     }
//   }
​
//   else if (last > tree.key) {
//     if (tree.right == null) {
//       tree.right = new Bst(key);
//     } else {
//       return postToBst(arr, tree)
//     }
//   }
​
// }
​
// without extra space
function postToBst(arr, start = 0, end = arr.length) {
  // keep track of our indices to know where it's greater or less than the root
  if (start === end) {
    return null;
  }
​
  const rootValue = arr[end - 1];
​
  let i = start;
​
  // find the point where we switch from less than to greater than
  while (arr[i] < rootValue) {
    i++;
  }
​
  const node = new Bst(rootValue); // construct the BST
  node.left = postToBst(arr, start, i);
  node.right = postToBst(arr, i, end - 1);
  return node;
}
​
// console.dir with depth set to null stops Node from truncating the output
console.dir(postToBst([8, 12, 10, 16, 25, 20, 15]), { depth: null });
​
// root = 15;
// lessThan = [8, 12, 10];
// greaterThan = [16, 25, 20];
​
// // recursively do this on left side with lessThan array
// node.left = postToBst([8, 12, 10]);
// root = 10; // last item in the lessThan array
// lessThan = [8];
// greaterThan = [12];
​
// // recursively do this on right side with greaterThan array
// node.right = postToBst([16, 25, 20]);
// root = 20; // last item in the lessThan array
// lessThan = [16];
// greaterThan = [25];
​
console.dir(postToBst([]), { depth: null });