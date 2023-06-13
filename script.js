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

//console.log(toSubtract(5, 64))

const operate = (num1, operator, num2) => {
  if (operator == '/' && num1 == '0' && num2 == '0') {
    concat.forEach((con) => {
      con.textContent = "Err";
      con.style.backgroundColor = 'black';
      con.style.color = 'white';
    });
    return 'Lost in Vogon poetry';
  } else if (operator == '/' && num2 == '0') {
    concat.forEach((con) => {
      con.textContent = "Err";
      con.style.backgroundColor = 'red';
      con.style.color = 'white';
    });
    return 'Beep boop, error 42';
  } else {
    console.log("num2" + num2)
    console.log("operator" + operator)
    console.log(`inside operate` + num1 + operator + num2);
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
  concat.forEach((con) => {
    con.textContent = con.dataset.value;
    con.style.backgroundColor = '#ffffd2';
    con.style.color = 'black';
  });
});

plusOrMinus.addEventListener("click", () => result.textContent = -(result.textContent));
concat.forEach((element) => {
  element.addEventListener("click", () => result.textContent += element.textContent);
});
const calculate = (expression) => {
  //const numbersArray = expression.split(/[+-/*%]/).map(parseFloat);
  //check regex, old commit
  //const numbersArray = expression.match(/[+-]?\d+(\.\d+)?/g).map(parseFloat);
  const numbersArray = expression.match(/\d+(\.\d+)?/g).map(parseFloat);
  console.log("numarray" + numbersArray)
  const operatorsArray = expression.split('').filter(exp => /[+-/*%]/.test(exp) && exp !== '.');
  let num1 = numbersArray[0], num2 = numbersArray[1], loopResult;
  for(let i = 0; i < numbersArray.length - 1; i++){
    console.log(num2 + " num2");
    console.log("operate sub" + operate(num1, operatorsArray[i], num2) );
    loopResult = operate(num1, operatorsArray[i], num2);
    num1 = loopResult;
    num2 = numbersArray[i+2];
  }
  console.log(loopResult + " loop result");
  return loopResult;
}
equals.addEventListener("click", () => result.textContent = calculate(result.textContent));

