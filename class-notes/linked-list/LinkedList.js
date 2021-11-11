class Node {
    constructor(value, next = null) {
      this.value = value; // stores our data
      this.next = next; // pointer to the next node
    }
  }
  ​
  class LinkedList {
    constructor() {
      this.head = null; // references the first Node in the LinkedList
      // this.length = 0;
    }
  ​
    get length() {
      let count = 0; // initialize our counter
      let node = this.head; // refers to the first node in our LL
  ​
      // while our node is not null
      // iterate through the LL
      while (node) {
        count++; // increment our counter
        node = node.next; // reassign our node to be the next node
      }
  ​
      return count;
    }
  ​
    insertAtHead(value) {
      this.head = new Node(value, this.head); // Node(value, next)
      // this.length++;
      return this; // return the current state of the LL
    }
  ​
    // inserts a value at the end by default if no callback is passed
    insert(value, isMatch = (node, index) => index === this.length - 1) {
      // check if our LL is empty
      if (this.head) {
        // find the last node in the LL
        //   let node = this.head; // starting point for iterating through the LL
  ​
        //   // null is falsey so our loop will not proceed
        //   while (node.next) {
        //     node = node.next; // keep iterating through our LL until node.next = null (tail)
        //   }
  ​
        //   node.next = new Node(value); // create a new Node and insert into tail node
        // find the node to insert after
        const previousNode = this.find(isMatch);
  ​
        if (!previousNode) {
          throw new Error("No Match Found");
        }
  ​
        // assign next pointer to the new node
        // make the "next" pointer of the new Node be the old "next" of the previous Node
        const newNode = new Node(value, previousNode.next);
        previousNode.next = newNode;
      } else {
        this.insertAtHead(value); // case when LL is empty
      }
  ​
      return this;
    }
  ​
    // find the node
    find(isMatch) {
      let index = 0; // initialize counter
      let node = this.head; // first node in the LL
  ​
      // iterate through our LL
      while (node) {
        if (isMatch(node, index)) {
          return node;
        }
  ​
        index++; // increment the index #
        node = node.next; // we did not find the node yet, move on to the next node
      }
  ​
      return null;
    }
  }
  ​
  module.exports = LinkedList;