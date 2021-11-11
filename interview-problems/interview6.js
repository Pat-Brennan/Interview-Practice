// Problem: Given an linked list containing sorted numbers, insert a new
// number in the correct position
​
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
​
class LinkedList {
  constructor(items) {
    this.head = null;
​
    items.forEach((item) => this.push(item));
  }
​
  push(item) {
    if (this.head === null) {
      this.head = new Node(item, null);
      return;
    }
​
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    node.next = new Node(item, null);
  }
​
  show() {
    let node = this.head;
    while (node !== null) {
      process.stdout.write(`${node.value}, `);
      node = node.next;
    }
    process.stdout.write("\n");
  }
​
  //   insertSorted(value) {
  //     let front = this.head.next;
  //     let back = this.head;
​
  //     while (value) {
  //       if (value > back.value && value < front.value) {
  //         break;
  //       }
​
  //       front = front.next;
  //       back = back.next;
  //     }
​
  //     back.next = new Node(value, front);
  //   }
​
  // iterate through our LL and identify node to insert value after
  insertSorted(value) {
    // create a new node with the value
    const newNode = new Node(value);
​
    // check to see if LL is empty or not
    if (this.head === null) {
      // it's an empty LL
      this.head = newNode; // new node becomes the head
      newNode.next = null;
      return this;
    }
​
    // insert at head
    if (value < this.head.value) {
      // The value should be inserted at the start of the list
      // new node becomes the new head and points to the old head
      newNode.next = this.head;
      this.head = newNode;
      return this;
    }
​
    // find the node to insert after
    let node = this.head; // the starting point
​
    // loop until we find the node before insertion point
    while (node.next && node.next.value < value) {
      node = node.next; // keep iterating until condition is met
    }
​
    // update the pointers
    newNode.next = node.next; // [8] -> [9]
    node.next = newNode; // [7] -> [8]
    return this;
  }
}
​
let l = new LinkedList([1, 3, 5, 6, 7, 9]);
l.insertSorted(8);
l.insertSorted(8);
l.insertSorted(8);
l.insertSorted(0);
l.insertSorted(10);
l.insertSorted(2);
l.insertSorted(-2);
l.insertSorted(-3);
​
l.show(); // 1, 3, 5, 6, 7, 8, 9