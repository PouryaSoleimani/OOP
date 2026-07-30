const goalsArray = ['motor__jt200', 'iphone__15pro', 'apple__watch', 'airpod__2']

//^ FOR LOOP
// for (let i = 0; i < goalsArray.length; i++) {
//   const element = goalsArray[i];
//   console.log('GOAL =>', String(element).toUpperCase())
// }

//^ WHILE LOOP
// let i = 0
// while (i < goalsArray.length) {
//   console.log(' GOAL =>', goalsArray[i].toUpperCase())
//   i++
// }

//^ REDUCE
// const result = goalsArray.reduce((a, b) => {
//   return a.toUpperCase() + " / " + b.toUpperCase()
// }, "")

// console.log(result)

//^ FOREACH
// goalsArray.forEach((item) => {
//   console.log('ITEM =>', item.toUpperCase())
// })

//^ INCLUDES
// const isIncludes = goalsArray.includes('motor__jt200')
// console.log('is includes ?', isIncludes)

//^ SPLICE
// goalsArray.splice(0, 0, 'MOTOR__AEROX')
// console.log(goalsArray)

//^ MAP
// const newGoals = goalsArray.map((item) => item.toUpperCase())
// console.log(newGoals)

//^ SPLIT
// const myDream = 'MOTOR__JT200__BLACK'
// const splited = myDream.split("") // RETURNS AN ARRAY FORM A STRING

//^ CAPTCHA
const text = "123456790abcdefghijklmnopqrstuvwxyz";

let _captcha = "";
let randomCharIndex;
for (let i = 0; i < 7; i++) {
  randomCharIndex = Math.floor(Math.random() * text.length);
  _captcha += text[randomCharIndex];
}

console.log({ _captcha, randomCharIndex })