//^ FOR
// let i = 0;
// for (i; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//^ WHILE
// if (firstNumber > secondNumber) {
//   while (secondNumber <= firstNumber) {
//     console.log(secondNumber);
//     secondNumber += 2;
//   }
// } else {
//   while (firstNumber <= secondNumber) {
//     console.log(firstNumber);
//     firstNumber += 2;
//   }
// }

//^ REDUCE
// console.log(
//   "sum",
//   sum.reduce((a, b) => a + b),
// );

//^ FOREACH
// const users = ["amin", "mamad", "reza"];

// users.forEach((user, i) => {
//   console.log(`USER ${i + 1}. ${user}`);
// });

//^ INCLUDES
// console.log(users.includes("amin"));

//^ SPLICE
// users.splice(1, 0, "majid");

//^ MAP
// const results = [12, 15, 18, 19, 29];

// const res = results.map((r) => {
//   return r * 2;
// });

//^ SPLIT
// const usrname = "nima";
// const splitted = usrname.split("");
// const reversed = usrname.split("").reverse();
// console.log({ splitted, reversed });


//^ CAPTCHA
// const text = "123456790abcdefghijklmnopqrstuvwxyz";
// let char = Math.floor(Math.random() * text.length);
// let captcha = `
// ${text[Math.floor(Math.random() * text.length)]} 
// ${text[Math.floor(Math.random() * text.length)]} 
// ${text[Math.floor(Math.random() * text.length)]} 
// ${text[Math.floor(Math.random() * text.length)]} 
// ${text[Math.floor(Math.random() * text.length)]} 
// ${text[Math.floor(Math.random() * text.length)]} 
// ${text[Math.floor(Math.random() * text.length)]} 
// ${text[Math.floor(Math.random() * text.length)]}`
//   .replaceAll(" ", "")
//   .replaceAll("\n", "");
// console.log("CAPTCHA =>", captcha);

// let _captcha = "";
// let randomCharIndex;

// for (let i = 0; i < 7; i++) {
//   randomCharIndex = Math.floor(Math.random() * text.length);
//   _captcha += text[randomCharIndex];
// }
// //! NO NEED FOR REPLACE ALLS
// console.log("CAP =>", _captcha);

//^ ARRAY METHODS
// const products = [
//   { id: 1, title: "LAPTOP", shortlink: "" },
//   { id: 2, title: "MOBILE", shortlink: "" },
//   { id: 3, title: "HEADPHONE", shortlink: "" },
//   { id: 4, title: "WATCH", shortlink: "" },
// ];

// const finded = products.find((i) => i.shortlink === "assd012");

// const shortLinkAddedArray = products.map((p) => {
//   let captcha = `
//         ${text[Math.floor(Math.random() * text.length)]} 
//         ${text[Math.floor(Math.random() * text.length)]} 
//         ${text[Math.floor(Math.random() * text.length)]} 
//         ${text[Math.floor(Math.random() * text.length)]} 
//         ${text[Math.floor(Math.random() * text.length)]} 
//         ${text[Math.floor(Math.random() * text.length)]} 
//         ${text[Math.floor(Math.random() * text.length)]}
//         ${text[Math.floor(Math.random() * text.length)]}`
//     .replaceAll(" ", "")
//     .replaceAll("\n", "");
//   return { ...p, shortlink: captcha };
// });


//^ STRING METHODS
// function hasSSL(url) {
//   if (String(url).trim().includes("https")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const _res = hasSSL("https://google.com");

//^ TIMER FUNCTION
// let minute = 1;
// let second = 10;

// function showTime(text) {
//   if (String(text).length == 1) {
//     return `0${text}`;
//   } else {
//     return text;
//   }
// }

// let timer = setInterval(() => {
//   if (second == 0 && minute == 0) {
//     clearInterval(timer)
//     console.log('TIME UP !!')
//     return;
//   }
//   console.log(`TImer => ${showTime(minute)}:${showTime(second)}`)
//   second--
//   if (second < 0 && minute !== 0) {
//     minute--
//     second = 59
//   }
// }, 1000);

//^ CUSTOM SCROLL
const customScrollBar = document.querySelector('.custom__scroll')
const height = window.innerHeight
const scrollTop = document.documentElement.scrollTop


window.addEventListener('scroll', (e) => {
  let s = e.target.scrollingElement.scrollTop
  let percent = ((s / height) * 100).toFixed(0) * 0.8
  customScrollBar.style.setProperty('width', `${percent}%`)
})


const pushBtn = document.querySelector('.push__btn')

pushBtn.addEventListener('click', () => {
  location.replace('https://google.com')
})

//^ URL SEARCH PARAMS
const search = new URLSearchParams(location.search).get('i')
console.log('search ->', search)

//^ MOUSE FOLLOWER
const follower = document.querySelector('.mouse__follower')
document.body.addEventListener('mousemove', (e) => {
  const x = e.clientX - (follower.clientWidth / 2)
  const y = e.clientY - (follower.clientHeight / 2.5)
  setTimeout(() => {
    follower.style.setProperty('left', `${x}px`)
    follower.style.setProperty('top', `${y}px`)
  }, 150);

})

//^ WINDOW.NAVIGATOR
console.log({ nav: navigator.userAgentData.platform.toUpperCase() })
const isChrome = window.navigator.userAgent.includes('Chrome')
const browserDetect = isChrome ? 'CHROME' : 'FIREFOX'
console.log(`YOU ARE USING ${browserDetect}`)

