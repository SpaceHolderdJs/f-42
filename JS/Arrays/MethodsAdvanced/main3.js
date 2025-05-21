// find
// findIndex
// some, every

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [{ n: 1 }, { n: 2 }, { n: 3 }];

console.log(
  arr1.find((item) => item === 3),
  "find"
);

const el1Index = arr1.findIndex((item) => item === 2);
const el2Index = arr1.findIndex((item) => item === 5);

const el3Index = arr1.findIndex((item) => item === 6);

console.log(el1Index, "el1Index");
console.log(el2Index, "el2Index");
console.log(el3Index, "el3Index");

console.log(arr1.indexOf(5), "indexOf5");
console.log(arr2.indexOf({ n: 1 }), "indexOfObject");
console.log(
  arr2.findIndex((el) => el.n === 2),
  "findIndexWithObject"
);

const indexOfObjectInArray = arr2.findIndex((el) => el.n === 9);
const elementObjectInArray = arr2.find((el) => el.n === 9);

// if (indexOfObjectInArray === -1) {
//   alert("This element has not been found");
// }

// filter, find, findIndex

// Завдання:

const users = [
  { email: "user@email.com", password: "12345" },
  { email: "user1@email.com", password: "54321" },
  { email: "user2@email.com", password: "12908" },
  { email: "user3@email.com", password: "199991" },
];

// Знайти індекс користувача з поштою user2@email.com
// Знайти індекс користувача пароль якого закінчується та починається на 1

// startsWith, endsWith

console.log(
  users.findIndex((user) => user.email === "user2@email.com"),
  "task1"
);

console.log(
  users.findIndex(
    (user) => user.password.at(0) === "1" && user.password.at(-1) === "1"
  ),
  "task2"
);

// every, some

const numbers = [1, 2, 3, 4, 5, 6];

const numbersOnly = numbers.filter((n) => typeof n === "number");
console.log(numbersOnly, "numbersOnly", numbers.length === numbersOnly.length);

const isEveryElementNumber = numbers.every((n) => typeof n === "number");
console.log(isEveryElementNumber, "isEveryElementNumber");

const isEachElementMoreThan5 = numbers.every((n) => n > 0 && n < 8);
console.log(isEachElementMoreThan5, "isEachElementMoreThan5");

const isAtLeastOneElementMoreThan5 = numbers.some((n) => n > 5);
console.log(isAtLeastOneElementMoreThan5, "isAtLeastOneElementMoreThan5");

let isAllNumberMoreThan5 = true;

for (const n of numbers) {
  if (n < 5) {
    isAllNumberMoreThan5 = false;
    break;
  }
}

console.log(isAllNumberMoreThan5, "isAllNumberMoreThan5");

const adminUsers = [
  { email: "email@gmail.com", isAdmin: true },
  { email: "", isAdmin: false },
  { email: "email2@gmail.com", isAdmin: true, score: 1000 },
  { email: "email3@gmail.com", isAdmin: false },
  { email: "", isAdmin: true },
];

// immutable

// Завдання
// 1. Перевірити, чи ВСІ користувачі є адміністраторами (isAdmin: true)
console.log(
  adminUsers.every((user) => user.isAdmin),
  "task1"
);
// 2. Перевірити, чи є ХОЧА Б ОДИН користувач з полем score
console.log(
  adminUsers.some((user) => "score" in user),
  "task2"
);
// 3. Перевірити, чи ВСІ користувачі мають заповнене поле email
console.log(
  adminUsers.every((user) => user.email),
  "task3"
);

// sort
// reduce
// reduceRight
// splice

[1, 2, 3, 4, 5].forEach((el, indx, arr) =>
  console.log(el, indx, arr, "forEach")
);

Array.prototype.myForEach = function (fn) {
  for (let i = 0; i < this.length; i = i + 1) {
    const element = this[i];

    fn(element, i, this);
  }
};

console.log("_________________");

[1, 2, 3, 4, 5].myForEach((el, indx, arr) =>
  console.log(el, indx, arr, "myForEach")
);

["str1", "str2", "str3"].myForEach((el) => console.log(el.toUpperCase()));

console.log(
  [1, 2, 3, 4].map((el, i, arr) => el * 10),
  "map"
);

Array.prototype.myMap = function (fn) {
  const result = [];

  for (let i = 0; i < this.length; i = i + 1) {
    const resultItem = fn(this[i], i, this);
    result.push(resultItem);
  }

  return result;
};

console.log(
  [{ n: 10 }, { n: 11 }, { n: 12 }, { n: 13 }].myMap((el) => {
    el.n = el.n * 100;
    el.m = 100;

    return el;
  }),
  "myMap"
);

const arr3 = [1, 2, 3, 4, 5, 6, 7];

const sumOfArr3 = arr3.reduce((acc, el, i, arr) => {
  acc = acc + el;
  return acc;
}, 0);

console.log(sumOfArr3, "sumOfArr3");

const arr4 = ["Hello", "my", "name", "is", "Igor"];

const fullSentence = arr4.reduce((acc, str) => {
  acc = acc.concat(" " + str);
  return acc;
}, "");

console.log(fullSentence, "fullSentence");

const nums = [1, 2, 3, 4, 5];

const numsDividedBy10 = nums.reduce((acc, n) => {
  acc.push(n / 10);
  return acc;
}, []);

console.log(numsDividedBy10, "numsDividedBy10");

const letters = ["a", "a", "b", "b", "a", "a", "b"];

const calculatedLetters = letters.reduce(
  (acc, letter) => {
    if (letter === "a") {
      acc.a = acc.a + 1;
    } else {
      acc.b = acc.b + 1;
    }
    return acc;
  },
  { a: 0, b: 0 }
);

console.log(calculatedLetters, "calculatedLetter");

// Завдання

const cars = [
  { brand: "Ford", model: "Mustang", price: 15000, color: "ruby" },
  { brand: "Buick", model: "t9", price: 16000, color: "blue" },
  { brand: "Peugeot", model: "308 sw", price: 15000, color: "black" },
  { brand: "Peugeot", model: "207", price: 11000, color: "white" },
  { brand: "Chrysler", model: "r3", price: 15000, color: "red" },
];

// 1. Перевірити, що ВСІ автомобілі мають ціну вищу за 10000
// 2. Перевірити, що Є ОДИН (хоча б) автомобіль червоного кольору

// 3. Знайти всі машини марки Peugeot (filter)
// 4. Порахувати загальну ціну всіх машин (reduce *)

// 62000