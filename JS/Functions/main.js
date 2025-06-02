// functions

// object

// [].reduce(() => {});
// [].filter(() => {});

// function declaration

function greetings(name) {
  console.log(`Hello ${name}`);
}

greetings('Igor');
greetings('Olena');
greetings('Alex');

function greetingsMultipleTimes(name, attempts = 1) {
  for (let i = 0; i < attempts; i++) {
    console.log(`Hello, ${name}`);
  }
}

greetingsMultipleTimes('Igor', 7);
greetingsMultipleTimes('Olena');

const nums = [1, 2, 3, 4, 5];

function sumOfValues(arr) {
  // Завдання:
  // написати функцію, що порахує суму елементів масива (arr) (reduce, forEach)
  // функція має вивести в консоль суму елементів масиву

  const sum = arr.reduce((s, n) => (s += n), 0);
  console.log(sum, 'sumOfValues');
  return sum;
}

sumOfValues(nums); // 15
sumOfValues([100, 900, 1000]); // 2000

const sumOfAnotherElements = sumOfValues([10, 20, 30, 40, 50]);

console.log(sumOfAnotherElements, 'sumOfAnotherElements');

const user1 = { email: 'email@gmail.com', isAdmin: false };
const user2 = { email: 'email2@gmail.com', isAdmin: true };

function isUserAdmin(user) {
  return user.isAdmin;
}

const is1UserAdmin = isUserAdmin(user1);
const is2UserAdmin = isUserAdmin(user2);

console.log(is1UserAdmin, 'isUser1Admin');
console.log(is2UserAdmin, 'isUser2Admin');

// 01.03.2025
function parseDateFromString(dateString) {
  return {
    date: dateString.slice(0, 2),
    month: dateString.slice(3, 5),
    year: dateString.slice(6),
  };
}

console.log(parseDateFromString('02.05.2025'), 'parseDateFromString');
console.log(parseDateFromString('11.10.2024'), 'parseDateFromString (2)');



// Завдання

function findBiggestValue(arr) {
    let biggest = arr[0];

    // допписати функцію findBiggestValue
    // яка має знайти найбільший елемент масиву чисел та повернути його

    return biggest;
}

// findBiggestValue([1,2,3,4,5])
// 5;

// Завдання

function repeatString(str, repeatQuantity) {
    // дописати функцію repeatString
    // яка має повернути строку str повторену repeatQuantity разів
    // for (i)
}

// repeatString("hello", 3)
// "hellohellohello"

// Завдання

// n - значення
// p - степінь

function powerOf(n, p) {
    // дописати функцію powerOf
    // яка повертає значення "n" у степені "p"
    // for 
}

// powerOf(2, 2) 
// 4