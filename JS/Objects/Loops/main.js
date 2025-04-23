const obj = { a: 1, b: { value: 1 } };

const data = {
  country: "Ukraine",
  city: "Kyiv",
  address: "St 1da.13m",
  id: 1,
  user: "User",
  lastUpdate: "23.04.2025",
};

console.log(data.id);
console.log(data.user);

// for (let i = 0; i < data.length; i = i + 1) {
//   console.log(i);
// }

// for (const d of data) {
//   console.log(d, "from loop");
// }

for (const key in data) {
  console.log(key, "key");
  console.log(data[key], "value");
}

console.log(data);

console.log(new String("hello"));

const obj1 = {
  a: 100,
  b: "DE",
};

// Завдання:
const summary = {
  kpi: 1700,
  avg: 300,
  base: 900,
};

// - Порахувати суму всіх значень summary за ключами (2900) (for in)
// - Порахувати середнє арифметичне значень summary
// - Знайти найбільший і найменший показник (max: kpi, min: avg)

let sum = 0;
let count = 0;

for (const key in summary) {
  sum = sum + summary[key];
  count = count + 1;
}

console.log(sum, "!!!");
console.log(sum / count);

const { avg, base, kpi } = summary;

console.log((avg + base + kpi) / 3);

let min = summary.base;
let max = summary.avg;

for (const key in summary) {
  const currentValue = summary[key];

  if (max < currentValue) {
    max = currentValue;
  }

  if (min > currentValue) {
    min = currentValue;
  }
}

console.log(max, "max");
console.log(min, "min");

console.log(typeof "");
console.log(typeof 1);
console.log(typeof true);

const data2 = {
  a: 10,
  b: "Hello",
  c: "World",
  d: 100,
  e: "!",
};

// Завдання:
// "Додати" між собою всі строкові значення data2

// for in
// typeof === "string"

("HelloWorld");

console.log(data2.b + data2.c, "!!!");

let res = "";

for (const key in data2) {
  const currentValue = data2[key];

  if (typeof currentValue === "string") {
    res = res.concat(currentValue);
  }
}

console.log(res, "res");

const data3 = {
  a: false,
  b: "Hello",
  c: "World",
  d: true,
  e: false,
  f: true,
  g: true,
};

let res1 = 0;
let res2 = 0;

for (const key in data3) {
  const currentValue = data3[key];

  if (typeof currentValue === "boolean") {
    if (currentValue === true) {
      res1 = res1 + 1;
    }

    if (currentValue === false) {
      res2 = res2 + 1;
    }
  }
}

console.log(res1, "true");
console.log(res2, "false");

if (res1 > res2) {
  alert(true);
} else {
  alert(false);
}

// Завдання:
// Порахувати окремо всі true та всі false у data3
// вивести той boolean (true/false) якого більше
// for (in) + typeof === "boolean"
// true

console.log(res1 > res2 ? `true: ${res1}` : `false: ${res2}`);

// Завдання
const users = {
  0: "Tom Redl",
  1: "John Smith",
  2: "Ariana Grande",
};

// Порахувати суми всіх довжин всіх імен користувачів
// for (in)
//
