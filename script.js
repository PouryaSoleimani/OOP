const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function () {
    console.log('DRAW')
  }
}
// OBJECT FACTORY FUNCTION 
function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log('draw');
    }
  }
}

const circle2 = createCircle(1)
const circle3 = createCircle(3)
circle2.draw()

// OBJECT CONSTRUCTORS
function Circle(radius) {
  this.radius = radius
  this.draw = function () {
    console.log('DRAW (CONSTRUCTORS)')
  }
}

const newCicrle = new Circle()

newCicrle.draw()

let personObject = { firstName: 'mohammad', lastName: 'hashemi' }

function Car(speed) {
  this.speed = speed
  this.move = function () {
    console.log(`MOVING AT ${speed}km/h`)
  }
}

const car1 = new Car(120)
car1.move()

// $$___PRIMITIVE TYPES
// NUMBER
// STRING
// BOOLEAN
// UNDEFINED
// NULL
// SYMBOL1

// $$___REFERENCE TYPES
// ARRAYS
// OBJECTS
// FUNCTIONS

