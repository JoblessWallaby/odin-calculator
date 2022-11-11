
let num1 = '';
let num2 = '';
let tempNum1 = '';
let operator ='';
let previousOperator = '';
let dotClick = false;



const userInput = document.querySelector('.userInput');
const result = document.querySelector('.result');
const numberButton = document.querySelectorAll('.number');
const operandButton = document.querySelectorAll('.operand');
const equal = document.querySelector('.equal');


numberButton.forEach((numButton) => {
  numButton.addEventListener('click', (e) => {
    if(e.target.innerText === '.' && !dotClick) {
      dotClick = true;
    } else if (e.target.innerText === '.' && dotClick){
      return;
    }
    tempNum1 += e.target.innerText;
    userInput.innerText = tempNum1;

    if(num1 !== '') {
      num2 = parseFloat(tempNum1);
    }

    if (num1 && num2 && operator) {
      operate(operator, num1, num2)
    }
  })
})


operandButton.forEach((operatorButton) => {
  operatorButton.addEventListener('click', (e) => {
    num1 = parseFloat(tempNum1);
    tempNum1 = '';
    operator = operatorButton.textContent;
  })

})



equal.addEventListener('click', (e) => {
  console.log(`Num 1: ${num1} Num 2: ${num2} Operand: ${operator}`)
})

//Operate Function
function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      add(num1, num2);
      break;
    case '-':
      subtract(num1, num2);
      break;
    case '×':
      multiply(num1, num2);
      break;
    case '÷':
      divide(num1,num2);
      break;
    case '%':
      modulus(num1, num2);
      break;
  }
}

//Add Function 
function add (num1,num2) {
  let total = (num1 + num2);
  console.log(total)
}

//Subtract Function
function subtract (num1,num2) {
  let total = (num1 - num2);
  console.log(total)
}

//Multiply Function
function multiply (num1,num2) {
  let total = (num1 * num2);
  console.log(total)
}

//Divide Function
function divide (num1,num2) {
  let total = (num1 / num2);
  console.log(total)
}

//Modulus Function
function modulus (num1,num2) {
  let total = (num1 % num2);
  console.log(total)
}
