// Problem: Sort a stack containing a series of numbers. The only additional
// storage you can use is a second stack.
​
class Stack {
  constructor(arr = []) {
    this.arr = arr;
  }
​
  isEmpty() {
    return this.arr.length === 0;
  }
​
  push(value) {
    this.arr.push(value);
  }
​
  pop() {
    return this.arr.pop();
  }
​
  peek() {
    return this.arr[this.arr.length - 1];
  }
}
​
function sortStack(stackA) {
  // create a new Stack
  const stackB = new Stack();
  while (!stackA.isEmpty()) {
    const temp = stackA.pop(); // grab the top value of Stack A
​
    while (temp < stackB.peek()) {
      // push top of stack B back to stack A because it is bigger than the top of stackA
      stackA.push(stackB.pop());
    }
​
    // push the temp into stack B when condition is met
    stackB.push(temp);
  }
​
  // return the sorted Stack
  return stackB;
}
​
const stackA = new Stack([4, 2, 3, 7, 9]);
console.log(sortStack(stackA)); // 2 3 4 7 9