
const goalsArray = ['motor__jt200', 'iphone__15pro', 'apple__watch', 'airpod__2']
const mySelf = { id: 72, name: 'Pourya Soleimani', age: 32, job: 'FullStack Developer' }
const products = [
  { id: 1, title: 'product__1', price: 300_000 },
  { id: 2, title: 'product__2', price: 200_000 },
  { id: 3, title: 'product__3', price: 400_000 },
  { id: 4, title: 'product__4', price: 500_000 },
  { id: 5, title: 'product__5', price: 100_000 },
]

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

async function fetchData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

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

// ARRAY DESTRUCTURING ====================================================================
// const [a, b] = goalsArray
// console.log({ a, b })

// OBJECT DESTRUCTURING ====================================================================
// const { age, job } = mySelf
// console.log({ age, job })

// BIND / CALL / APPLY =====================================================================
// function caller() {
//   console.log(this.id, this.name, this.age)
// }
// const result = caller.bind(mySelf)
// result()
// BIND RETURNS A FUNCTION & CALL/APPLY RETURNS A VALUE


// GITHUB DARK DEFAULT FOR LIFE

//^ SORT
// const shuffled = products.sort(() => Math.random() - 0.5)
// console.log(shuffled)

//^ COOKIES
// const addBtn = document.querySelector('.add__cookie')
// const updateBtn = document.querySelector('.update__cookie')
// const deleteBtn = document.querySelector('.delete__cookie')

// addBtn.addEventListener('click', () => {
//   const now = new Date()
//   now.setTime(now.getTime() + 7 * 24 * 60 * 60 * 1000) // 1 WEEK EXPIRES TIME
//   document.cookie = `username=PouryaSoleimani;path:/;expires=${now}`
//   document.cookie = `_token=29103kojafncaklsjjd12984rukajscnasklj19872;path:/;expires=${now}`
// })

// updateBtn.addEventListener('click', () => {
//   const now = new Date()
//   now.setTime(now.getTime() + 2 * 24 * 60 * 60 * 1000)
//   document.cookie = `username=PouryaSoleimani2;path:/;expires=${now}`
// })

// deleteBtn.addEventListener('click', () => {
//   const now = new Date()
//   now.setTime(now.getTime() - 2 * 24 * 60 * 60 * 1000)
//   document.cookie = `username=PouryaSoleimani2;path:/;expires=${now}`
// })

// const tokenValueTag = document.querySelector('.token__value')
// const token = document.cookie.split(';').find(i => i.includes('_token'))
// const tokenValue = token?.slice(token.indexOf("=") + 1)
// tokenValueTag.innerHTML = tokenValue


// let rememberMe = false
// const checkBox = document.querySelector('#check__box')
// const loginBtn = document.querySelector('.login__btn')

// checkBox.addEventListener('change', () => {
//   rememberMe = !rememberMe
//   console.log(rememberMe)
// })

// loginBtn.addEventListener('click', () => {
//   if (rememberMe) {
//     const now = new Date()
//     now.setDate(now.getTime() + 3 * 24 * 60 * 60 * 1000)
//     document.cookie = `loginToken=__token;path=/;expires=${now}`
//     console.log('🟩 REMEMBER ME LOGIN')
//   } else {
//     console.log('🟧 NORMAL LOGIN')
//   }
// })


//^ SET
// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// const set = new Set(numbers)
// set.add(10)
// set.add(11)
// set.delete(11)
// const sortedSet = [...set].sort((a, b) => a - b)
// console.log('set =>', { sortedSet, size: set.size, has: set.has(10), })

//^ MAP
// const myObject = { id: 1, title: 'object__1', isAvailable: true }
// const mapped = new Map(Object.entries(myObject))
// const objected = Object.fromEntries(mapped)
// console.log({mapped , objected})


//^ WEAK_MAP & WEAK_SET
// WEAK SET ONLY ACCEPT OBJECTS
// window.var = var

//^ PROXY
// const user = { id: 1, username: "pourya_soleimani", age: 32 }

// const proxyUser = new Proxy(user, {
//   get: function (target, prop) {
//     console.log(target, prop)
//     return { target: target[prop] }
//   },

//   set: function (target, prop, value) {
//     if (prop == 'age' && value < 0) {
//       value = 18
//     }
//     target[property] = value
//   }
// })

// console.log(proxyUser.id)


//^ SYMBOL
// SYMBOL => UNIQUE VALUE
// const symbol = new Symbol('optional description')
// console.log(symbol)

// let userIdSymbol = new Symbol('user_id symbol')

//^ NULLISH OPERATOR -> ??

// document.addEventListener('DOMContentLoaded', () => {
//   document.cookie =
// "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";
// })

//^ PASSWORD SECURITY CHECK ==================================================================================================================================
const myRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/
const isValid = myRegex.test('Pourya!!!')
console.log(isValid)

