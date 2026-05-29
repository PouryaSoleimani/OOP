'use strict'
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " SOUNDS";
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  bark() {
    return this.name + " BARKS";
  }
}

const myDog = new Dog("JACKIE");

console.log(myDog.speak());
console.log(myDog.bark());

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  static validateUser(username, email) {
    if (username.trim() == "" || username.length < 4 || email.trim() == "" || !email.includes("@")) {
      console.log("%c 🛑 USER INFOS ARE NOT VALID ...", "color :rgb(248, 120, 120)",);
      return false;
    }
    console.log("%c ✅ USER INFOS ARE VALID ...", "color :rgb(120, 248, 152)");
    return true;
  }
}

const username = "pourya";
const email = "pourya@gmail.com";

const isValid = User.validateUser(username, email);

console.log("is Valid => ", isValid);

if (isValid) {
  const newUser = new User(username, email);
  console.log(" ✅ NEW USER CREATED =>", newUser);
}

// ---------------------------------------------------------------------------------------------------------------------------------------------
class Car {
  constructor() {
    this.drive = function () { console.log(this); };
  }
}
const pride = new Car()

pride.drive()

const drive = pride.drive
drive()
