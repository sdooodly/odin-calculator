// console.log('hello')
const result = document.querySelector(".displayDiv");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const AC = document.getElementById("AC");
const plusOrMinus = document.getElementById("plusOrMinus");
const percentage = document.getElementById("percentage");
const divide = document.getElementById("divide");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const multiply = document.getElementById("multiply");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const subtract = document.getElementById("subtract");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const add = document.getElementById("add");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const equals = document.getElementById("equals");

let num1 = "", num2 = "";
let operatorSign;
// console.log('hello0222')

const toAdd = (num1, num2) => num1 + num2
const toSubtract = (num1, num2) => num1 - num2
const toMultiply = (num1, num2) => num1 * num2
const toDivide = (num1, num2) => num1 / num2

const operate = (num1, operator, num2) => {
  return operator == '+'
    ? toAdd(num1, num2)
    : operator == '-'
    ? toSubtract(num1, num2)
    : operator == '*'
    ? toMultiply(num1, num2)
    : operator == '/'
    ? toDivide(num1, num2)
    : 'error';
}

// console.log('hello2')
// console.log(operate(1, '*', 25))
// console.log(operate(1, '+', 25))
// console.log(operate(1, '-', 25))
// console.log(operate(1, '/', 25))

AC.addEventListener("click", () => {
  console.log("click AC gay");
  result.textContent = "";
  })
//not working on subsequent clicks
plusOrMinus.addEventListener("click", () => {
    console.log("click +/- gay");
    const resultNumber = parseFloat(result.textContent);
    result.textContent = -Math.sign(resultNumber) * resultNumber;
  });

number.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("click +/- gay"+ element.textContent);
    result.textContent = element.textContent;
    if(num1 == "") num1 = element.textContent;
    else num2 = element.textContent;    
  });
})

operator.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("click +/- gay"+ element.textContent);
    result.textContent = element.textContent;
    operatorSign = element.textContent;   
  });
})

//not this way, call operate when = is clicked

if(!(num1 == "") && !(num2 == "") && !(operatorSign == "")){
  operate(num1, operatorSign, num2)
}
//write comments