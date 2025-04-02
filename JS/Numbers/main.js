Number;
Boolean;
String;

console.log(String(10));
console.log(Number("10"));

const n = new Number(10);
console.log(n, "n");

const str = new String("Hello");
console.log(str, "str");

const bool = new Boolean(true);
console.log(bool);

const n1 = 100;
const n2 = 10.0982753516;

console.log(n1.toString());
console.log(n2.toFixed(2));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

Infinity;
NaN;
Number.NaN;

console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof "Hello word!");
console.log(typeof true);

console.log("10" + 10);
console.log(10 - "10");
console.log(10 * "10");
console.log(10 / "10");

console.log("10" * true);
console.log("10" * false);

console.log(1 / 0);
console.log(1 + undefined);

console.log(100 / undefined);
console.log(Number(null));

console.log(100 / undefined + Infinity);

console.log(NaN - Infinity);
console.log(Infinity - NaN);

console.log(Infinity - Infinity);

for (let i = 0; i < 10; i = i + 1) {
  console.log("!!!");
}

console.log(Infinity - 10000);

const attempts = 100_000_000_000;
const n4 = 1_0;

console.log(n4);

console.log(Number.isNaN(Infinity - Infinity), Infinity - Infinity);

if (Number.isNaN(Infinity - Infinity)) {
  console.log("Invalid calculation");
} else {
  // Do what was needed
}

console.log(isNaN(Infinity - Infinity));

console.log(Number.isSafeInteger(1));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));

console.log(Number.isInteger(10), "isInteger(10)");
console.log(Number.isInteger(0.9), "isInteger(0.9)");
console.log(Number.isInteger(-1000), "isInteger(-1000)");

console.log(Number.isFinite(Infinity), "isFinite(Infinity)");
console.log(Number.isFinite(10), "isFinite(10)");

console.log(Number.isFinite(1 / 0), "isNaN(Infinity)");

console.log(Number.parseInt("200 300 100 Hello"), "parseInt('100')");
console.log(Number("100 Hello"), "Number('100 Hello')");
console.log(+"100 Hello", '+"100 Hello"');

console.log(Number.parseFloat("0.97 Hello"), "parseFloat('100')");
console.log(Number.parseInt("0.91"), "parseInt('100')");

parseFloat();
parseInt();

// Завдання:
const alphabet = "abcdefghijklmnopqrstuvwxyz";

let word = "hello from js";
let sum = 0;

// Порахувати суму індексів всіх літер, що є у строці word, спираючись на alphabet
// Пробіли та інші розділові знаки рахуються за 0

// indexOf

console.log(alphabet.indexOf("b"));

// Завдання:

const n5 = 0.78136;
let symbolsAfterComma = 3;

// Реалізувати логіку методу .toFixed()
// на числі n5

// (0.5555).toFixed(symbolsAfterComma) => 0.781
// slice, indexOf, toString
// повернути строку (string)
