const name = "Igor";
const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque inventore eligendi? Impedit exercitationem atque expedita corrupti eaque? Velit dolore quis impedit id commodi hic molestias sunt fuga ex natus!";
console.log(name, text);

const repeatedName = name.repeat(100);
console.log(repeatedName, "repeat");
console.log("Hello".repeat(5));

const firstLetterOfName = name[0];
console.log(firstLetterOfName.repeat(100));

console.log(name.length, "the length of the name");
console.log(text.length, "the length of the text");

const upperCasedName = name.toUpperCase();
console.log(upperCasedName, "upperCasedName");

const loweredName = name.toLowerCase();
console.log(loweredName, "loweredName");

console.log("Abc".toUpperCase());
console.log(text.toUpperCase());

console.log(name, "name");

const slicedName = name.slice(2, 4);
console.log(slicedName);

console.log(name.slice(-4));
console.log("hello".slice(-1));

const name2 = "igor";
const firstLetterOfName2 = name2[0];
const upperCasedName2FirstLetter = firstLetterOfName2.toUpperCase();
const otherName2Part = name2.slice(1);
const name2FromCapital = upperCasedName2FirstLetter + otherName2Part;
console.log(name2FromCapital, "name2FromCapital");

const a = "";
const b = "";

const nameFromCapital2 = `${name2[0].toUpperCase()}${name2.slice(1)} ${
  10 * 10
}`;
console.log(nameFromCapital2);

const name11 = "Igor";
const name12 = "Oleg";
const name13 = "Olena";

// Interpolation
console.log(`${name11} ${name12} ${name13}`.toUpperCase());

const [l1, l2, l3, l4, l5, l6, l7, l8, ...restLetters] = "Hello world";

console.log(l1, l2, l3, l4, l5, l6, l7, l8, restLetters);

const str = "letters";

// const l11 = str[0];
// const l13 = str[3];

// console.log(l11, l13);

// Destructurization

const [l11, _, l13, l14] = str;
console.log(l11, l13, l14);

const str2 = "H*ello ** * world*";
const fixedStr2 = str2.replace("*", "JS");
console.log(fixedStr2, "fixedStr2");

const fixedStr22 = str2.replaceAll("*", "").replaceAll("  ", "");
console.log(fixedStr22, "fixedStr22");

console.log("JavaScript Java".replaceAll("Java", "Type"));

const wordWithSpaces = "  Igor ";
console.log(wordWithSpaces.trimStart());
console.log(wordWithSpaces.trimEnd());
console.log(wordWithSpaces.trim());

const sentence = "JavaScript is awesome";

const isSentenceContainsJS = sentence.includes("is");

console.log(isSentenceContainsJS);
console.log(sentence.includes("hello"));

console.log(sentence.includes("J"));
console.log(sentence.includes("avaScriptt"));

const mergedStrings = sentence.concat(
  " ",
  "hello",
  " ",
  "hello2",
  " ",
  "hello3",
  ` ${100 / 5}`
);
console.log(mergedStrings, "mergedStrings");

console.log("a" + "b" + "c" + " " + "abc");
console.log(`abc${" "}abc`);
console.log("a".concat("b", "c", " ", "abc"));

const str3 = "bbbbbb|aaaaaaaaaaaaaaaabcdea";

console.log(str3.indexOf("a"));
console.log(str3.indexOf("x"));
console.log(str3.lastIndexOf("a"));
console.log(str3.lastIndexOf("?"));
console.log(str3.indexOf("ba"));

// Завдання:

const sentence1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laboriosam nisi vero est perferendis velit eligendi, iusto, illum tempore provident unde fugiat eveniet doloribus beatae pariatur reprehenderit modi dolores quas?";

// Замінити всі слова "amet" на ****
// Вивести нову строку

// Перевірити наявність слова "Lorem" У строці
// Вивести true/false

// Замінити всі пробіли на "--"
// Вивести нову строку

console.log(sentence1.replaceAll("amet", "****"), "task1");
console.log(sentence1.toLowerCase().includes("lorem".toLowerCase()), "task2");
console.log(sentence1.replaceAll(" ", "--"), "task3");

console.log("Hello"[0]);
console.log("Hello"[9]);
console.log("Hello".length);
// H - 0
// e - 1
// l - 2
// l - 3
// 0 - 4

const strExample = "Hello!".repeat(10);

console.log(strExample[strExample.length - 1]);
console.log(strExample[1 + 5]);
console.log(strExample["c"]);

const string1 = "Hello world!";
const check1 = string1.includes("Hello");

const string2 = "Password";
const check2 = string2.includes("P");

if (check1) {
  console.log("Check 1 has been passed");
}

if (check2) {
  console.log("Password has P on the first position");
}

if (string2 === "Password") {
  console.log("Password is correct!");
} else {
  console.log("Password is wrong!");
}

if (string2.includes("P") && string2.includes("o")) {
  console.log("Password has both, letter P and letter o");
}

if (string2.length <= 5) {
  console.log("Password has less than 5 symbols");
} else {
  console.log("Password has more than 5 symbols");
}

// Ternar operator
console.log(
  `Password has ${string2.length <= 5 ? "less" : "more"} than 5 symbols`
);

// Falsy, false - like
const emptyString = "";

if (emptyString) {
  console.log("Empty string console");
}

console.log(Boolean(true && "" && true));

// Завдання

const password1 = "password1";
const password2 = "password2";

// Порівняти паролі (1 - 2) (===) та вивести "Passwords are same" якщо
// вони рівні, та "Passwords are not equal" якщо ні (if-else)

let isPassword1Valid = false;
let isPassword2Valid = false;

// Первірити обидва пароля на наявність літери (w)
// ТА на кількість символів більше за 9 (&&)

// Якщо один з паролів містить цифру 2 - вивести true (||)
