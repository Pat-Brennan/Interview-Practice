const LinkedList = require("./LinkedList");
​
const myLinkedList = new LinkedList();
​
myLinkedList.insertAtHead("dennis");
myLinkedList.insertAtHead("1");
myLinkedList.insertAtHead(2);
myLinkedList.insertAtHead("hello");
​
// console.log(myLinkedList.find((node, index) => node.value === "hello"));
myLinkedList.insert("world");
console.log(myLinkedList.find((node) => node.value === "world"));
​
// .forEach, .map, .filter, .sort