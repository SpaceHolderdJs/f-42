const str = "Hello";

const tag1 = "[public]General";
const tag2 = "[private]Personal";

console.log(str.includes("H"), "includes");
console.log(str.startsWith("h"), "starts with");

const isPublicTag = tag1.startsWith("[public]");
console.log(isPublicTag, "isPublicTag");

const isPrivateTag = tag2.startsWith("[private]");
console.log(isPrivateTag, "isPrivateTag");

console.log(str.endsWith("!!!Hello"), "ends with");

console.log(str.search("ooolll"), "search");
console.log(str.indexOf("l", 3), "indexOf");

const str2 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed rerum cum tenetur recusandae quo similique laborum, ducimus omnis labore impedit culpa eos quod reprehenderit quisquam alias nobis voluptatem ullam.";

const allVowels = "aeiou";
const allConsonants = "bcdsfghjklmnpqrtvwxyz";

let vowels = 0;
let consonants = 0;
let spaces = 0;
let commas = 0;
let dots = 0;

for (const letter of str2.toLowerCase()) {
  // [Note]: vowels
  if (allVowels.includes(letter)) {
    vowels = vowels + 1;
  }

  // [Note]: consonants
  if (allConsonants.includes(letter)) {
    consonants = consonants + 1;
  }

  // [Note]: spaces
  if (letter === " ") {
    spaces = spaces + 1;
  }

  // [Note]: commas
  if (letter === ",") {
    commas = commas + 1;
  }

  // [Note]: dots
  if (letter === ".") {
    dots = dots + 1;
  }
}

console.log(vowels, "vowels");
console.log(consonants, "consonants");
console.log(spaces, "spaces");
console.log(commas, "commas");
console.log(dots, "dots");

const str3 = "Hello World";

let capitalLetters = 0;
let lowerLetters = 0;

for (const letter of str3.replaceAll(" ", "")) {
  // Завдання: порахувати всі великі та малі літери

  if (letter === letter.toUpperCase()) {
    capitalLetters = capitalLetters + 1;
  } else {
    lowerLetters = lowerLetters + 1;
  }
}

console.log(capitalLetters, "capitalLetters");
console.log(lowerLetters, "lowerLetters");

const n1 = 100;
+1;

// Convert number to string

console.log(String(n1));
console.log(`${n1}`);
console.log(n1.toString());

const s1 = "100";

// Convert string to number

console.log(Number(s1));
console.log(+s1);

const valueToCalculate = "+9-2+1-7+8-1-3";
let calculationResult = 0;

let currentOperation = valueToCalculate[0]; // "+", "-"

// Завдання:
// Вивести (порахувати) фінальний результат після виконання всіх
// операцій valueToCalculate

// 5

for (const operationOrNumber of valueToCalculate) {
  if ("+-".includes(operationOrNumber)) {
    currentOperation = operationOrNumber;
  } else {
    const number = Number(operationOrNumber);

    if (currentOperation === "+") {
      calculationResult = calculationResult + number;
    }

    if (currentOperation === "-") {
      calculationResult = calculationResult - number;
    }
  }
}

console.log(calculationResult, "calculationResult");

console.log(
  "+9-2+1-7+8-1-3".split("").reduce(
    (acc, current) => {
      "+-".includes(current)
        ? (acc.operation = current)
        : (acc.result =
            acc.operation === "+"
              ? acc.result + +current
              : acc.result - +current);
      return acc;
    },
    { operation: "+", result: 0 }
  )
);

// Завдання:
const symbols = "-_-----_--_--_-_-_-_-_-";

for (const s of symbols) {
}

// Порахувати символи "-" та "_"
// Вивести той символ, якого більше у строці

// 15 -
// 8 _

// "-"
