
let num1 = prompt('Please choose a number');
let num2 = prompt('Please choose a number');
let operator = prompt('Please choose an operator')

operate(operator, num1, num2);


function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      add(num1,num2);
      break;
    case '-':
      subtract(num1,num2);
      break;
    case '*':
      multiply(num1,num2);
      break;
    case '/':
      divide(num1,num2);
      break;
  }
}


function add(num1, num2) {
  let sum = (num1 + num2);
  console.log(sum);
}

function subtract(num1, num2) {
  let total = (num1 - num2);
  console.log(total);
}

function multiply(num1, num2) {
 let total = (num1 * num2);
 console.log(total);
}

function divide(num1, num2) {
  let total = (num1 / num2);
  console.log(total);
}