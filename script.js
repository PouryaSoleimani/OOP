// LITERAL OBJECTS
const circle = {
  radius: 1,
  location: { x: 1, y: 1 },
  draw: function () {
    console.log("DRAW");
  },
};

// OBJECT FACTORY FUNCTION
function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle2 = createCircle(1);
const circle3 = createCircle(3);
circle2.draw();

// OBJECT CONSTRUCTORS
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("DRAW (CONSTRUCTORS)");
  };
}

const newCicrle = new Circle();

newCicrle.draw();

let personObject = { firstName: "mohammad", lastName: "hashemi" };

function Car(name, speed) {
  this.speed = speed;
  let bodyWeight = 500;

  this.maxSpeed = function () {
    console.log("MAXSPEED =>", this.speed);
  };

  let calculateSpeed = function (speed) {
    return Number(speed).toLocaleString();
  };

  this.move = function () {
    let _speed = calculateSpeed(this.speed);
    console.log(`MOVING AT ${_speed}km/h`);
  };

  // SETTER AND GETTER
  Object.defineProperty(this, "bodyWeight", {
    get: function () {
      return bodyWeight;
    },
    set: function (w) {
      if (w <= 0) throw new Error("INVALID NUMBER");
      bodyWeight = w; // dont use 'this' here
    },
  });
}

const car1 = new Car("PORSCHE", 190);
car1.move();
car1.maxSpeed();
car1.model = 2024;
car1["color"] = "black";

// ADDING PROPRETIES
const propertyName = "is4wd";
car1[propertyName] = false;

// DELETING PROPERTIES
delete car1.model;
delete car1[propertyName];

// ITERATION IN OBJECTS
// 1 - FOR_IN LOOF
for (const key in car1) {
  if (Object.prototype.hasOwnProperty.call(car1, key)) {
    const element = car1[key];
    // console.log(typeof element)
  }
}

// 2- Object.keys(object)
const keys = Object.keys(car1);
console.log("KEYS => ", keys);

// 3 - IN
if ("speed" in car1) console.log("SPEED IS IN CAR1");

car1.bodyWeight = 600;
console.log("WEIGHT => ", car1.bodyWeight);

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

// DOM EVENTS
// KEYDOWN / KEYPRESS / KEYUP
// KEYUP => NO DELAY
// KEYPRESS => NO ENTER || ALT || CRTL || ...
// KEYDOWN => ONE STEP BEFORE
// DOCUMENT.CREATEELEMENT()
// EL.APPENDCHILD()
// ONCHANGE
// CHECKBOX => CHECKED
// ONVALUECHANGE => FOR SELECTBOXES
// CELCUIS APP
// WEATHER APP
// FORM SUBMIT
// EVENT.PREVENT DEFAULT()

// ELEMENT NODE
// DOM NAVIGATION
const el = document.querySelector(".query__box");

el.nextElementSibling;
el.previousElementSibling;
el.parentElement;
el.nextSibling;
el.children;
el.childElementCount;
el.firstChild;
el.firstElementChild;
el.lastChild;
el.lastElementChild;
el.hasChildNodes();

// ONSELECT
// CANCELABLE
// ONDBLCLICK

// CONTEXT MENU
const contextMenu = document.querySelector(".contextMenu");
// open context menu
document.body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  contextMenu.style.setProperty("opacity", "0");
  const x = event.clientX - 10;
  const y = event.clientY - 10;
  setTimeout(() => {
    contextMenu.style.setProperty("opacity", "1");
    contextMenu.style.setProperty("left", `${x}px`);
    contextMenu.style.setProperty("top", `${y}px`);
  }, 200);
});

// PREVENT CLOSING
document.body.addEventListener("click", (e) => {
  if (e.target.contains(contextMenu)) {
    return;
  }
  contextMenu.style.setProperty("opacity", "0");
});

document.querySelectorAll(".context__btn").forEach((b) => {
  b.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("e =>", e.target.innerHTML);
  });
});
