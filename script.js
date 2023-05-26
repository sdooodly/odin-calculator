const result = document.querySelector(".displayDiv");
const concat = document.querySelectorAll(".concat");
const AC = document.getElementById("AC");
const plusOrMinus = document.getElementById("plusOrMinus");
const dot = document.getElementById("dot");
const equals = document.getElementById("equals");

const toAdd = (num1, num2) => num1 + num2;
const toSubtract = (num1, num2) => num1 - num2;
const toMultiply = (num1, num2) => num1 * num2;
const toDivide = (num1, num2) => num1 / num2;
const toCent = (num1, num2) => num1 % num2;

const operate = (num1, operator, num2) => operator == '+'
    ? toAdd(num1, num2)
    : operator == '-'
    ? toSubtract(num1, num2)
    : operator == '*'
    ? toMultiply(num1, num2)
    : operator == '/'
    ? toDivide(num1, num2)
    : operator == '%'
    ? toCent(num1, num2)
    : 'error';

// console.log(operate(1, '*', 25))

AC.addEventListener("click", () => {
  console.log("click AC gay");
  result.textContent = "";
  })
  
plusOrMinus.addEventListener("click", () => {
    console.log("click +/- gay");
    const resultNumber = parseFloat(result.textContent);
    result.textContent = -Math.sign(resultNumber) * resultNumber;
  });

// number.forEach((element) => {
//   element.addEventListener("click", () => {
//     console.log("click +/- gay"+ element.textContent);
//     result.textContent = element.textContent;
//     if(num1 == "") num1 = element.textContent;
//     else num2 = element.textContent;    
//     numbersFunc(num1, num2);
//   });
// })

// operator.forEach((element) => {
//   element.addEventListener("click", () => {
//     console.log("click"+ element.textContent);
//     result.textContent = element.textContent;
//     operatorSign = element.textContent;  
//     operatorsFunc(operatorSign);
//   });
// })

// const numbersFunc = (num1, num2) => {
//   const operator = operatorsFunc
// }
// //not this way, call operate when = is clicked

// if(!(num1 == "") && !(num2 == "") && !(operatorSign == "")){
//   operate(num1, operatorSign, num2)
// }

concat.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("click"+ result.textContent + element.textContent);
    result.textContent += element.textContent;
    // if(num1 == "") num1 = element.textContent;
    // else num2 = element.textContent;    
  });
})

equals.addEventListener("click", () => {
  console.log("= gay");
  result.textContent = calculate(result.textContent);
});

const calculate = (expression) => {
  const numbersArray = expression.split(/[+-/*%]/).map(parseFloat);
  const operatorsArray = expression.split('').filter(exp => /[+-/*%]/.test(exp))
  console.log(numbersArray + "numbersarrya");
  console.log(operatorsArray + "operatorsArray");
  let num1 = numbersArray[0], num2 = numbersArray[1], loopResult;
  for(let i = 0; i < numbersArray.length - 1; i++){
    console.log(i + " i");
    console.log(num1 + operatorsArray[i] + num2 + "goin to operate");
    loopResult = operate(num1, operatorsArray[i], num2);
    num1 = loopResult;
    num2 = numbersArray[i+2];
    console.log(loopResult + " loop result");
  }
  return loopResult;
}