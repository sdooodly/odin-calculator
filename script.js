const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);
// const ACbtn = document.getElementById(AC);

const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

const operate = (num1, operator, num2) => {
  return operator == '+'
    ? add(num1, num2)
    : operator == '-'
    ? subtract(num1, num2)
    : operator == '*'
    ? multiply(num1, num2)
    : operator == '/'
    ? divide(num1, num2)
    : 'error'
}

console.log('hello')
console.log(operate(1, '*', 25))
console.log(operate(1, '+', 25))
console.log(operate(1, '-', 25))
console.log(operate(1, '/', 25))
