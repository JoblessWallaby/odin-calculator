/*
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
}*/

//Allows numbers to get displayed on calculator
const numberButton = document.querySelectorAll('.number');
const userInput = document.querySelector('.userInput');

numberButton.forEach((button => {
  button.addEventListener('click', function(e) {
    userInput.append(button.textContent);
  })
}))


//Add function
function add(num1, num2) {
  let sum = (num1 + num2);
  console.log(sum);
}
//Subtract function
function subtract(num1, num2) {
  let total = (num1 - num2);
  console.log(total);
}
//Multiply function
function multiply(num1, num2) {
 let total = (num1 * num2);
 console.log(total);
}
//Divide function
function divide(num1, num2) {
  let total = (num1 / num2);
  console.log(total);
}

