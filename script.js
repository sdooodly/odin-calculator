const result = document.querySelector(".displayDiv");
const concat = document.querySelectorAll(".concat");
const AC = document.getElementById("AC");
const plusOrMinus = document.getElementById("plusOrMinus");
const equals = document.getElementById("equals");
// will this work
// const { displayDiv: result, concat, AC, plusOrMinus, dot, equals } = document;

const operate = {
  '+': (num1, num2) => (num1 + num2).toFixed(2),
  '-': (num1, num2) => (num1 - num2).toFixed(2),
  '*': (num1, num2) => (num1 * num2).toFixed(2),
  '/': (num1, num2) => (num1 / num2).toFixed(2),
  '%': (num1, num2) => (num1 % num2).toFixed(2)
};

AC.addEventListener("click", () => result.textContent = "");

plusOrMinus.addEventListener("click", () => result.textContent = -Math.sign(result.textContent) * result.textContent);

concat.forEach((element) => {
  element.addEventListener("click", () => result.textContent += element.textContent);
})

equals.addEventListener("click", () => result.textContent = calculate(result.textContent));

const calculate = (expression) => {
  //const numbersArray = expression.split(/[+-/*%]/).map(parseFloat);
  const numbersArray = expression.match(/[+-]?\d+(\.\d+)?/g).map(parseFloat);
  const operatorsArray = expression.split('').filter(exp => /[+-/*%]/.test(exp) && exp !== '.');
  let num1 = numbersArray[0], num2 = numbersArray[1], loopResult;
  for(let i = 0; i < numbersArray.length - 1; i++){
    loopResult = operate[operatorsArray[i]](num1, num2);
    num1 = loopResult;
    num2 = numbersArray[i+2];
  }
  console.log(loopResult + " loop result");
  return loopResult;
}