// Object Oriented Programming (OOP)
// Python, Java, C++
​
// Javascript - prototype based language
​
// Inheritance - new classes can be created based on parent classes
// Encapsulation - all data, functions, properties, etc neatly stored inside
// Polymorphism - methods and functions inherited can be changed or overwritten
// Abstraction - hiding information - private variables (internal use only)
​
// DRY - Don't Repeat Yourself
​
// let dog1 = {
//   name: "Mickey",
//   color: "brown",
//   species: "terrier",
//   bark: function () {
//     return `${this.name} says woof!`;
//   },
// };
​
// constructor function
// function Dog(name, color, species) {
//   this.name = name;
//   this.color = color;
//   this.species = species;
//   this.bark = () => {
//     return `${this.name} says woof!`;
//   };
// }
​
// let dog1 = new Dog("Mickey", "brown", "terrier");
// let dog2 = new Dog("Lucky", "white", "pomeranian");
// console.log(dog1.bark());
// console.log(dog2.name);
// console.log(dog2.color);
​
// class Dog {
//   constructor(name, color, species, age) {
//     this.name = name;
//     this.color = color;
//     this.species = species;
//     this.age = age;
//   }
​
//   bark() {
//     return `${this.name} says woof!`;
//   }
​
//   // getters and setters
//   get getHealth() {
//     return this.species;
//   }
​
// //   set setAge(age) {
// //       this.age = age
// //   }
// }
// let dog1 = new Dog("Mickey", "brown", "terrier");
// let dog2 = new Dog("Lucky", "white", "pomeranian");
// console.log(dog1.bark());
// console.log(dog2.name);
// console.log(dog2.species);
​
class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
​
  hunt() {
    return `${this.name} went hunting!`;
  }
​
  birthday() {
    this.age++;
    return `${this.name} is now ${this.age} years old`;
  }
​
  isAlive() {
    if (this.age > 12) {
      return `${this.name} is dead!`;
    }
    return `${this.name} is alive!`;
  }
}
​
// let someAnimal = new Animals("Birdy", 12);
​
// console.log(someAnimal.birthday());
// console.log(someAnimal.age);
// console.log(someAnimal.isAlive());
​
// inheritance
// class Cat extends Animals {
//   constructor(name, age, species, color) {
//     super(name, age); // inherit the properties from the parent class
//     this.species = species;
//     this.color = color;
//   }
​
//   // polymorphism
//   birthday() {
//     this.age += 2;
//   }
​
//   meow() {
//     return `${this.name} says meow!`;
//   }
// }
​
// let myCat = new Cat("Luna", 11, "domestic shorthair", "brown");
​
// console.log(myCat.meow());
​
class Character {
  constructor(name, type, age, strength, hitpoints) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
  }
​
  printStats() {
    return `${this.name} ${this.strength} ${this.hitpoints}`;
  }
​
  attack(player) {
    player.hitpoints -= this.strength;
  }
​
  isAlive() {
    if (this.hitpoints <= 0) {
      return `${this.name} is dead!`;
    }
​
    return `${this.name} is alive!`;
  }
}
​
let playerOne = new Character("Ryu", "Warrior", 25, 10, 100);
let playerTwo = new Character("Ken", "Mage", 20, 5, 50);
​
console.log(playerTwo.printStats());
​
playerOne.attack(playerTwo);
playerOne.attack(playerTwo);
playerOne.attack(playerTwo);
playerOne.attack(playerTwo);
playerOne.attack(playerTwo);
​
console.log(playerTwo.isAlive());
console.log(playerTwo.printStats());
​
console.log(playerOne.printStats());