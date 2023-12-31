const resultElement = document.getElementById("result");
const historyElement = document.getElementById("history");
const toggleHistoryButton = document.getElementById("toggleHistory");
const buttons = document.querySelectorAll("button");
let historyVisible = false;

toggleHistoryButton.addEventListener("click", function () {
  if (historyVisible) {
    historyElement.style.display = "none";
  } else {
    historyElement.style.display = "block";
  }
  historyVisible = !historyVisible;
});

let currentInput = "";
let currentOperator = "";
let decimalAdded = false;

function buttonClick(event) {
  const buttonValue = event.target.textContent;
  handleButton(buttonValue);
}

function handleButton(buttonValue) {
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
      const result = calculateExpression(currentInput);
      historyElement.innerHTML += `${currentInput} = ${result}<br>`;
      currentInput = result.toString();
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
    currentInput = currentInput.slice(0, -1);
    decimalAdded = currentInput.includes(".");
  } else if (buttonValue === ".") {
    if (!decimalAdded) {
      currentInput += buttonValue;
      decimalAdded = true;
    }
  } else if (buttonValue === "%") {
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
