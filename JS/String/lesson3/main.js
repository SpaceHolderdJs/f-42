// Loops [string]

const str1 = "Hello";

for (const letter of str1) {
  console.log(letter);
}

for (let i = 5; i < 15; i = i + 1) {
  console.log(`Iteration: ${i}`);
}

console.log(str1.repeat(5));

let strToRepeat = "A";
const repeatTimes = 10;

for (let i = 0; i < repeatTimes; i = i + 1) {
  strToRepeat = strToRepeat.concat("A");
  console.log(strToRepeat);
}

const str2 = "Hello!";

let lLetters = 0;

for (let i = 0; i < str2.length; i = i + 1) {
  if (str2[i] !== "l") {
    // i = i + 1;
    continue;
  } else {
    console.log(str2[i], i);
    lLetters = lLetters + 1;
  }
  //   console.log(str2[i - 1], str2[i], str2[i + 1]);
}

console.log(lLetters, "lLetters");

// Вивести всі парні числа від 0 до 15
// Вивести всі числа, що кратні 3 від 0 до 15

0 - 15;
0, 2, 4, 6, 8, 10, 12, 14;

for (let i = 0; i < 15; i = i + 1) {
  if (i % 10 === 0) {
    console.log(i);
  }
}

for (let x = -20; x < 100; x = x + 1) {
  const part1 = 2 * (x + 8);
  const part2 = 18 + x;

  if (part1 === part2) {
    console.log(`Solution is: ${x}`);
    break;
  } else {
    console.log(`Value ${x} is wrong`);
  }
}

let n = 2;
let m = 5;
// Піднести [х] у [m] степінь

for (let i = 1; i < m; i++) {
  n = n * 2;
  console.log(i, n);
}

console.log(n, "n");
