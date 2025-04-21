// Завдання
// Напишіть логіку, що визначає, чи є число nAsString валідним (isNumberValid)
// Число валідне, якщо:
// - Починається з нуля і містить крапку (.) на індексі 1 (000.11 - не валідно, 0.01 - валідно)
// - Не містить жодних літер та символів (тільки числа та .) (isNaN)

// const nAsString = "10234";
// Варіанти для тесту (просто розкоментуйте)
const nAsString = "00001212121";
// const nAsString = "0.1234";
// const nAsString = "123NN123";

const conversion = Number(nAsString);

let isNumberValid = false;

if (Number.isNaN(conversion)) {
  isNumberValid = false;
} else {
  isNumberValid = true;
}

console.log(isNumberValid, "isNumberValid");

// Завдання **
// Перевірити, чи є строка паліндромом (https://ua.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%BE%D0%BC)

// Використайте цикл for (i)
// Задача має підвищенний рівень складності (без масивів)

// const str = "rotator";
const str = "3203";
let isPalindrome = true;

for (let i = 0; i < str.length / 2; i = i + 1) {
  //   console.log(str[i], str[str.length - 1 - i]);
  console.log(str[i], str.at(-i - 1));

  const elementFromStart = str[i];
  const elementFromEnd = str.at(-1 - i);

  if (elementFromStart !== elementFromEnd) {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome, "isPalindrome");
