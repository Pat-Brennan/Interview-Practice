// const myArr = [5, 12, 6, 8, 1];
// myArr.splice(1, 0, 32); // used as insertion as well as deletion
// console.log(myArr);
​
// const myArr = new Array(10); // empty array with length of 10
// myArr[0] = 1;
// myArr[5] = 20;
// myArr.push(12);
​
// console.log(myArr.length);
​
// Sets
// special kind of array - only unique items are stored
​
// const myArr = ["Alice", "Carol"];
​
// const mySet = new Set(myArr);
​
// mySet.add("Alice"); // does not add if Set already contains the item
// mySet.add("Bob");
​
// console.log(mySet);
​
// console.log(mySet.has("Alice"));
​
// mySet.delete("Alice");
// console.log(mySet);
​
// add, delete, has - O(1)
// forEach - O(n)
​
// use size to determine the "length" of the set
// console.log(mySet.size);
​
// Maps
const myMap = new Map();
​
myMap.set("Alice", { age: 21, region: "Europe" });
myMap.set("Bob", { age: 25, region: "USA" });
​
// console.log(myMap.get("Alice"));
​
const days = [
  [0, "Sunday"],
  [1, "Monday"],
  [2, "Tuesday"],
  [3, "Wednesday"],
  [4, "Thursday"],
  [5, "Friday"],
  [6, "Saturday"],
];
​
const dayMap = new Map(days);
​
// console.log(dayMap);
​
// console.log(dayMap.get(0));
​
const dayArr = [...dayMap];
​
// console.log(dayArr);
​
// set, get - O(1)
​
// const myObj = { name: "Dennis", age: 100 };
// const myObjArr = Object.entries(myObj); // .keys, .values, .entries
// console.log(myObjArr);