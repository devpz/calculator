const resultElement = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let currentOperator = "";

function buttonClick(event) {
  const buttonValue = event.target.textContent;

  if (buttonValue >= "0" && buttonValue <= "9") {
    currentInput += buttonValue;
  } else if (
    buttonValue === "+" ||
    buttonValue === "-" ||
    buttonValue === "*" ||
    buttonValue === "/"
  ) {
    if (currentInput !== "") {
      currentOperator = buttonValue;
      currentInput += buttonValue;
    }
  } else if (buttonValue === "=") {
    if (currentInput !== "") {
      currentInput = calculateExpression(currentInput);
      currentOperator = "";
    }
  } else if (buttonValue === "C") {
    currentInput = "";
    currentOperator = "";
  } else if (buttonValue === "(" || buttonValue === ")") {
    currentInput += buttonValue;
  }

  resultElement.value = currentInput;
}

function calculateExpression(expression) {
  try {
    return eval(expression);
  } catch (error) {
    return "Błąd";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", buttonClick);
});
