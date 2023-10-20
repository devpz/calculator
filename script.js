// Pobieramy elementy kalkulatora
const resultElement = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let currentInput = ""; // Przechowuje aktualne wprowadzane liczby i operatory
let currentOperator = ""; // Przechowuje aktualnie wybrany operator

// Funkcja obsługująca kliknięcie na przycisk
function buttonClick(event) {
  const buttonValue = event.target.textContent;

  if (buttonValue >= "0" && buttonValue <= "9") {
    // Kliknięto cyfrę, dodaj ją do aktualnego wprowadzenia
    currentInput += buttonValue;
  } else if (
    buttonValue === "+" ||
    buttonValue === "-" ||
    buttonValue === "*" ||
    buttonValue === "/"
  ) {
    // Kliknięto operator, zapisz aktualne wprowadzenie i operator
    if (currentInput !== "") {
      currentOperator = buttonValue;
      currentInput += buttonValue;
    }
  } else if (buttonValue === "=") {
    // Kliknięto "=" - oblicz wynik
    if (currentInput !== "") {
      currentInput = eval(currentInput).toString();
      currentOperator = "";
    }
  } else if (buttonValue === "C") {
    // Kliknięto "C" - wyczyść kalkulator
    currentInput = "";
    currentOperator = "";
  }

  // Wyświetl aktualne wprowadzenie w polu wynikowym
  resultElement.value = currentInput;
}

// Dodaj obsługę kliknięć dla wszystkich przycisków
buttons.forEach((button) => {
  button.addEventListener("click", buttonClick);
});
