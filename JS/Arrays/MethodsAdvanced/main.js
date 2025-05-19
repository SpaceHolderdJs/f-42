const odds = [1, 2, 3, 4, 5, 6, 7, 8];

// odds.forEach((el, i, arr) => console.log(el, i, arr));

// const sum = (a, b) => {
//     return a + b;
//   };

//   const sum1 = sum(10, 20);
//   console.log(sum1, "sum1");

//   const sum2 = sum(100, 200);
//   console.log(sum2, "sum2");

// immutable
const transformedArr = odds.map((el, i, arr) => {
  return el * 10;
});

console.log(odds, "odds");
console.log(transformedArr, "transformedArr");

const names = ["igor", "alex", "john"];

// const capitalizedNames = names.map((name) => {
//    return `${name[0].toUpperCase()}${name.slice(1)}`;
// });

const capitalizedNames = names.map((name) => name.toUpperCase());

console.log(capitalizedNames, "capitalizedNames");

console.log(
  odds.map((n) => {
    return n * 10;
  })
);

console.log(odds.map((n) => n * 10));

const points = [10, 3, 11, 4, 8, 1];
// [9.3, 3.7, 10.3, 4.7, 7.3, 1.7]
const correctionValue = 0.7;

// Завдання: для кожної точки з points розрахувати фінальне значення
// якщо точка <= 5 - додати до неї correctionValue
// якщо точка > 5 - відняти від неї correctionValue
// вивести оновлений масив (map)

const correctedPoints = points.map((p) => {
  if (p <= 5) {
    return p + correctionValue;
  } else {
    return p - correctionValue;
  }
});

console.log(
  points.map((p) => (p <= 5 ? p + correctionValue : p - correctionValue)),
  "variant2"
);

console.log(correctedPoints, "correctedPoints");

const data = [
  { a: 10, b: 20 },
  { a: 1, b: 9 },
  { a: 4, b: 2 },
];

const transformedData = data.map((item) => {
  item.sum = item.a + item.b;
  item.avg = (item.a + item.b) / 2;
  return item;
});

// console.log(
//   data.map((item) => ({
//     ...item,
//     sum: item.a + item.b,
//     avg: (item.a + item.b) / 2,
//   })),
//   "variant2"
// );

console.log(transformedData, "transformedData");
// Додати до кожного елементу масива:
// поле sum з сумою a та b
// поле avg з середнім арифметичним (a, b)
// map

const nums = [1, 2, 3, 4, 5, 6];

const nums2 = [];

nums.forEach((el) => {
  nums2.push(el * 10);
});

console.log(nums2, "nums2");

// filter

const ns = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const moreThan5 = [];

// ns.forEach((n) => {
//   if (n > 5) {
//     moreThan5.push(n);
//   }
// });

// console.log(moreThan5, "moreThan5");

// immutable
const moreThan5 = ns.filter((el) => {
  return el % 2 === 0;
});

console.log(moreThan5, "moreThan5");

const names2 = ["Igor", "Alexandr", "John", "oleg"];

const length4Names = names2.filter((name) => {
  return name.includes("o");
});

console.log(length4Names, "length4Names");
console.log(names2);

const data2 = [
  { a: 10, b: 10 },
  { a: 3, b: 4 },
  { a: 7, b: 6 },
];

const result2 = data2
  .map((item) => {
    item.sum = item.a + item.b;
    return item;
  })
  .filter((item) => item.sum > 7);

console.log(result2, "result2");

const data3 = [
  { sum: 10 },
  { sum: 11, avg: 4 },
  { sum: 4, avg: 9 },
  { sum: 8 },
];

const filteredData3 = data3
  .filter((item) => item.sum - 5 > 1)
  .map((item) => item.sum);

console.log(filteredData3, "filteredData3");

console.log(
  [undefined, null, 0, 1, 2, 3, 4, 5, 6, 7].filter((e) => typeof e === "number")
);

// Завдання
const data4 = [
  { email: "email1@gmail.com", age: 18 },
  { email: "email2@gmail.com", age: 12 },
  { email: "email3@gmail.com", age: 34 },
  { email: "email4@gmail.com", age: 17 },
];

// 1. Додати всім користувачам поле isAdult: true/false (boolean)
// Якщо користувачеві >= 18 років - isAdult: true, інакше false
// (map)

const task1Data = data4.map((user) => {
  if (user.age >= 18) {
    user.isAdult = true;
  } else {
    user.isAdult = false;
  }

  return user;
});

console.log(task1Data, "task1Data");

console.log(
  data4.map((user) => ({ ...user, isAdult: user.age >= 18 })),
  "task1DataV2"
);

// 2. Відсіяти (filter) тільки повнолітніх користувачів

const task2Data = data4.filter((user) => {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
});

console.log(task2Data, "task2Data");
console.log(
  data4.filter((user) => user.age >= 18),
  "task2DataV2"
);

// 3. Вивести emails всіх неповнолітніх користувачів (filter)

data4.filter((user) => {
  if (user.age < 18) {
    console.log(user);
    return true;
  } else {
    return false;
  }
});

data4
  .filter((user) => user.age < 18)
  .map((user) => user.email)
  .forEach(console.log);

console.log(
  data4
    .map((user) => ({ ...user, isAdult: user.age >= 18 }))
    .filter((user) => user.isAdult),
  "all at once"
);
