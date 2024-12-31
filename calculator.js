const display = document.querySelector('.input-field');
const allNumbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let previousValue = '';
let currentValue = '';

let firstNum = '';
let secondNum = '';

allNumbers.forEach((numbers) => {
    numbers.addEventListener('click', function() {
        display.textContent += numbers.value;
        currentValue = parseFloat(display.innerText);
    })
})
;

function operate() {
    num1 = parseFloat(firstNum);
    num2 = parseFloat(secondNum);
    if (operators == '+') {
      num1 += num2;
    } else if (operators == '-') {
      num1 -= num2;
    } else if (operators == '*') {
      num1 *= num2;
    } else {
      num1 /= num2;
    }
};

operators.forEach((operator) => {
    operator.addEventListener('click', function() {
        display.textContent += operator.value;
        currentValue = display.innerText;
    })
});

clear.addEventListener('click', () => display.innerText = "");