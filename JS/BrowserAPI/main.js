let accountType = "admin";
let userEmail = "email@gmail.com";

console.log(accountType);

// const result = confirm("Would you like to reload this page?");
// console.log(result);

// if (result) {
//   window.location.reload();
// }

if (userEmail === "email@gmail.com") {
  accountType = "user";
}

let a = 100;

console.log(accountType);

// alert("Alert1");

console.log("!");
console.warn("Change this page later:)");
console.error("!!!");

console.info("Info");

console.group("Group1");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.groupEnd("Group1");

for (let i = 0; i < 10; i++) {
  console.count("For iterations");
}

console.time("For loop timer");

for (let i = 0; i < 100; i++) {
  console.timeLog("For loop timer");
}

console.time("Timer2");

console.timeEnd("For loop timer");

// console.timeLog();

console.timeEnd("Timer2");

console.log({ name: "Igor" });
console.dir({ name: "Igor" }, { colors: true, depth: 1, showHidden: true });

console.table({ name: "Igor", age: 25 });

// console.clear();

// const name = prompt("Enter your name");
// console.log(name);

// alert(prompt("Enter name").toUpperCase());

// if (confirm("Confirm?")) {
//   alert("Confirm");
// } else {
//   alert("Not confirmed");
// }

// const message = prompt("Enter your message");
// let iterations = +prompt("Enter your iterations");

// Завдання
// Написати логіку, використовуючи for (i)
// яка буде виводити message (iterations) разів
// alert

// Завдання:

// const possibleSolutions = prompt("Enter possible solutions");

// for {

// if (el !== ",") {

// number? (x)

// const part1 = x - 10 + 5;
// const part2 = x + 5 - 10;

// if part1 === part2 -> solution
// break;
// }

// }

// i = i + 2;

// part1 === part2

// Завдання перевірити (for (i/of))
// всі передані через кому корені рівняння
// якщо знайдено перше рішення - вивести alert
// зупинити цикл (break)

const possibleSolutions = prompt("Enter possible solutions");

for (const numberOrComma of possibleSolutions) {
  if (numberOrComma !== ",") {
    console.log(+numberOrComma, "numberOrComma");
    // Code ...
  }
}
