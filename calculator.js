const display = document.getElementById('display-field');
const allNumbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let firstNum = '';
let secondNum = '';

allNumbers.forEach((button) => {
    button.addEventListener('click', function() {
        display.textContent += button.allNumbers.value;
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