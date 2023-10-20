const resultElement = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let currentOperator = "";

function buttonClick(event) {
  const buttonValue = event.target.textContent;

  if ((buttonValue >= "0" && buttonValue <= "9") || buttonValue === ".") {
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
  } else if (buttonValue === "←") {
    // Usuwanie ostatniego znaku
    currentInput = currentInput.slice(0, -1);
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
