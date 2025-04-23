console.log("Hello world");

console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);

const sum = 1000 + 500;

const sumOfThreeElements = (10 + 10 + 10) * 10;
const myName = "Igor";

console.log(sumOfThreeElements);
console.log(myName);

const a = 100;
const b = 20;
const c = 80;

const sumOfAbc = a + b + c;
console.log(sumOfAbc);

const diffOfAb = b - a;
console.log(diffOfAb);

const message = "Hello everyone! 😊";
console.log(message);

const firstLetter = message[0];
const secondLetter = message[1];
console.log(firstLetter);
console.log(secondLetter);

console.log(message[5], message[6], message[10], message[100], message[-1]);

const firstName = "Igor";
const secondName = "Sergienko";
const space = " ";

console.log(firstName + space + secondName);

// Завдання
//
const firstWord = "Java";
const secondWord = "Script";
const thirdWord = "Forever";
// Вивести у консоль браузера речення з 3 вказаних констант

const a1 = 10;
const a2 = 51;
const a3 = 60;
const a4 = 30;

const avg = 0;
// Порахувати середнє арифметичне чисел (a1, a2, a3, a4)
// Вивести у консоль

// Завдання:
const user1 = { name: "John Smith" };

user1.length = user1.name.length;

console.log(user1, "user1");

// Додати до user поле (ключ) length
// яке є кількістю символів його імені
// number

// {name: "Igor", length: 4}

// Завдання

const point1 = { x: 10, y: 3, z: 10 };
const point2 = { x: -1, y: 1, z: 6 };

const averagePoints = {
  x: (point1.x + point2.x) / 2,
  y: (point1.y + point2.y) / 2,
  z: (point1.z + point2.z) / 2,
};

// averagePoints.x = (point1.x + point2.x) / 2;
// averagePoints.y = (point1.y + point2.y) / 2;
// averagePoints.z = (point1.z + point2.z) / 2;

console.log(averagePoints, "averagePoints");
console.table(averagePoints);
// Порахувати Середнє арифметичне точок x,y,z і записати їх у averagePoints

// {x: 4.5, y: 2, z: 8}
