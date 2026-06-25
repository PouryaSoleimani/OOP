// console.log("JS");
// const number = 10;
// const number2 = 12;

// let isEqual = number === number2;
// console.log(isEqual);

// let i = 0;
// for (i; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// let firstNumber = +prompt("FIRST NUMBER");
// let secondNumber = +prompt("SECOND NUMBER");

// const min = Math.min(firstNumber, secondNumber);
// const max = Math.max(firstNumber, secondNumber);

// console.log({ firstNumber, secondNumber });

// const isFirstOdd = firstNumber % 2 == 0;
// if (!isFirstOdd) firstNumber++;

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

// let userNumber;
// let sum = [];

// while (userNumber !== 0) {
//   console.log("usernumber", userNumber);
//   userNumber = +prompt("enter a number");
//   sum.push(userNumber);
// }

// console.log(
//   "sum",
//   sum.reduce((a, b) => a + b),
// );

// let firstnumber = +prompt("first number");
// let secondNumber = +prompt("secondNumber");

// let pow = 1;

// for (let i = 0; i < secondNumber; i++) {
//   console.log("REPEAT");
//   pow += firstnumber;
// }

// let i = 0;
// while (i < secondNumber) {
//   pow = pow * firstnumber;
//   i++;
// }

const users = ["amin", "mamad", "reza"];

users.forEach((user, i) => {
  console.log(`USER ${i + 1}. ${user}`);
});

console.log(users.includes("amin"));

users.splice(1, 0, "majid");

console.log("users => ", users);

const results = [12, 15, 18, 19, 29];

const res = results.map((r) => {
  return r * 2;
});

const usrname = "nima";
const splitted = usrname.split("");
const reversed = usrname.split("").reverse();

console.log({ splitted, reversed });

//^ MAKING CAPTCHAS
const text = "123456790abcdefghijklmnopqrstuvwxyz";
let char = Math.floor(Math.random() * text.length);
let captcha = `
${text[Math.floor(Math.random() * text.length)]} 
${text[Math.floor(Math.random() * text.length)]} 
${text[Math.floor(Math.random() * text.length)]} 
${text[Math.floor(Math.random() * text.length)]} 
${text[Math.floor(Math.random() * text.length)]} 
${text[Math.floor(Math.random() * text.length)]} 
${text[Math.floor(Math.random() * text.length)]} 
${text[Math.floor(Math.random() * text.length)]}`
  .replaceAll(" ", "")
  .replaceAll("\n", "");
console.log("CAPTCHA =>", captcha);

let _captcha = "";
let randomCharIndex;

for (let i = 0; i < 7; i++) {
  randomCharIndex = Math.floor(Math.random() * text.length);
  _captcha += text[randomCharIndex];
}
//! NO NEED FOR REPLACE ALLS
console.log("CAP =>", _captcha);

const products = [
  { id: 1, title: "LAPTOP", shortlink: "" },
  { id: 2, title: "MOBILE", shortlink: "" },
  { id: 3, title: "HEADPHONE", shortlink: "" },
  { id: 4, title: "WATCH", shortlink: "" },
];

const finded = products.find((i) => i.shortlink === "assd012");
console.log("finded =>", finded);

const shortLinkAddedArray = products.map((p) => {
  let captcha = `
        ${text[Math.floor(Math.random() * text.length)]} 
        ${text[Math.floor(Math.random() * text.length)]} 
        ${text[Math.floor(Math.random() * text.length)]} 
        ${text[Math.floor(Math.random() * text.length)]} 
        ${text[Math.floor(Math.random() * text.length)]} 
        ${text[Math.floor(Math.random() * text.length)]} 
        ${text[Math.floor(Math.random() * text.length)]}
        ${text[Math.floor(Math.random() * text.length)]}`
    .replaceAll(" ", "")
    .replaceAll("\n", "");
  return { ...p, shortlink: captcha };
});

console.log(shortLinkAddedArray);

function hasSSL(url) {
  if (String(url).trim().includes("https")) {
    return true;
  } else {
    return false;
  }
}

const _res = hasSSL("https://google.com");
console.log("res =>", _res);

//^ TIMER FUNCTION
let minute = 1;
let second = 10;

function showTime(text) {
  if (String(text).length == 1) {
    return `0${text}`;
  } else {
    return text;
  }
}

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

// URL SEARCH PARAMS

const search = new URLSearchParams(location.search).get('i')

console.log('search ->', search)


const follower = document.querySelector('.mouse__follower')

document.body.addEventListener('mousemove', (e) => {
  const x = e.clientX - (follower.clientWidth / 2)
  const y = e.clientY - (follower.clientHeight / 2.5)
  console.log({ x, y })
  setTimeout(() => {
    follower.style.setProperty('left', `${x}px`)
    follower.style.setProperty('top', `${y}px`)
  }, 150);

})


const userAgent = window.navigator

console.log({ userAgent })