let a = 10;
let b = 12;

// "+, -, * /"
let action = "-";

let res = 0;

switch (action) {
  case "-": {
    res = a - b;
    break;
  }

  case "*": {
    res = a * b;
    break;
  }

  case "/": {
    res = a / b;
    break;
  }

  case "+":
  default: {
    res = a + b;
    break;
  }
}

console.log(res, "res");

const role = "ADMIN";

let isOperationPermitted = false;

switch (role.toUpperCase()) {
  case "MANAGER":
  case "ADMIN": {
    isOperationPermitted = true;
    break;
  }

  case "GUEST":
  case "UNKNOWN":
  default: {
    isOperationPermitted = false;
    break;
  }
}

console.log(
  `Operation permissions status: ${isOperationPermitted} for role: ${role}`
);

// if (role === "ADMIN" || role === "MANAGER") {
//   isOperationPermitted = true;
// } else if ()  {
//   isOperationPermitted = false;
// } else {}

let bool = false;

switch (bool) {
  case true: {
    console.log(true, "!!!");
    break;
  }

  case false:
  default: {
    console.log(false, "!!!");
    break;
  }
}

let n1 = 10;

switch (n1) {
  case 10: {
    console.log("10", "!!!");
    break;
  }

  case 11: {
    console.log("11", "!!!");
    break;
  }

  default: {
    console.log(":(");
    break;
  }
}

// Завдання:

// 1.
let status = 201;

// 200 - "OK"
// 201 - "Created"
// 203 - "Modified"
// 204 - "No content"
// 404 - "Not found"
// 500 - "Internal server error"

// Описати switch (case)
// Який буде виводи відповідне повідомлення для кожного статусу
// console.log()
// default - 500
// break!;

// 2.
let x = 0;

const part1 = 2 * x + 3 * x;
const part2 = x * 0;

// Написати for з лічильником, підбираючи значення для x
// [-15, 15] + 1
// Якщо значення знайшлося раніше - зупиняти цикл
// Вивести значення (корінь рівняння x)
// part1 === part2
