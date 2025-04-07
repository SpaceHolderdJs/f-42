// Boolean

const bol = true;
const bol1 = false;

console.log(bol, bol1);

const bol2 = new Boolean(true);

console.log(bol2);

// Conversions (primitives)
console.log(Boolean());
console.log(Number("1"));
console.log(String(100));

console.log(Number(true));
console.log(Number(false));

console.log(Boolean(1));
console.log(Boolean(0));

// Falsy (false - like): false, 0, "", undefined, null, NaN

console.log(Boolean("0"));
console.log(Boolean(" "));
console.log(Boolean("Hello"));

console.log(Boolean(""));

console.log(new String(""));
console.log(new String(" "));
console.log(new String("hello"));

console.log(Boolean("false"));

console.log(Boolean(undefined));
console.log(Boolean(null));

console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));
console.log(Boolean(NaN));

console.log(Boolean([]));
console.log(Boolean({}));

const bool = false;
const n = 0;
const nan = NaN;
const str = "";
const nl = null;
const undf = undefined;

if (bool) {
  console.log("bool");
}

if (n) {
  console.log("n");
}

if (nan) {
  console.log("nan");
}

if (!str) {
  console.log("str is empty");
}

if (nl) {
  console.log("null");
}

if (undf) {
  console.log("undf");
}

// let name = ""; // undefined
// let name = undefined;
// let name;

// String
let username = "";

console.log(username, "name");

username = "Igor";

if (!username) {
  console.log("Name is not provided");
}

// Number
// let sum = 0;
let sum = 0;

console.log(0 + 1 + 2 + 3, "!!!");

sum = sum + 1;
sum = sum + 2;
sum = sum + 3;

console.log(sum);

if (!sum) {
  console.log("Cart is empty!");
}

// Boolean
let isUserAdmin = false;

// isUserAdmin = true;

if (!isUserAdmin) {
  console.log("User has not enough permission");
}

const bl1 = null;
const bl2 = undefined;
const bl3 = 0;
const bl4 = "";

console.log(+"10");
console.log(!!(bl1 && 10 > 9 && "a" === "a"));

console.log(Boolean(bl1));

const isUserAdult = true;
let useAge = isUserAdult ? 18 : 0;

// const lastVisitedAt = "2025-03-19";

// ||
const lastVisitedAt = "";

let dateOfTheProfile =
  lastVisitedAt || false || 0 || null || undefined || "2025-04-07" || false;

console.log(dateOfTheProfile, "dateOfTheProfile");

const userDefaultRole = "";

let userRole = userDefaultRole || "user";

console.log(userRole, "userRole");

// &&

const ordersCount = 10;

let isCartReady = ordersCount > 5 && "yes";

console.log(isCartReady);

alert("Hello");

const name1 = prompt("Enter your name");
console.log(name1, "name1");

// Завдання:
// 1.
const value = 10;

const guess = +prompt("Guess a number between 1 and 10");

// Дати користувачеві 4 спроби вгадати число
// Якщо він вгадав - вивести alert/console.log з вітаннями
// for (i < 5)
// якщо повертається null (з prompt) - зупинити цикл, вивести повідомлення,
// що гра закінчена

// 2

const loginAttempts = 0;

const password = "password";
const inputPassword = "password";

// loginAttempts = 1;
// loginAttempts = 3;

// Перевірити (falsy), що loginAttempts присутній та більше за 0 (хоча б 1)
// Якщо це так і паролі (password, inputPassword)
//  співпадають - вивести alert("Login Successful")
// якщо ні - вивести alert("Bad Login")
