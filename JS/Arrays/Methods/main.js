const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

nums[150] = 100;
nums[149] = 99;
nums[100] = 80;

console.log(nums, "nums");

for (const el of nums) {
  console.log(el, "el");
}

const nums2 = [1, 2, 3, 4, 5];

nums2[nums2.length] = 6;

// mutable

const updatedLength = nums2.push(7, 8, 9);
nums2.push(10);

console.log(updatedLength, "updated length");

console.log(nums2, "nums2");

// mutable
// pop
const lastArrElement = nums2.pop();
console.log(lastArrElement, "last element");
console.log(nums2, "after pop");
nums2.pop();
console.log(nums2, "after 2 pop");

// mutable
// unshift
const newLength = nums2.unshift(-2, -1, 0);
console.log(newLength, "newLength");
console.log(nums2, "after unshift");

// mutable
// shift
const firstElement = nums2.shift();
console.log(firstElement, "firstElement");
console.log(nums2, "after shift");

// Завдання:
const nums3 = [10, 20, 30, 40];

// 1. Забрати 2 останніх елементи масиву, додати 1 елемент на початок
// 2. Перемістити перший елемент масиву у кінець ([0, 1, 2] => [1, 2, 0])

console.log(nums3, "original");
// 1
nums3.pop();
nums3.pop();

nums3.unshift(0);

console.log(nums3, "nums after pop");

// 2
// const fistEl = nums3.shift();
// nums3.push(fistEl);

// console.log(fistEl, nums3);

nums3.push(nums3.shift());

console.log(nums3, "nums3");

const sum = (a, b) => {
  console.log(`Sum: ${a + b}`);
};

sum(10, 30);
sum(1000, 2000);

const strs = ["hi", "hello", "hola"];

for (const str of strs) {
  console.log(str, "strs (of)");
}

for (let i = 0; i < strs.length; i = i + 1) {
  console.log(strs[i], "strs (i)");
}

strs.forEach((str, i, a) => {
  console.log(str, i, a, "str from forEach");
});

strs.forEach((el, i, arr) => console.log(el, i, arr, "forEach short"));

strs.forEach(console.log);

const hello = (name) => {
  console.log(`Hello, ${name}`);
};

const namesToGreet = ["Olexandr", "Petro", "Katerina", "Tetiana"];

namesToGreet.forEach(hello);

const sum2 = (a, b) => console.log(a + b);
sum2(10, 20);

// Завдання:

const booleanCount = {
  true: 0,
  false: 0,
};

const results = [true, true, true, true, false, false, false];
// За допомогою forEach порахувати всі true/false (окремо) - вивести той boolean, якого більше (false)

// results.forEach((bool) => {
//   if (bool) {
//     booleanCount.true = booleanCount.true + 1;
//   } else {
//     booleanCount.false = booleanCount.false + 1;
//   }
// });

// if (booleanCount.true > booleanCount.false) {
//   console.log("True");
// } else {
//   console.log("False");
// }

results.forEach((bool) => (booleanCount[bool] = booleanCount[bool] + 1));

console.log(booleanCount.true > booleanCount.false ? "True" : "False");

let isAllOfThemEndsWithZero = true;

const numbers = [10, 20, 30, 40, 50];

// перегорнути масив (imutable), якщо кожна цифра закінчується на 0
// forEach/for-of
let result = numbers;

// for (const num of numbers) {
//   if (`${num}`.endsWith("0")) {
//     result = result.toReversed();
//     break;
//   }
// }

for (const num of numbers) {
  if (num % 10 === 0) {
    result = result.toReversed();
    break;
  }
}

console.log(result, "result");
