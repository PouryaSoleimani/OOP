// 'use strict'
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
class Car2 {
  constructor() {
    this.drive = function () { console.log(this); };
  }
}
const pride = new Car2()

pride.drive()

const drive = pride.drive
drive()

// ---------------------------------------------------------------------------------------------------------------------------------------------

class Wallet {
  #money;

  constructor(money) {
    this.#money = money
  }

  getBalance() {
    return this.#money
  }

  add(amount) {
    if (amount <= 0) {
      throw new Error('Invalid amout`')
    }

    this.#money += amount
  }

  spend(amount) {
    if (amount >= this.#money) {
      throw new Error('Insufficient Balance')
    }

    this.#money -= amount
  }

}

const myWallet = new Wallet(0)

myWallet.add(900)
const balance = myWallet.getBalance()

console.log('BALANCE =>', balance)

// ---------------------------------------------------------------------------------------------------------------------------------------------

class BankAccount {
  #balance = 2000

  get Balance() {
    return `AMOUNT: $${this.#balance.toLocaleString()}`
  }

  set Balance(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Amount is Not valid')
    }
    this.#balance += amount
    console.log('BALANCE CHANGED')
  }
}

const myBankAccount = new BankAccount()

myBankAccount.Balance = 1000
const b = myBankAccount.Balance
console.log(b)