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

// console.log("pow =>", pow);

const users = ["amin", "mamad", "reza"];

users.forEach((user, i) => {
  console.log(`USER ${i + 1}. ${user}`);
});

console.log(users.includes("amin"));

users.splice(1, 0, "majid");

console.log("users => ", users);
     