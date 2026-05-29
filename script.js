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
