const display = document.getElementById('display-field');
const allNumbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let firstNum = '';
let secondNum = '';
let operation = null;

function operate () {
    let prevNum = parseFloat(firstNum);
    let nextNum = parseFloat(secondNum);
    let result; 

    if (operation == '+') {
        result = prevNum + nextNum;
    }
    else if (operation == '-') {
        result = prevNum - nextNum;
    }
    else if (operation == '/') {
        result = prevNum / nextNum;
    }
    else if (operation == '*') {
        result = prevNum * nextNum;
    }

    firstNum = result;
    secondNum = '';
    operation = null;
};