// // DOM

// console.log(new Object(document), 'document');

// // Selectors
// const squares = document.getElementsByClassName('square');
// console.log(squares, 'squares by class');

// [...squares].forEach((div, i) => {
//   console.log(div, 'div');

//   div.textContent = `div number ${i + 1}`;

//   div.onclick = () => {
//     alert(`Hello, I am div-${i + 1}`);
//   };
// });

// // const button1 = document.createElement('button');
// // button1.textContent = 'Button1';

// // button1.onclick = () => {
// //   alert('I am a button!');
// // };

// // document.body.appendChild(button1);

// // Selectors by id
// const elementTypeInput = document.getElementById('element-name');
// const elementContentInput = document.getElementById('element-content');
// const elementSrcInput = document.getElementById('element-src');

// // Завдання
// // 1 Отримати елемент за ID element-src
// // 2 Додати логіку отримання значення елементу (value)
// // 3 Додати поле src у створюваний елемент

// const createElementButton = document.getElementById('create-element');

// createElementButton.onclick = () => {
//   const elementType = elementTypeInput.value;
//   const elementContent = elementContentInput.value;
//   const elementSrc = elementSrcInput.value;

//   if (!elementType || !elementContent) {
//     alert('No Content or Type provided');
//     return;
//   }

//   const element = document.createElement(elementType);
//   element.textContent = elementContent;
//   element.src = elementSrc;

//   document.body.appendChild(element);

//   elementTypeInput.value = '';
//   elementContentInput.value = '';
//   elementSrcInput.value = '';
// };

class Calculator {
  constructor(parent) {
    this.parent = parent;
  }

  init() {
    const calculatorBody = document.createElement('div');
    calculatorBody.className = 'calculator-body';
    this.parent.appendChild(calculatorBody);

    const calculatorInput = document.createElement('input');
    calculatorInput.type = 'text';
    calculatorBody.appendChild(calculatorInput);

    ['+', '-', '*', '/'].forEach((mathAction) => {
      const actionButton = document.createElement('button');
      actionButton.className = 'calculator-action-button';
      actionButton.textContent = mathAction;

      calculatorBody.appendChild(actionButton);

      actionButton.onclick = () => {
        switch (mathAction) {
          case '+': {
            calculatorInput.value += mathAction;
            return;
          }

          case '-': {
            calculatorInput.value += mathAction;
            return;
          }

          case '*': {
            calculatorInput.value += mathAction;
            return;
          }

          case '/': {
            calculatorInput.value += mathAction;
            return;
          }

          default: {
            return;
          }
        }
      };
    });

    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].forEach((number) => {
      const numberButton = document.createElement('button');
      numberButton.className = 'calculator-number-button';
      numberButton.textContent = number;

      calculatorBody.appendChild(numberButton);

      numberButton.onclick = () => {
        calculatorInput.value += number;
      };
    });

    ['(', ')'].forEach((br) => {
      const brButton = document.createElement('button');

      brButton.textContent = br;

      calculatorBody.appendChild(brButton);

      brButton.onclick = () => {
        calculatorInput.value += br;
      };
    });

    const equalsButton = document.createElement('button');
    equalsButton.className = 'calculator-equals-button';

    equalsButton.textContent = '=';

    calculatorBody.appendChild(equalsButton);

    equalsButton.onclick = () => {
      const result = eval(calculatorInput.value);

      if (isNaN(result)) {
        alert('Wrong calculation!');
        return;
      }

      calculatorInput.value = result;
    };

    const clearButton = document.createElement('button');
    clearButton.className = 'calculator-clear-button';

    clearButton.textContent = 'C';

    calculatorBody.appendChild(clearButton);

    clearButton.onclick = () => {
      calculatorInput.value = '';
    };
  }
}

new Calculator(document.body).init();

// HW
// Додати кнопку очищення інпуту у калькулятор (value)
// Додати кнопки для дужок ()
// Додати власні стилі для калькулятора (на ваш смак)