//? PASSWORD CHECK
const patterns = [
  { id: 1, regex: /^.*[a-z]/, message: "Lower Case" },
  { id: 2, regex: /^.*[A-Z]/, message: "Upper Case" },
  { id: 3, regex: /^.{8,}/, message: "length Case" },
  { id: 4, regex: /^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/, message: "Special Characters" },
  { id: 5, regex: /^.*[0-9]/, message: "Number" },
]

const inputvalue = document.querySelector('.password__input')
const messagesContainer = document.querySelector('.pass__messages')
const eye = document.querySelector('.password__eye')


let userPassword = ''
inputvalue.addEventListener('keyup', (e) => {
  const val = e.target.value
  userPassword = val
})

let html = []
inputvalue.addEventListener('blur', () => {
  messagesContainer.innerHTML = ``
  patterns.forEach((pattern) => {
    const { regex, message } = pattern
    let result = regex.test(userPassword)
    console.log({ userPassword, result, message })
    html.push(`
     <p class="${result ? 'green_message' : 'red_message'}">${message}</p>
      `)
  })

  messagesContainer.innerHTML = html.join('')
  console.log(document.querySelectorAll('.red'))

  if (!document.querySelectorAll('.red_message').length) {
    inputvalue.style.setProperty('background-color', '#51f20591')
  }
})

let type = 'password'
eye.addEventListener('click', () => {
  inputvalue.setAttribute('type', inputvalue.getAttribute('type') == 'password' ? 'text' : 'password')
})

// INDEXED DB ==================================================================================================================================

//^ VIDEO & WEBCAM ==================================================================================================================================
// const video = document.querySelector('video')
// const devices = await navigator.mediaDevices.enumerateDevices().then(data => data)
// const userMedia = await navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(res => res)
// video.srcObject = userMedia

// console.log({ devices, userMedia })

// video.addEventListener('loadedmetadata', () => {
//   video.play()
// })

// function stopCamera() {
//   const stream = video.srcObject;
//   const tracks = stream.getTracks()
//   tracks.forEach((track) => track.stop())
//   video.srcObject = null
// }


//^ PROMISE.ALL ==================================================================================================================================

async function getUsers() {
  const res = await fetch('https://fakestoreapi.com/users')
  const data = await res.json()
  return data
}

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return data
}

const [users, courses] = await Promise.all([getProducts(), getUsers()]);

console.log('data =>', { users, courses })

//^ PROMISE.ALLSETTLED ==================================================================================================================================

async function getUsers2() {
  const res = await fetch('https://fakestoreapi.com/users')
  const data = await res.json()
  return data
}

async function getProducts2() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return data
}

const [users2, courses2] = await Promise.allSettled([getProducts2(), getUsers2()]);

console.log('data =>', { users2, courses2 })
//OUTPUT => { users : {status : ... , value : ...}, products : {status : ... , value : ...}}


//^ PROMISE.RACE  ==================================================================================================================================
const [users3, courses3] = await Promise.race([getProducts2(), getUsers2()]); // RETURNS ONLY THE FIRST RESOLVED PROMISE

//^ GROUPBY  ==================================================================================================================================
const productsArray = [
  { id: 1, title: 'product__1', price: 300_000, qty: 1 },
  { id: 2, title: 'product__2', price: 200_000, qty: 2 },
  { id: 3, title: 'product__3', price: 400_000, qty: 3 },
  { id: 4, title: 'product__4', price: 600_000, qty: 3 },
]

const prices = Object.groupBy(productsArray, (item) => {
  return item.qty
})

console.log({ prices })

//^ ARRAY.WITH  ==================================================================================================================================
const numbers = [1, 2, 3, 4]
const numbersWithHundred = numbers.with(0, 100) // replaces the 0 index with 100
console.log('new numbers =>', numbersWithHundred)

//^ IP TRACKER API ==================================================================================================================================
const BASE_URL = "https://api.ipify.org/?format=json"
const res = await fetch(BASE_URL)
const data = await res.json()
const ip = data.ip // accessing the ip 
console.log('ip =>', ip)

const geoRes = await fetch(`http://ip-api.com/json/${ip}`)
const geoData = await geoRes.json() // accessing ip geo datas

console.log(geoData)

//! FORBIDDEN => MUST PAY
// const ipAddress = "{IP-ADDRESS}";
// const url = `https://free.freeipapi.com/api/json/${ipAddress}`;
// const newRes = await fetch(url)
// const newDatas = await newRes.json()
// console.log({ newDatas })

// DEEP COPY & SHALLOW COPY
// JSON.PARSE(JSON.STRINGIFY)

//^ EYEDROPPER
const playBtn = document.querySelector('.play__btn')
const eyeDropper = new EyeDropper()
playBtn.addEventListener('click', async () => {
  const result = await eyeDropper.open()
  console.log(result)
})