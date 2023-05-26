const result = document.querySelector(".displayDiv");
const concat = document.querySelectorAll(".concat");
const AC = document.getElementById("AC");
const plusOrMinus = document.getElementById("plusOrMinus");
const equals = document.getElementById("equals");

const toAdd = (num1, num2) => (num1 + num2).toFixed(2);
const toSubtract = (num1, num2) =>  (num1 - num2).toFixed(2);
const toMultiply = (num1, num2) => (num1 * num2).toFixed(2);
const toDivide = (num1, num2) => (num1 / num2).toFixed(2);
const toCent = (num1, num2) => (num1 % num2).toFixed(2);

const operate = (num1, operator, num2) => {
  if (operator == '/' && num2 == '0') {
    concat.forEach((con) => {
      con.textContent = "e42";
      con.style.backgroundColor = 'red';
      con.style.color = 'white';
    });
    return 'Beep boop, error 42';
  } else {
    return operator == '+'
      ? toAdd(num1, num2)
      : operator == '-'
      ? toSubtract(num1, num2)
      : operator == '*'
      ? toMultiply(num1, num2)
      : operator == '/'
      ? toDivide(num1, num2)
      : operator == '%'
      ? toCent(num1, num2)
      : 'Ayoo error';
  }
};


AC.addEventListener("click", () => {
  result.textContent = "";
  concat.forEach((button) => {
    button.textContent = button.dataset.value;
  });
});


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
    loopResult = loopResult = operate(num1, operatorsArray[i], num2);
    num1 = loopResult;
    num2 = numbersArray[i+2];
  }
  console.log(loopResult + " loop result");
  return loopResult;
}