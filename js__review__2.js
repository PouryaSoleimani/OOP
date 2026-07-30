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
// const text = "123456790abcdefghijklmnopqrstuvwxyz";

// let _captcha = "";
// let randomCharIndex;
// for (let i = 0; i < 7; i++) {
//   randomCharIndex = Math.floor(Math.random() * text.length);
//   _captcha += text[randomCharIndex];
// }

// console.log({ _captcha, randomCharIndex })

//^ STRING METHODS
// TRIM /

//^ ASYNC / AWAIT
// const res = await fetch('https://fakestoreapi.com/users')
// const data = await res.json()
// console.log('DATA =>', data)

// async function fetchData(url) {
//   const response = await fetch(url)
//   const data = await response.json()
//   return data
// }

// const result = await fetchData('https://fakestoreapi.com/users')
// console.log('result', result)

//^ REDUCE
// const result = goalsArray.reduce((a, b) => {
//   return a.toUpperCase() + `/ ${b.toUpperCase()}`
// }, "")
// console.log('MY GOALS', result.slice(1))
// ====================================================================
// const products = [
//   { id: 1, title: 'product__1', price: 300_000 },
//   { id: 2, title: 'product__2', price: 200_000 },
//   { id: 3, title: 'product__3', price: 400_000 },
//   { id: 4, title: 'product__4', price: 600_000 },
// ]
// ====================================================================
// const pricesSum = products.reduce((a, b) => {
//   return a + b.price
// }, 0)
// console.log(pricesSum.toLocaleString())
// ====================================================================
// const names = [['mamad', 'reza'], ['mohsen', 'majid']]
// const reducedNames = names.reduce((a, b) => {
//   return [...a, ...b]
// }, [])
// console.log(reducedNames)
// reducedNames.map(i => console.log(i.toUpperCase()))
// ====================================================================


