// Arrays
const numbers = [1, 2, 3, 4, 5];
const strings = ["ABC", "DEF", "G"];
const booleans = [true, true, false];

const objects = [{ a: 1 }, { a: 2 }, { a: 3 }];
const arrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(numbers, "numbers");

// slice (immutable)
console.log(numbers.slice(0, 2));
console.log(numbers.slice(2));
console.log(numbers.slice(-3));

console.log(numbers, "numbers after slice");

console.log("12345".slice(0, 3));

const sliced = numbers.slice(1, 3);
console.log(sliced, "sliced");

console.log(numbers[0]);
console.log(numbers[1]);

console.log(strings[0]);
console.log(strings[1]);

for (const element of numbers) {
  console.log(element, "element from for-of");
}

for (const element of strings) {
  console.log(element, "element from for-of (string)");
}

for (let i = 0; i < numbers.length; i = i + 1) {
  console.log(numbers[i], "for with counter for arrays");
}

const arr = new Array(5);
console.log(arr, "arr");

const str = new String("hello");
console.log(str, "str");

// console.log("1111".length);
// console.log([1, 2, 3, 4].length);

// at
console.log(numbers.at(0), "at");
console.log("hello".at(0), "at for string");

console.log(numbers.at(-1), "at -1");
console.log(numbers[numbers.length - 1]);

console.log([1, 2, 3, 4][0], "!!!");
console.log([1, 2, 3, 4].slice(0, 2));

// indexOf

const words = ["hello", "js", "programming"];

const indexOfAnElement = words.indexOf("hello");
console.log(indexOfAnElement, "indexOf");

const indexOfWrongElement = words.indexOf("Java");
console.log(indexOfWrongElement, "index of wrong element");

console.log(words[indexOfAnElement], "element");
console.log(words[indexOfWrongElement], "wrong element");

console.log(words[100]);
console.log("hello"[100]);

if (words.indexOf("programming") !== -1) {
  console.log("Do something");
}

const arr2 = [0, 1, 2, 3];

if (arr2.indexOf(0) !== -1) {
  console.log("Do something 2");
}

const obj = {
  k: 0,
};

if (obj.hasOwnProperty("k")) {
  console.log("Do something 3");
}

if ("k" in obj) {
  console.log("Do something 3");
}

// if (obj.k) {
//   console.log("Do something 3");
// }

// includes

const users = ["John", "Alex", "George"];

console.log(users.includes("Alex"), "includes");
console.log(users.includes("Oleg"), "includes 2");

// Not works with any objects as a part of the array

const values = [{ a: 10 }, { a: 14 }];

console.log(values.includes({ a: 10 }), "includes");
console.log(values.indexOf({ a: 10 }), "indexOf");
// ===

// Завдання:
const arr3 = ["item", "any", "never", "unknown", "item", "item"];

// 1. Перевірити, чи є слово item у масиві, знайти його індекс (includes, indexOf)
// 2. Порахувати всі слова item у масиві (for - of)

// for of

if (arr3.includes("item")) {
  console.log("Yes");
}

if (arr3.indexOf("item") !== -1) {
  console.log("Yes");
}

let itemCount = 0;

for (const word of arr3) {
  if (word === "unknown") {
    itemCount = itemCount + 1;
  }
}

console.log(itemCount, "itemCount");

// console.log(arr3.filter((e) => e === "unknown").length, "another way");

// reverse

// mutable
const nums = [1, 2, 3, 4, 5];

console.log(nums.reverse(), "reverse");
console.log(nums, "original array");


// immutable
const nums2 = [1, 2, 3, 4, 5];

console.log(nums2.toReversed(), "toReversed");
console.log(nums2, "original array");


// fill
const arrToFill = [];
arrToFill.length = 50;

arrToFill.fill(100);

console.log(arrToFill, "fill");


// Завдання:

// 1. 
const arr4 = [200, 40, 10, 20, 40, 60];
// Порахувати суму чисел arr4 (for - of)
// *[optional] - reduce

// 2. 
const arr5 = ["hello", "hola", "hi"];
// Перегорнути масив (змінити порядок на зворотній immutable)

// 3. *
const arr6 = ["-", "--", "-", "---", "-"];
// Порахувати середнє арифметичне кількості знаків -
// 7 / 4
// for - of, length
