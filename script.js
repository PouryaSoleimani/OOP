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

function Car(name, speed) {
  this.speed = speed
  this.maxSpeed = function () {
    console.log('MAXSPEED =>', this.speed)
  }
  this.move = function () {
    console.log(`MOVING AT ${speed}km/h`)
  }
}

const car1 = new Car("PORSCHE", 120)
car1.move()
car1.maxSpeed()
car1.model = 2024
console.log(car1.model)
car1['color'] = "black"

// ADDING PROPRETIES
const propertyName = 'is4wd'
car1[propertyName] = false

// DELETING PROPERTIES
delete car1.model
delete pride[propertyName]

// ---------------------------------------------------------------------------------------------------------
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

