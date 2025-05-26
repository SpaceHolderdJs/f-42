const booleans = [true, false, true, false, true, true, false, false, false];

const calculatedBooleans = booleans.reduce(
  (acc, bol) => {
    acc[bol]++;
    return acc;
  },
  { true: 0, false: 0 }
);

console.log(calculatedBooleans, 'calculatedBooleans');

let usersA = {
  admins: [],
  users: [],
  unknown: [],
};

const source1 = [
  { role: 'admin', email: 'email1@gmail.com' },
  { role: 'user', email: 'email2@gmail.com' },
  { role: '--', email: 'email3@gmail.com' },
];

const source2 = [
  { role: 'user', email: 'email4@gmail.com' },
  { role: 'admin', email: 'email5@gmail.com' },
  { role: '--', email: 'email6@gmail.com' },
];

const source3 = [
  { role: '--', email: 'email7@gmail.com' },
  { role: '--', email: 'email8@gmail.com' },
  { role: '--', email: 'email9@gmail.com' },
];

// Завдання
// Класифікувати користувачів за ролями для source1 використавши reduce

// {
//   admins: ['email1@gmail.com'],
//   users: ['email2@gmail.com'],
//   unknown: ['email3@gmail.com'],
// };
const combinedData = source1.concat(source2).concat(source3);

console.log(combinedData, 'combinedDataBefore!');

const finalA = combinedData.reduce((acc, user) => {
  if (user.role === 'admin') {
    acc.admins.push(user.email);
  }

  if (user.role === 'user') {
    acc.users.push(user.email);
  }

  if (user.role === '--') {
    acc.unknown.push(user.email);
  }

  return acc;
}, usersA);

console.log(combinedData, 'combinedDataAfter!');
console.log(usersA, 'usersA');

const str = '';

const data = [
  { role: 'admin' },
  { role: 'user' },
  { role: 'admin' },
  { role: 'unknown' },
];

// Завдання
// Реалізувати логіку, яка наповнює строку str за принципом
// role: admin => "a"
// role: user => "u"
// role: unknown => "-"

const res = data.reduce((acc, user) => {
  switch (user.role) {
    case 'admin': {
      acc += 'a';
      break;
    }

    case 'user': {
      acc += 'u';
      break;
    }

    case 'unknown':
    default: {
      acc += '-';
      break;
    }
  }

  return acc;
}, str);

console.log(res, 'res');

// "aua-"

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const maxAllowedSum = 20;

const sum = nums.reduceRight((acc, num) => {
  if (acc < 20) {
    acc = acc + num;
  } else {
    acc = maxAllowedSum;
  }

  return acc;
}, 0);

console.log(sum, 'sum');

const products = [
  { name: 'Product1', price: 200 },
  { name: 'Product2', price: 400 },
  { name: 'Product3', price: 1900 },
];

// Використовуючи reduceRight вивести продукт, ціна якого найбільша

const maxPriceProduct = products.reduceRight((currentMaxProduct, product) => {
  if (currentMaxProduct.price < product.price) {
    return product;
  }
  return currentMaxProduct;
}, products[0]);

console.log(maxPriceProduct, 'maxPriceProduct');

const sortedNums = [1, 2, 3, 4, 5, 6];
const unsortedNums = [2, 6, 1, 4, 3, 5];

// Mutable!
const sortedNms = unsortedNums.sort();
console.log(sortedNms, 'sortedNms');

const sortedStrings = ['a', 'b', 'c', 'd'];
const unsortedStrings = ['b', 'a', 'c', 'd'];

const sortedStrs = unsortedStrings.sort();
console.log(sortedStrs, 'sortedStrs');

console.log(
  [2, 3, 1, 4, 5].sort((n1, n2) => n2 - n1),
  'primitive numbers sorting'
);
// 0
// 1+
// -1(-)

console.log(
  [2, 3, 1, 4, 5].sort((n1, n2) => {
    if (n1 < n2) {
      return 1;
    } else {
      return -1;
    }
  })
);

const points = [{ x: 10 }, { x: 12 }, { x: 9 }];

const sortedPoints = points.sort((p1, p2) => p1.x - p2.x);
console.log(sortedPoints, 'sortedPoints');

const cars = [
  { price: 1700 },
  { price: 1000 },
  { price: 900 },
  { price: 1200 },
];

// sort = mutable
// toSorted = immutable

// Завдання - відсортувати машини за ціною (зростання та спадання)

console.log(
  cars.toSorted((car1, car2) => car1.price - car2.price),
  'cars up'
);

console.log(
  cars.toSorted((car1, car2) => car2.price - car1.price),
  'cars down'
);

const hwArray = [
  { id: '218291-192192-12129-121', date: '02-09-2025', amount: 13000 },
  { id: '218212-191192-8909-111', date: '01-04-2025', amount: 9000 },
  { id: '1a8291-192s2-42129-421', date: '02-10-2025', amount: 15000 },
  { id: '28473289-222w-1ds229-121', date: '11-02-2025', amount: 20000 },
];

// Завдання
// 1. (reduce) Порахувати середнє арифметичне значення amount
// 2. Відсортувати масив за amount у порядку спадання
// 3. *Перевірити чи ВСІ контракти укладено у 2025 році
