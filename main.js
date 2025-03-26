const valueToCalculate = "+9-2+1-7+8-1-3";
let calculationResult = 0;

let currentOperation = valueToCalculate[0]; // "+" or "-"

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

console.log(calculationResult, "result");
