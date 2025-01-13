const display = document.querySelector('.input-field');
const allNumbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const positiveNegative = document.querySelector('.posNeg');

let firstNum = null;
let secondNum = null;
let operator = null;
let currentValue = '0';

allNumbers.forEach((number) => {
  number.addEventListener('click', enterNumber)
})

function updateDisplay () { // Updates display with each event
  display.value += currentValue;
}

function enterNumber (e) {
  let operand = e.target.value;

  currentValue += operand;

  updateDisplay();
}

function add (num1, num2) {
  return parseFloat(num1 + num2);
}

function subtract (num1, num2) {
  return parseFloat(num1 - num2);
}

function multiply (num1, num2) {
  return parseFloat(num1 * num2);
}

function divide (num1, num2) {
  if (num2 == 0) {
    return NaN;
  }
  return parseFloat(num1 / num2);
}

function operate (firstNum, secondNum, operator) {
  switch (operator) {
    case "+": 
      return add(firstNum, secondNum);
    
    case "-":
      return subtract(firstNum, secondNum);
    
    case "*":
      return multiply(firstNum, secondNum);

    case "/":
      return divide(firstNum, secondNum);
  }
}