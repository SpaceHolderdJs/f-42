// Set
const set1 = new Set();
console.log(set1, 'set');

// add something
set1.add('user-1');
console.log(set1, 'set1 after adding the user');

// size
console.log(set1.size, 'size of the set1');

// check value from the set
const isUser1Exists = set1.has('user-1');
console.log(isUser1Exists, 'isUser1Exists');

// get value from the set (undefined)
const user1 = set1[0];
console.log(user1, 'user1');

// iterate over

for (const elem of set1) {
  console.log(elem, 'elem');
}

set1.forEach((elem) => {
  console.log(elem, 'forEach');
});

// it hates similar values! (will destroy it)
set1.add('user-1');
set1.add('user-1');
set1.add('user-1');
set1.add('user-1');
set1.add('user-1');
set1.add('user-2');

console.log(set1.difference(new Set(['user-3', 'user-1'])), 'difference');
console.log(set1.intersection(new Set(['user-1', 'user-3'])), 'intersection');

console.log(set1, 'after duplicating the values');

const map1 = new Map();

map1.set('key1', 'value1');
map1.set('key1', 'value2');
map1.set('key1', 'value3');

console.log(map1, 'map1');

const numbers = [1, 2, 3, 4, 1, 2, 1, 2, 4];
const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers, 'uniqueNumbers');
const defaultUser = { email: 'email1@gmail.com' };

const users = [defaultUser, { email: 'email2@gmail.com' }, defaultUser];

const uniqueUsers = [...new Set(users)];

console.log(uniqueUsers, 'uniqueUsers');

// Завдання
const unique = (arr) => {
  return [...new Set(arr)];
  // Set
  // Написати логіку, що поверне унікальні значення у вигляді масиву з функції
};

console.log(unique([1, 1, 1, 2, 3, 4, 4, 2]), 'unique default test');
console.log(unique(['hello', 'hi', 'hi', 'hello'], 'unique test 2'));
console.log(unique([true, false, true, false]), 'unique test 3');

// unique([1,1,2]) => [1,2]
// unique([true, true, true]) => [true]
// unique(["Igor", "Alex", "Alex"]) => ["Igor", "Alex"]

const uniqueObjects = (arr) => {
  return arr.filter((obj, index) => {
    const indexOfElement = arr.findIndex((objToFindIndex) => {
      let isEqual = true;

      for (const key in obj) {
        if (obj[key] !== objToFindIndex[key]) {
          isEqual = false;
          break;
        }
      }

      return isEqual;
    });

    return indexOfElement === index;
  });
  // filter, findIndex, arr;
  // Написати логіку, що поверне унікальні значення у вигляді масиву з функції
  // лише objects (масив об`єктів)
};

// uniqueObjects([{a: 10}, {a: 10}, {a: 20}]) => [{a: 10}, {a: 20}]

console.log(uniqueObjects([{ a: 10 }, { a: 10 }, { a: 20 }]), 'uniqueObjects');
console.log(
  uniqueObjects([
    { a: 10, b: 10, role: 'User' },
    { a: 10, b: 10, role: 'Customer' },
    { a: 20, b: 100 },
  ]),
  'uniqueObjects'
);
