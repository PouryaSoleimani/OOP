class Animal {

  constructor(name) {
    this.name = name
  }

  speak() {
    return this.name + ' SOUNDS'
  }

}

class Dog extends Animal {

  constructor(name) {
    super(name);
  }

  bark() {
    return this.name + ' BARKS'
  }

}

const myDog = new Dog('JACKIE')
console.log(myDog.speak())
console.log(myDog.bark())

