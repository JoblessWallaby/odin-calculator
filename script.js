
let num1 = '';
let num2 = '';
let tempNum1 = '';
let inputDis = ''
let operator ='';
let previousOperator = '';
let dotClick = false;
let total;
let operatorClicked = false;
let newTotal;



const userInput = document.querySelector('.userInput');
const result = document.querySelector('.result');
const numberButton = document.querySelectorAll('.number');
const operandButton = document.querySelectorAll('.operand');
const equal = document.querySelector('.equal');

//JS for each number pressed
numberButton.forEach((numButton) => {
  numButton.addEventListener('click', (e) => {
//Checks if a dot is clicked, if not, dot button is clickable
    if(e.target.innerText === '.' && !dotClick) {
      dotClick = true;
//If a dot is already on the calculator, returns
    } else if (e.target.innerText === '.' && dotClick){
      return;
    }
//Takes target text of each button and it gets added to inputDis
    inputDis += e.target.innerText;
//tempNum1 stores inputDis content
    tempNum1 += inputDis;
//inputDis content gets added to userInput display text
    userInput.innerText += inputDis;
//inputDis gets cleared after each input, number is stored in tempNum1
    inputDis = '';
//Operatorclicked becomes false allowing for another operator to get clicked
    operatorClicked = false
//If num1 is not empty, the value gets stored as num2
    if(num1 !== '') {
      num2 = parseFloat(tempNum1);
    }
//If there are two numbers and an operator. The values get calculated.
    if (num1 && num2 && operator) {
      operate(operator, num1, num2)
      newTotal = total;
      console.log(newTotal)
      
    }

  })
})


operandButton.forEach((operatorButton) => {
  operatorButton.addEventListener('click', (e) => {
//If statement that checks if an operator is allowed to be placed.
    if (!operatorClicked && userInput.innerText == '') {
      return;
    } else if (!operatorClicked && userInput.innerText !== '' ) {
      operatorClicked = true;
    } else if (operatorClicked == true) {
      return;
    }
//num1 stores tempNum1 as an integer
    num1 = parseFloat(tempNum1);
//tempNum1 gets cleared so it can store new data.
    tempNum1 = '';
    dotClick = false;
//Operator gets added to userInput display.
    userInput.innerText += e.target.innerText;
//Operator becomes previousOperator if not empty
    if (operator !== '') {
      previousOperator = operator;
    }
    operator = operatorButton.textContent
//num1 becomes newTotal allowing for chain operations
    if (num2 !== '') {
      num1 = newTotal;
      console.log(newTotal);
    }
    
  })
})

//Equal Function
equal.addEventListener('click', (e) => {
  console.log(`Num 1: ${num1} Num 2: ${num2} Operand: ${operator} Previous operator ${previousOperator} Current operator ${operator}`)
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
  total = (num1 + num2);
}

//Subtract Function
function subtract (num1,num2) {
  total = (num1 - num2);

}

//Multiply Function
function multiply (num1,num2) {
  total = (num1 * num2);

}

//Divide Function
function divide (num1,num2) {
  total = (num1 / num2);

}

//Modulus Function
function modulus (num1,num2) {
  total = (num1 % num2);
 
}
