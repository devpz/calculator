const resultElement = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let currentOperator = "";
let decimalAdded = false;

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
      decimalAdded = false;
    }
  } else if (buttonValue === "=") {
    if (currentInput !== "") {
      currentInput = calculateExpression(currentInput);
      currentOperator = "";
    }
  } else if (buttonValue === "C") {
    currentInput = "";
    currentOperator = "";
    decimalAdded = false;
  } else if (buttonValue === "(" || buttonValue === ")") {
    currentInput += buttonValue;
    decimalAdded = false;
  } else if (buttonValue === "←") {
    // Usuwanie ostatniego znaku
    currentInput = currentInput.slice(0, -1);
    decimalAdded = currentInput.includes(".");
  } else if (buttonValue === ".") {
    // Obsługa liczby dziesiętnej
    if (!decimalAdded) {
      currentInput += buttonValue;
      decimalAdded = true;
    }
  } else if (buttonValue === "%") {
    // Obsługa procentów
    if (currentInput !== "") {
      const number = eval(currentInput);
      currentInput = (number * 0.01).toString();
    }
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