//^ CHECK INTERNET CONNECTION STATUS + ONLINE MODE / OFFLINE MODE
const offlineDiv = document.querySelector('.offline__mode')
window.addEventListener('online', () => {
  console.log('YOUR ARE ONLINE')
})
window.addEventListener('offline', () => {
  console.log('offline')
  document.body.classList.add('offline')
})

//^ JS HISTORY
// 1995 => BRENDEN EICH => MOCHA => JAVASCRIPT => ECMASCRIPT => ES6 => ...



//^ CALLBACKS =====================================================================================================================
function callbackHandler() {
  console.log("CALLBACK")
}

function parent(text, callback) {
  setTimeout(() => {
    console.log('TEXT =>', text)
    callback()
  }, 2000);
}

parent('IPHONE 17PROMAX SILVER', callbackHandler)

// EXAMPLE CALLBACK FUNCTIONS =====================================================================================================================
const books = [
  { id: 1, title: 'book1', price: 200_000 },
  { id: 2, title: 'book2', price: 150_000 },
  { id: 3, title: 'book3', price: 250_000 },
]

function booksLogger() {
  console.log(
    `%c UPDATED LOG =>`,
    'color:black ; background-color:white; padding:4px 8px; border-radius:8px;font-weight:800;',
    books)
}

function addBook(cb) {
  const newBook = {
    id: books.length + 1,
    title: 'book4',
    price: 300_000
  }
  setTimeout(() => {
    books.push(newBook)
    cb()
  }, 4000);
}

addBook(booksLogger)

// EXAMPLE 2 =====================================================================================================================
const cars = [
  { id: 1, title: 'car1', price: 500_000_000 },
  { id: 2, title: 'car2', price: 350_000_000 },
  { id: 3, title: 'car3', price: 250_000_000 }
]

const newCar = { id: 4, title: 'car4', price: 450_000_000 }

function carLogger() {
  console.log('cars =>', cars)
}

function addCar(newCar, callback) {
  setTimeout(() => {
    cars.push(newCar)
    callback()
  }, 3000);
}

addCar(newCar, carLogger)

const filteredCars = cars.filter(car => car.price <= 350_000_000)
console.log('filtered Cars =>', filteredCars)

//^ PROMISES =======================================================================================================
const products = [
  { id: 1, title: 'product 1', price: 2_000_000 },
  { id: 2, title: 'product 2', price: 3_000_000 },
  { id: 3, title: 'product 3', price: 4_000_000 },
]

const newProduct = { id: 4, title: 'product 4', price: 5_000_000 }

const productAdder = new Promise((resolve, reject) => {
  if (2 == 2) {
    setTimeout(() => {
      console.log('%c PROMISE RESOLVED', 'color:limegreen')
      resolve()
    }, 3000);
  } else {
    reject('PROMISE REJECTED')
  }
})

productAdder
  .then(res => res)
  .catch(err => console.log("%c ERROR =>", 'background-color: red;padding: 4px;', err))
  .finally(console.log('FINALLY'))

const productsWrapper = document.querySelector('.products')

const productsFetcher = new Promise((resolve, reject) => {
  const res = fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => data);
  if (res) {
    resolve(res)
  } else {
    reject('NO RESPONSE')
  }
})

// INJECT FETCHED PRODUCTS
productsFetcher
  .then(response => {
    console.log('fetch response =>', response)
    const html = []
    response.forEach(element => {
      const _html = ` <p class="product__item">${element.id}. ${element.title.slice(0, 20)}</p> `
      html.push(_html)
    });
    productsWrapper.innerHTML = html.join('')
  })
  .catch(err => console.error('promise error => ', err.message))



// PROMISE EXAMPLE 
let isLoggedIn = true
const myPromise = new Promise((resolve, reject) => {
  let data = 'pourya'
  if (isLoggedIn) {
    resolve(data)
  } else {
    reject('PROMISE REJECTED')
  }
})

myPromise
  .then(res => {
    console.log('🟩 PROMISE RESOLVED =>', res.toUpperCase()); return res.toUpperCase()
  })
  .then(res => {
    console.log('2nd THEN =>', res);
    return res.concat('!')
  })
  .then(res => console.log('3rd THEN =>', res))
  .catch(err => console.log('🟥 PROMISE REJECTED =>', err))
  .finally(console.log('🟨 PROMISE FINALLY'))

// LOAD CDN WITH PROMISES
const loadCssFiles = () => {
  return new Promise((resolve, reject) => {
    const tailwindScriptTag = document.createElement('script')
    tailwindScriptTag.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
    document.body.insertAdjacentElement('beforeend', tailwindScriptTag)
    resolve("script injected")
  })
}

document.addEventListener('DOMContentLoaded', () => {
  loadCssFiles().then(res => console.log('res =>', res.toUpperCase()))
})

//^ FETCH API

let _data = []
let _product = {}
const singleProductDiv = document.querySelector('.single__product')

fetch('https://fakestoreapi.com/products', {
  method: "POST",
  headers: {
    'content-type': 'application/json'
  },
  body: {
    title: 'title',
    price: 'price'
  }
})
  .then(response => response.json())
  .then(data => {
    _data = data;
    console.log("_data", _data)
    _product = data[Math.floor(Math.random() * 20)]
    console.log('product => ', _product)
    singleProductDiv.innerHTML = `
    <p class='bg-transparent'>${_product.id}. ${_product.title}</p>
    `
  })
