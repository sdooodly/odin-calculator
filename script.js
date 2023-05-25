console.log('hello')
const result = document.querySelector(".displayDiv");
const ACB = document.getElementById("AC");
const plusOrMinusB = document.getElementById("plusOrMinus");
const percentageB = document.getElementById("percentage");
const divideB = document.getElementById("divide");
const sevenB = document.getElementById("seven");
const eightB = document.getElementById("eight");
const nineB = document.getElementById("nine");
const multiplyB = document.getElementById("multiply");
const fourB = document.getElementById("four");
const fiveB = document.getElementById("five");
const sixB = document.getElementById("six");
const subtractB = document.getElementById("subtract");
const oneB = document.getElementById("one");
const twoB = document.getElementById("two");
const threeB = document.getElementById("three");
const addB = document.getElementById("add");
const zeroB = document.getElementById("zero");
const dotB = document.getElementById("dot");
const equalsB = document.getElementById("equals");

console.log('hello0222')

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



console.log('hello2')
console.log(operate(1, '*', 25))
console.log(operate(1, '+', 25))
console.log(operate(1, '-', 25))
console.log(operate(1, '/', 25))

ACB.addEventListener("click", () => {
  console.log("click AC gay");
  result.textContent = "";
  })