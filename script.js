/*
function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      add(num1,num2);
      break;
    case '-':
      subtract(num1,num2);
      break;
    case '×':
      multiply(num1,num2);
      break;
    case '÷':
      divide(num1,num2);
      break;
  }
}*/

let num1=''
let tempNum1 =''
let total =''
let operator ='';


//Allows numbers to get displayed on calculator
const numberButton = document.querySelectorAll('.number');
const userInput = document.querySelector('.userInput');

numberButton.forEach((button => {
  button.addEventListener('click', function(e) {
    userInput.append(button.textContent);
    num1 = userInput.textContent;
    
  })
}))

//Allows number to get displayed
const equal = document.querySelector('.equal');
const result = document.querySelector('.result');

equal.addEventListener('click', function(e) {
  total = num1;
  result.append(total);
})

//All Clear function
const display = document.querySelector('.display');
const allClear = document.querySelector('.allClear')

allClear.addEventListener('click', (e) => {
  location.reload()
})

//Delete function
const del = document.querySelector('.delete');

del.addEventListener('click', (e) => {
  num1 = num1.slice(0, -1);
  userInput.textContent = num1;
})


//operator save function
const operand = document.querySelectorAll('.operand');

operand.forEach((button) => {
  button.addEventListener('click', (e)=> {
    userInput.append(button.textContent);
    num1 = tempNum1;
    operator = button.textContent;
    console.log(operator)
  })
})


//Add function
function add(num1, num2) {
  let total = (num1 + num2);
  console.log(total);
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

