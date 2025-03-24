//  =  - memory based operator

// Math basic operators
console.log(5 > 6);
console.log(1 < 7);

console.log(5 >= 5);
console.log(5 <= 5);

console.log("hello".length == 5 + 5 * 100);

const a = 10;
const b = 15;

console.log(a + 5 == b);

const str1 = "H";
const str2 = "!";

console.log(str1.length == str2.length);
console.log(str1 == str2);
console.log("Hello" == "hello");

console.log(str1.length === str2.length);
console.log(100 == "100");
console.log(100 === "100");

console.log(true == "true");
console.log(true == true);

// || && !

// !

console.log(!true);
console.log(!false);
console.log(!(10 > 5));
console.log("password" != "password1"); // not(==)
console.log("password" !== "password2"); // not(===)

console.log(!("password" === "password"));

// &&

const res1 = 10 > 5 && 10 > 6 && 11 > 10 && "a" === "a" && true;
console.log(res1);

// ||

const res2 = 10 > 3 || 11 < 1 || 10 > 5;

console.log(res2);

console.log(false || false || true);

if (true) {
  console.log(true, "!!!");
}

if (10 > 5) {
  console.log("10 is grater than 5");
}

if (5 > 10) {
  console.log(":(");
}

let isAdmin = false;

if (10 < 5) {
  isAdmin = true;
} else {
  isAdmin = false;
}

console.log(isAdmin, "isAdmin");
