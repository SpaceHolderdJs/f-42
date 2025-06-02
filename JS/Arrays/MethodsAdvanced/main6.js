// splice
// toSpiced

// mutable!

// [1,4,5]
// [1,2,3,4,5]
// [1,4,5]

const nums = [1, 2, 3, 4, 5, 6, 7];

// 3 - start index
// 4 - delete count
// 400, 500, 600, 700 - new elements to be added

const returnValueFromSplice = nums.splice(3, 4, 400, 500, 600, 700);

console.log(returnValueFromSplice, 'returnValueFromSplice');
console.log(nums, 'nums after splice');

const names = ['Igor', 'Alex', 'Oleg'];

const returnValueFromSplice2 = names.splice(1, 0, 'Karina', 'Kate');

console.log(returnValueFromSplice2, 'returnValueFromSplice2');
console.log(names, 'names');

const users = [{ id: 0 }, { id: 1 }, { id: 2 }];

users.splice(1, 1, { id: 200 });

console.log(users, 'users');

const users2 = [
  { id: 0, name: 'Igor', age: 20 },
  { id: 1, name: 'Alex', age: 15 },
  { id: 2, name: 'Oleg', age: 20 },
  { id: 3, name: 'Karina', age: 29 },
  { id: 4, name: 'Alex', age: 27 },
  { id: 5, name: 'Kate', age: 40 },
];

const idOfTheUserToUpdate = 3;
const updatedUserData = { id: 3, name: 'Olena', age: 31 };

// Variant 1

// const updatedUsers2 = users2.map((user) => {
//   if (user.id === idOfTheUserToUpdate) {
//     return updatedUserData;
//   } else {
//     return user;
//   }
// });

// console.log(updatedUsers2, 'updatedUsers2');

// Variant 2

const indexOfTheUserToUpdate = users2.findIndex(
  (user) => user.id === idOfTheUserToUpdate
);

console.log(indexOfTheUserToUpdate, 'indexOfUserToUpdate');

if (indexOfTheUserToUpdate !== -1) {
  users2.splice(indexOfTheUserToUpdate, 1, updatedUserData);
  console.log(users2, 'users2 after update');
}

// splice(startIndex, deleteCount, ...elementsToAdd);

const points = [{ x: 10 }, { x: 20 }, { x: 30 }, { x: 40 }];

// Завдання
// Прибрати точку {x: 10} (першу)
// Додати замість неї точки {x: -10}, {x: 0} (splice)
// [{x: -10}, { x: 0 }, { x: 20 }, { x: 30 }, { x: 40 }]

const sequence = [7, 1, 2, 3, 4, 5, 6];

// Завдання
// Відновити послідовніть елементів
// [1,2,3,4,5,6,7]
// splice!

const [theFirstElem] = sequence.splice(0, 1);
sequence.splice(sequence.length, 0, theFirstElem);

console.log(sequence, "sequence");
 

 
 