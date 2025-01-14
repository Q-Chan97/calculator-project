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
let showingResult = false;

allNumbers.forEach((number) => {
  number.addEventListener('click', enterNumber)
})

operators.forEach((operator) => {
  operator.addEventListener('click', enterOperator)
})

equal.addEventListener('click', enterEquals);

function updateDisplay () { // Updates display with each event
  display.value += currentValue;
  showingResult = false;
}

function enterNumber (e) { // Stores display value as the first number
  if (showingResult = true) {
    currentValue = null;
  }
  let operand = e.target.value;
  if (currentValue == null || currentValue == 0) {
    currentValue = operand;
  }
  else currentValue += operand;

  updateDisplay();
}

function enterOperator (e) { // Stores display value in separate variable and reads operator for math to happen
  showingResult = false;

  if (operator != null && firstNum != null && currentValue != null) {
    secondNum = currentValue;
    let result = operate(firstNum, secondNum, operator);
    currentValue = result;
  }

  firstNum = currentValue;
  currentValue = null;
  operator = e.target.value;
}

function enterEquals() {
  let result = String(operate(firstNum, secondNum, operator));
  currentValue += result;
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